'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';

import Overlay from '@/components/Overlay';
import Card from '@/components/Card';
import Layout from '@/components/Layout';

import '@/styles/styles.scss';
// import '@/styles/fonts.scss';
import 'animate.css';
import { metropolis } from '@/app/utils/local-font';
import { useUIStore } from '@/stores/uiStore';

const NoSSRCanvas = dynamic(() => import('@/components/Canvas'), {
  ssr: false,
});

function getImagePath(name, mode) {
  return `/images/${name}${mode ? '-dark' : ''}.png`;
}

export default function App() {
  console.log('cloud name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

  const [{ background, fill }, set] = useSpring(
    {
      background: '#fff',
      fill: '#202020',
    },
    []
  );
  const mode = useUIStore((s) => s.mode);

  // showMore state controls the collapsible area
  const [showMore, setShowMore] = useState(false);

  console.log(getImagePath('thumbnail8', mode));

  return (
    <Layout fill={fill} isProjectPage={false}>
      <a.main
        style={{ background }}
        className="overflow-x-hidden items-center flex-col"
      >
        <section className="container mx-auto max-w-screen-xl h-[80vh] flex flex-col  md:flex-row items-center">
          <NoSSRCanvas setBg={set} />
          <Overlay fill={fill} />
        </section>
        <section className="animate__animated animate__fadeIn animate__delay-1s w-full h-[10vh] text-center flex items-center justify-center">
          <span
            className={`${metropolis.className} role inline-block mt-4 mb-2 text-sm md:mb-3 md:text-base font-normal`}
            id="scroll-to-explore"
          >
            <div
              className={`icon-scroll ${mode ? 'icon-scroll-contrast' : ''}`}
            />
          </span>
        </section>

        <section className="animate__animated animate__fadeIn animate__delay-1s w-full ml-8 mr-8 flex justify-center">
          <div className="max-w-screen-xl w-full py-8 mx-4 lg:mx-0">
            {/* Layout:
                - One full-width card on top using thumbnail8
                - A mid single card (kept here for continuity)
                - Two bottom cards (Famly and Google) displayed 50/50 on md+ and full width on small screens
                - Collapsible area below
            */}
            <div className="grid gap-6">
              {/* Top full-width card (thumbnail8) */}
              <div className="w-full">
                <Card
                  title="LiveOps Alerting System"
                  description="A highlight of my recent work"
                  role="UX/UI DESIGN"
                  image={getImagePath('thumbnail8', mode)}
                  url="featured"
                  label="2025"
                  company="Tactile Games"
                  isPasswordProtected
                  fill={fill}
                  project="notifications-system"
                  height={400}
                />
              </div>

              {/* Mid card (kept visible above the bottom two) */}
              {/*<div>*/}
              {/*  <Card*/}
              {/*    title="LiveOps Dashboard Notifications System"*/}
              {/*    description="Making Google Search the most loved tool for travellers"*/}
              {/*    role="UX/UI DESIGN"*/}
              {/*    image="./images/thumbnail7.png"*/}
              {/*    url="explore"*/}
              {/*    label="Shipped"*/}
              {/*    isPasswordProtected*/}
              {/*    fill={fill}*/}
              {/*    project="notifications-system"*/}
              {/*  />*/}
              {/*</div>*/}

              {/* Bottom two: Famly and Google - 50% / 50% on md+, full width on small */}
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                <Card
                  title="Game Setup Canvas Tool"
                  description="Making Google Search the most loved tool for travellers"
                  role="UX/UI DESIGN"
                  image={getImagePath('thumbnail9', mode)}
                  url="explore"
                  label="2025"
                  company="Tactile Games"
                  isPasswordProtected
                  fill={fill}
                  project="game-setup"
                />
                <Card
                  title="Google Search for Travellers"
                  description="Making Google Search the most loved tool for travellers"
                  role="UX/UI DESIGN"
                  image={getImagePath('thumbnail5', mode)}
                  url="explore"
                  label="2024"
                  company="Google"
                  isPasswordProtected
                  fill={fill}
                  project="google-travel"
                />
                <Card
                  title="Famly's Redesign"
                  description="Shaping a design system for a mature product"
                  role="UX/UI DESIGN | USER RESEARCH"
                  image={getImagePath('famlyThumbnail', mode)}
                  url="famly"
                  label="2023"
                  company="Famly"
                  fill={fill}
                  project="famly-redesign"
                />
              </div>

              {/* Collapsible area (hidden by default) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(.2,.9,.2,1)] ${
                  showMore
                    ? 'max-h-[3000px] opacity-100 mt-6'
                    : 'max-h-0 opacity-0'
                }`}
                aria-hidden={!showMore}
              >
                <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-6">
                  <Card
                    title="JSON Editor UI"
                    description="Enabling faster, safer, developer-independent updates to live game content"
                    role="UX/UI DESIGN"
                    image="./images/thumbnail6.png"
                    url="json"
                    label="Shipped"
                    isPasswordProtected
                    fill={fill}
                    project="json"
                  />
                  <Card
                    title="Racefinder App"
                    description="Optimizing the racebooking process to help runners find their next race easier"
                    role="UX/UI DESIGN | USER RESEARCH"
                    image="./images/thumbnail1.png"
                    url="racefinder"
                    label="Side project"
                    fill={fill}
                    project="racefinder"
                  />
                  <Card
                    title="Visual Exploration of Time Series in Healthcare"
                    description="Generate medical charts given patient data"
                    role="DATA VISUALIZATION | UX/UI DESIGN"
                    image="./images/thumbnail2.png"
                    url="time-series"
                    label="Research"
                    fill={fill}
                    project="time-series"
                  />
                </div>
              </div>
            </div>

            {/* SEE MORE button - placed outside the collapsible container so it's always visible */}
            {/*<div className="mt-8 flex justify-center">*/}
            {/*  <button*/}
            {/*    onClick={() => setShowMore((s) => !s)}*/}
            {/*    aria-expanded={showMore}*/}
            {/*    className={`*/}
            {/*      relative z-50 inline-flex items-center gap-3 px-6 py-2 rounded-full*/}
            {/*      bg-black/85 text-white font-medium*/}
            {/*      shadow-[0_8px_24px_rgba(2,6,23,0.45)]*/}
            {/*      border border-white/10*/}
            {/*      hover:bg-black/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30*/}
            {/*    `}*/}
            {/*    // Temporary inline debug style (uncomment to force visibility if still hidden)*/}
            {/*    // style={{ position: 'fixed', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}*/}
            {/*  >*/}
            {/*    <span>{showMore ? 'Show less' : 'See more'}</span>*/}
            {/*    <svg*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*      className={`h-4 w-4 transition-transform duration-200 ${showMore ? 'rotate-180' : 'rotate-0'}`}*/}
            {/*      viewBox="0 0 20 20"*/}
            {/*      fill="currentColor"*/}
            {/*      aria-hidden="true"*/}
            {/*    >*/}
            {/*      <path*/}
            {/*        fillRule="evenodd"*/}
            {/*        d="M10 3a1 1 0 01.707.293l5 5a1 1 0 11-1.414 1.414L10 5.414 5.707 9.707A1 1 0 114.293 8.293l5-5A1 1 0 0110 3z"*/}
            {/*        clipRule="evenodd"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        </section>
      </a.main>
    </Layout>
  );
}
