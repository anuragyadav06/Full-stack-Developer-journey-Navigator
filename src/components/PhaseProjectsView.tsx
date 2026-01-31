import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, ChevronDown } from 'lucide-react';
import { projects, phases } from '@/data/roadmapData';
import {
  getProjectProgress,
  updateProjectSubtask
} from '@/lib/storage';

interface PhaseProjectsViewProps {
  phaseId: string;
  onBack: () => void;
}

export const PhaseProjectsView: React.FC<PhaseProjectsViewProps> = ({
  phaseId,
  onBack
}) => {
  const phase = phases.find(p => p.id === phaseId);
  const filteredProjects = projects.filter(p => p.phase === phaseId);

  const progressData = getProjectProgress();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [, forceRefresh] = useState(0);

  const getProgress = (project: any) => {
    const p = progressData[project.id];
    if (!p) return 0;

    const total = project.subtasks.length;
    const done = project.subtasks.filter(
      (t: any) => p.subtaskCompletions[t.id]
    ).length;

    return Math.round((done / total) * 100);
  };

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={onBack}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80"
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

        {/* PROJECT LIST */}
        <div className="space-y-4">

          {filteredProjects.map(project => {
            const progress = getProgress(project);
            const isOpen = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="glass-card p-6 transition-all"
              >

                {/* COLLAPSED HEADER */}
                <div
                  onClick={() =>
                    setExpandedId(isOpen ? null : project.id)
                  }
                  className="cursor-pointer select-none"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">
                      {project.name}
                    </h2>

                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">
                        {progress}%
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-1">
                    {project.description}
                  </p>

                  {/* PROGRESS BAR */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-3">
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: phase?.color
                      }}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground mt-2">
                    Scheduled: Day {project.startDay} → Day {project.endDay}
                  </p>
                </div>

                {/* EXPANDED CONTENT */}
                {isOpen && (
                  <div className="mt-6 space-y-4 fade-in">

                    {/* SKILLS */}
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

                    {/* TASKS */}
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Tasks
                      </p>

                      <div className="space-y-2">
                        {project.subtasks.map(task => {
                          const done =
                            progressData[project.id]?.subtaskCompletions[
                              task.id
                            ] || false;

                          return (
                            <div
                              key={task.id}
                              onClick={() => {
                                updateProjectSubtask(
                                  project.id,
                                  task.id,
                                  !done
                                );
                                forceRefresh(v => v + 1);
                              }}
                              className="flex items-center gap-3 text-sm cursor-pointer hover:opacity-90"
                            >
                              <CheckCircle
                                size={18}
                                className={
                                  done
                                    ? 'text-green-500 glow-effect'
                                    : 'text-muted-foreground'
                                }
                              />

                              <span
                                className={
                                  done
                                    ? 'line-through text-muted-foreground'
                                    : ''
                                }
                              >
                                {task.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}

          {!filteredProjects.length && (
            <div className="glass-card p-8 text-center text-muted-foreground">
              No projects found.
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
