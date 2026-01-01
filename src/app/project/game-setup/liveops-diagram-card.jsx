'use client';

import ForceGraph from './force-graph';

export function LiveOpsDiagramCard({ metropolis }) {
  const nodes = [
    { id: 'Game Setup' },

    { id: 'Dashboard' },
    { id: 'Game Canvas' },
    { id: 'Blueprint (legacy)' },

    { id: 'LiveOps Admin' },
    { id: 'Feature Flags' },
    { id: 'Remote Config' },
    { id: 'Rules Engine' },
    { id: 'Segmentation' },
    { id: 'Experimentation (A/B)' },
    { id: 'Offers & Store' },
    { id: 'Events Scheduler' },

    { id: 'Backend Runtime' },
    { id: 'Config Service' },
    { id: 'Gateway / API' },
    { id: 'Matchmaking' },
    { id: 'Economy Service' },
    { id: 'Inventory Service' },
    { id: 'Player Profile' },
    { id: 'Entitlements' },

    { id: 'Redis Cache' },
    { id: 'SQL DB' },
    { id: 'Blob Storage' },

    { id: 'Game Client' },
    { id: 'Client Events SDK' },
    { id: 'Event Ingestion' },
    { id: 'Stream Processing' },
    { id: 'Data Warehouse' },
    { id: 'Dashboards / BI' },
    { id: 'Attribution' },

    { id: 'Build Pipeline' },
    { id: 'CI' },
    { id: 'CD' },
    { id: 'App Store' },
    { id: 'Feature Rollout' },

    { id: 'IAM / Permissions' },
    { id: 'Audit Log' },
    { id: 'Approvals' },
    { id: 'Policy Checks' },

    { id: 'Infrastructure' },
    { id: 'Kubernetes / Compute' },
    { id: 'Secrets Manager' },

    { id: 'Monitoring' },
    { id: 'Logs' },
    { id: 'Alerts / On-call' },
    { id: 'SLO / Reliability' },

    { id: 'Players' },
  ];

  const links = [
    // Backbone
    { source: 'Game Setup', target: 'Dashboard', strength: 1.0 },
    { source: 'Game Setup', target: 'Game Canvas', strength: 1.0 },
    { source: 'Game Setup', target: 'Build Pipeline', strength: 1.0 },
    { source: 'Game Setup', target: 'Infrastructure', strength: 1.0 },
    { source: 'Game Setup', target: 'IAM / Permissions', strength: 1.0 },
    { source: 'Game Setup', target: 'Monitoring', strength: 1.0 },
    { source: 'Game Setup', target: 'Event Ingestion', strength: 1.0 },
    { source: 'Game Setup', target: 'Backend Runtime', strength: 1.0 },

    // Ownership
    { source: 'Blueprint (legacy)', target: 'Game Setup' },
    { source: 'Dashboard', target: 'Game Canvas' },
    { source: 'Game Canvas', target: 'LiveOps Admin' },
    { source: 'Game Canvas', target: 'Infrastructure' },
    { source: 'Game Canvas', target: 'IAM / Permissions' },
    { source: 'Game Canvas', target: 'Build Pipeline' },

    // LiveOps config
    { source: 'Dashboard', target: 'LiveOps Admin' },
    { source: 'LiveOps Admin', target: 'Feature Flags' },
    { source: 'LiveOps Admin', target: 'Remote Config' },
    { source: 'LiveOps Admin', target: 'Offers & Store' },
    { source: 'LiveOps Admin', target: 'Events Scheduler' },
    { source: 'LiveOps Admin', target: 'Experimentation (A/B)' },
    { source: 'Experimentation (A/B)', target: 'Segmentation' },
    { source: 'Segmentation', target: 'Rules Engine' },
    { source: 'Feature Flags', target: 'Rules Engine' },
    { source: 'Remote Config', target: 'Config Service' },
    { source: 'Rules Engine', target: 'Config Service' },

    // Runtime path
    { source: 'Config Service', target: 'Backend Runtime' },
    { source: 'Backend Runtime', target: 'Gateway / API' },
    { source: 'Gateway / API', target: 'Game Client' },
    { source: 'Game Client', target: 'Players' },

    // Runtime services
    { source: 'Backend Runtime', target: 'Player Profile' },
    { source: 'Backend Runtime', target: 'Inventory Service' },
    { source: 'Backend Runtime', target: 'Economy Service' },
    { source: 'Backend Runtime', target: 'Entitlements' },
    { source: 'Backend Runtime', target: 'Matchmaking' },

    // Storage
    { source: 'Player Profile', target: 'SQL DB' },
    { source: 'Inventory Service', target: 'SQL DB' },
    { source: 'Economy Service', target: 'SQL DB' },
    { source: 'Entitlements', target: 'SQL DB' },
    { source: 'Gateway / API', target: 'Redis Cache' },
    { source: 'Backend Runtime', target: 'Blob Storage' },

    // Analytics
    { source: 'Game Client', target: 'Client Events SDK' },
    { source: 'Client Events SDK', target: 'Event Ingestion' },
    { source: 'Event Ingestion', target: 'Stream Processing' },
    { source: 'Stream Processing', target: 'Data Warehouse' },
    { source: 'Data Warehouse', target: 'Dashboards / BI' },
    { source: 'Attribution', target: 'Data Warehouse' },
    { source: 'Dashboards / BI', target: 'Dashboard' },

    // Release
    { source: 'Build Pipeline', target: 'CI' },
    { source: 'CI', target: 'CD' },
    { source: 'CD', target: 'App Store' },
    { source: 'App Store', target: 'Game Client' },
    { source: 'Build Pipeline', target: 'Feature Rollout' },
    { source: 'Feature Rollout', target: 'Feature Flags' },
    { source: 'CD', target: 'Backend Runtime' },

    // Permissions
    { source: 'IAM / Permissions', target: 'Approvals' },
    { source: 'Approvals', target: 'Policy Checks' },
    { source: 'Policy Checks', target: 'LiveOps Admin' },
    { source: 'IAM / Permissions', target: 'Audit Log' },
    { source: 'LiveOps Admin', target: 'Audit Log' },
    { source: 'IAM / Permissions', target: 'Backend Runtime' },

    // Infra
    { source: 'Infrastructure', target: 'Kubernetes / Compute' },
    { source: 'Kubernetes / Compute', target: 'Backend Runtime' },
    { source: 'Infrastructure', target: 'Secrets Manager' },
    { source: 'Secrets Manager', target: 'Backend Runtime' },

    // Observability
    { source: 'Backend Runtime', target: 'Logs' },
    { source: 'Gateway / API', target: 'Logs' },
    { source: 'Logs', target: 'Monitoring' },
    { source: 'Monitoring', target: 'Alerts / On-call' },
    { source: 'Monitoring', target: 'SLO / Reliability' },
    { source: 'Alerts / On-call', target: 'Dashboard' },

    // Cross-links
    { source: 'Monitoring', target: 'Backend Runtime' },
    { source: 'Event Ingestion', target: 'Monitoring' },
    { source: 'Infrastructure', target: 'Monitoring' },
  ];

  return (
    <div className="mt-12 w-full">
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        {/* Graph */}
        <div className="bg-white">
          <ForceGraph
            nodes={nodes}
            links={links}
            height={420}
            nodeRadius={6}
            linkDistance={95}
            chargeStrength={-320}
          />
        </div>

        {/* Caption footer */}
        <div className="px-5 py-4 md:px-6 border-t border-gray-100 bg-gray-50">
          <p
            className={`text-xs md:text-sm leading-relaxed text-gray-800 ${metropolis?.className || ''}`}
          >
            Game setup depended on many tightly coupled systems and manual
            coordination.
          </p>
        </div>
      </div>
    </div>
  );
}
