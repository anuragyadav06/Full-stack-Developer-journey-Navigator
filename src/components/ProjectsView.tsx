import React from 'react';
import { phases } from '@/data/roadmapData';

interface ProjectsViewProps {
  onSelectPhase: (phaseId: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectPhase }) => {
  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground mb-8">
          Choose a phase to view its projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {phases.map(phase => (
            <button
              key={phase.id}
              onClick={() => onSelectPhase(phase.id)}
              className="glass-card p-6 text-left hover:opacity-90 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: phase.color }}
                />
                <h2 className="text-lg font-semibold">
                  {phase.shortName}
                </h2>
              </div>

              <p className="text-sm text-muted-foreground">
                {phase.description}
              </p>
            </button>
          ))}

        </div>

      </div>
    </div>
  );
};
