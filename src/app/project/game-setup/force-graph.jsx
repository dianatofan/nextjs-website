'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';

export default function ForceGraph({
  nodes = [],
  links = [],
  height = 320,
  className = '',

  // 🔽 ACTUALLY SMALL
  nodeRadius = 2, // 4px diameter
  linkDistance = 90,
  chargeStrength = -300,
}) {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);

  const data = useMemo(() => {
    return {
      n: nodes.map((d) => ({ ...d })),
      l: links.map((d) => ({ ...d })),
    };
  }, [nodes, links]);

  useEffect(() => {
    if (!wrapRef.current || !svgRef.current) return;

    const svg = d3.select(svgRef.current);

    const render = () => {
      svg.selectAll('*').remove();

      const width = wrapRef.current.getBoundingClientRect().width;
      svg.attr('width', width).attr('height', height);

      const g = svg.append('g');

      // Zoom (start slightly zoomed out)
      const zoom = d3
        .zoom()
        .scaleExtent([0.5, 2])
        .on('zoom', (event) => g.attr('transform', event.transform));

      svg.call(zoom);
      svg.call(zoom.transform, d3.zoomIdentity.scale(0.85));

      // ---- LINKS (thin, understated) ----
      const link = g
        .append('g')
        .attr('stroke', 'rgba(17, 24, 39, 0.25)')
        .attr('stroke-width', 1)
        .selectAll('line')
        .data(data.l)
        .join('line');

      // ---- NODES (true particles) ----
      const node = g
        .append('g')
        .selectAll('circle')
        .data(data.n)
        .join('circle')
        .attr('r', nodeRadius)
        .attr('fill', 'rgba(17, 24, 39, 0.85)')
        .style('cursor', 'grab');

      // ---- SIMULATION ----
      const sim = d3
        .forceSimulation(data.n)
        .force(
          'link',
          d3
            .forceLink(data.l)
            .id((d) => d.id)
            .distance(linkDistance)
            .strength(0.9)
        )
        .force('charge', d3.forceManyBody().strength(chargeStrength))
        .force('center', d3.forceCenter(width / 2, height / 2))
        // 🔽 minimal collision — no artificial spacing
        .force('collision', d3.forceCollide(nodeRadius + 1));

      // ---- DRAG ----
      const drag = d3
        .drag()
        .on('start', (event, d) => {
          if (!event.active) sim.alphaTarget(0.2).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) sim.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        });

      node.call(drag);

      // ---- TICK ----
      sim.on('tick', () => {
        link
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y);

        node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
      });

      return () => {
        sim.stop();
        svg.on('.zoom', null);
      };
    };

    const cleanup = render();

    const ro = new ResizeObserver(() => {
      cleanup?.();
      render();
    });
    ro.observe(wrapRef.current);

    return () => {
      ro.disconnect();
      cleanup?.();
    };
  }, [data, height, nodeRadius, linkDistance, chargeStrength]);

  return (
    <div ref={wrapRef} className={className} style={{ width: '100%' }}>
      <svg ref={svgRef} aria-label="Force directed graph" />
    </div>
  );
}
