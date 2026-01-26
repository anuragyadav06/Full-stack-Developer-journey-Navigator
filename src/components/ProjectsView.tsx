import React, { useState, useEffect } from 'react';
import { Folder, Check, Clock, ChevronDown, ChevronUp, Save } from 'lucide-react';
import { projects, phases } from '@/data/roadmapData';
import { getProjectProgress as fetchProjectProgress, updateProjectSubtask, setProjectNotes as saveProjectNotes } from '@/lib/storage';
import { ProgressBar } from './ProgressRing';

export const ProjectsView: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [projectProgressData, setProjectProgressData] = useState<Record<string, any>>({});
  const [projectNotes, setProjectNotesState] = useState<Record<string, string>>({});
  
  useEffect(() => {
    const progress = fetchProjectProgress();
    setProjectProgressData(progress);
    
    const notes: Record<string, string> = {};
    Object.keys(progress).forEach(key => {
      notes[key] = progress[key]?.notes || '';
    });
    setProjectNotesState(notes);
  }, []);
  
  const handleSubtaskToggle = (projectId: string, subtaskId: string, completed: boolean) => {
    updateProjectSubtask(projectId, subtaskId, completed);
    
    // Update local state
    setProjectProgressData(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        subtaskCompletions: {
          ...prev[projectId]?.subtaskCompletions,
          [subtaskId]: completed
        }
      }
    }));
  };
  
  const handleNotesChange = (projectId: string, notes: string) => {
    setProjectNotesState(prev => ({ ...prev, [projectId]: notes }));
  };
  
  const handleNotesSave = (projectId: string) => {
    saveProjectNotes(projectId, projectNotes[projectId] || '');
  };
  
  const getProjectCompletionPercent = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return 0;
    
    const completions = projectProgressData[projectId]?.subtaskCompletions || {};
    const completed = project.subtasks.filter(s => completions[s.id]).length;
    
    return Math.round((completed / project.subtasks.length) * 100);
  };
  
  const getPhaseName = (phaseId: string) => {
    const phase = phases.find(p => p.id === phaseId);
    return phase?.shortName || phaseId;
  };
  
  const getPhaseColor = (phaseId: string) => {
    const phase = phases.find(p => p.id === phaseId);
    return phase?.color || 'hsl(var(--primary))';
  };
  
  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Projects
          </h1>
          <p className="text-muted-foreground">
            Real-world projects to apply your skills and build your portfolio
          </p>
        </div>
        
        {/* Projects List */}
        <div className="space-y-4">
          {projects.map(project => {
            const isExpanded = expandedProject === project.id;
            const progress = getProjectCompletionPercent(project.id);
            const completions = projectProgressData[project.id]?.subtaskCompletions || {};
            
            return (
              <div key={project.id} className="glass-card overflow-hidden">
                {/* Project Header */}
                <button
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  className="w-full p-5 text-left flex items-start gap-4 hover:bg-muted/30 transition-colors"
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${getPhaseColor(project.phase)}20` }}
                  >
                    <Folder 
                      className="w-6 h-6" 
                      style={{ color: getPhaseColor(project.phase) }}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">
                        {project.name}
                      </h3>
                      <span 
                        className="phase-badge text-xs"
                        style={{ 
                          backgroundColor: `${getPhaseColor(project.phase)}20`,
                          color: getPhaseColor(project.phase)
                        }}
                      >
                        {getPhaseName(project.phase)}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <ProgressBar
                        progress={progress}
                        className="flex-1 max-w-[200px]"
                        height={4}
                      />
                      <span className="text-sm text-muted-foreground">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border fade-in">
                    {/* Skills */}
                    <div className="py-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Skills Applied
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.skills.map(skill => (
                          <span 
                            key={skill}
                            className="px-2 py-1 bg-muted rounded text-xs text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Subtasks */}
                    <div className="py-4 border-t border-border">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Subtasks
                      </span>
                      <div className="mt-3 space-y-2">
                        {project.subtasks.map(subtask => {
                          const isCompleted = completions[subtask.id] || false;
                          
                          return (
                            <label 
                              key={subtask.id}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 cursor-pointer transition-colors"
                            >
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSubtaskToggle(project.id, subtask.id, !isCompleted);
                                }}
                                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                  isCompleted 
                                    ? 'bg-success border-success' 
                                    : 'border-muted-foreground/40 hover:border-primary'
                                }`}
                              >
                                {isCompleted && <Check className="w-3 h-3 text-success-foreground" />}
                              </button>
                              <span className={`text-sm ${isCompleted ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                                {subtask.title}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Notes */}
                    <div className="py-4 border-t border-border">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Project Notes
                      </span>
                      <textarea
                        value={projectNotes[project.id] || ''}
                        onChange={(e) => handleNotesChange(project.id, e.target.value)}
                        placeholder="Add notes about your progress, ideas, blockers..."
                        className="w-full mt-2 bg-muted/50 border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                        rows={4}
                      />
                      <button
                        onClick={() => handleNotesSave(project.id)}
                        className="mt-2 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save Notes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
