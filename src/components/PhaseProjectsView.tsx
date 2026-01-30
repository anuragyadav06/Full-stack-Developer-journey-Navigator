import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { projects, phases } from '@/data/roadmapData';

interface PhaseProjectsViewProps {
  phaseId: string;
  onBack: () => void;
}

export const PhaseProjectsView: React.FC<PhaseProjectsViewProps> = ({
  phaseId,
  onBack
}) => {

  const phase = phases.find(p => p.id === phaseId);

  const filteredProjects = projects.filter(
    project => project.phase === phaseId
  );

  const getProgress = (subtasks: any[]) => {
    if (!subtasks.length) return 0;
    const done = subtasks.filter(s => s.completed).length;
    return Math.round((done / subtasks.length) * 100);
  };

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">

          <button
            onClick={onBack}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <h1 className="text-2xl font-bold">
              {phase?.shortName} Projects
            </h1>
            <p className="text-muted-foreground text-sm">
              {phase?.description}
            </p>
          </div>

        </div>

        {/* Projects */}
        <div className="space-y-6">

          {filteredProjects.map(project => {

            const progress = getProgress(project.subtasks);

            return (
              <div
                key={project.id}
                className="glass-card p-6 space-y-4"
              >

                {/* Title + Progress */}
                <div className="flex justify-between items-center">

                  <h2 className="text-xl font-semibold">
                    {project.name}
                  </h2>

                  <span className="text-sm text-muted-foreground">
                    {progress}%
                  </span>

                </div>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: phase?.color
                    }}
                  />
                </div>

                {/* Skills */}
                <div>
                  <p className="text-sm font-medium mb-2">
                    Skills Used
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-muted"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>
                </div>

                {/* Subtasks */}
                <div>
                  <p className="text-sm font-medium mb-2">
                    Tasks
                  </p>

                  <div className="space-y-2">

                    {project.subtasks.map(task => (
                      <div
                        key={task.id}
                        className="flex items-center gap-2 text-sm"
                      >

                        <CheckCircle
                          size={16}
                          className={
                            task.completed
                              ? 'text-green-500'
                              : 'text-muted-foreground'
                          }
                        />

                        <span
                          className={
                            task.completed
                              ? 'line-through text-muted-foreground'
                              : ''
                          }
                        >
                          {task.title}
                        </span>

                      </div>
                    ))}

                  </div>
                </div>

                {/* Timeline */}
                <p className="text-xs text-muted-foreground">
                  Scheduled: Day {project.startDay} → Day {project.endDay}
                </p>

              </div>
            );
          })}

          {!filteredProjects.length && (
            <div className="glass-card p-8 text-center text-muted-foreground">
              No projects found for this phase.
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
