import React, { useState, useEffect } from 'react';
import { Check, Clock, BookOpen, Code, Wrench, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { DailyTask, TaskType } from '@/data/roadmapData';
import { getTaskCompletions, setTaskCompletion, getTaskNotes, setTaskNote } from '@/lib/storage';

interface TaskCardProps {
  task: DailyTask;
  isToday?: boolean;
  isNext?: boolean;
  onCompletionChange?: () => void;
}

const taskTypeConfig: Record<TaskType, { icon: typeof BookOpen; label: string; color: string }> = {
  learn: { icon: BookOpen, label: 'Learn', color: 'bg-primary/20 text-primary' },
  practice: { icon: Code, label: 'Practice', color: 'bg-success/20 text-success' },
  build: { icon: Wrench, label: 'Build', color: 'bg-warning/20 text-warning' },
  revise: { icon: RefreshCw, label: 'Revise', color: 'bg-accent/20 text-accent' }
};

export const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  isToday = false, 
  isNext = false,
  onCompletionChange 
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [note, setNote] = useState('');
  const [isExpanded, setIsExpanded] = useState(isToday || isNext);
  
  const config = taskTypeConfig[task.taskType];
  const Icon = config.icon;
  
  useEffect(() => {
    const completions = getTaskCompletions();
    const notes = getTaskNotes();
    
    setIsCompleted(completions[task.id]?.completed || false);
    setNote(notes[task.id]?.note || '');
  }, [task.id]);
  
  const handleToggleComplete = () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);
    setTaskCompletion(task.id, newCompleted);
    onCompletionChange?.();
  };
  
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value;
    setNote(newNote);
    setTaskNote(task.id, newNote);
  };
  
  return (
    <div 
      className={`task-card fade-in ${isCompleted ? 'opacity-60' : ''} ${isToday ? 'border-primary/50 glow-effect' : ''} ${isNext && !isToday ? 'border-warning/30' : ''}`}
    >
      <div className="flex items-start gap-4">
        {/* Completion checkbox */}
        <button
          onClick={handleToggleComplete}
          className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
            isCompleted 
              ? 'bg-success border-success' 
              : 'border-muted-foreground/40 hover:border-primary'
          }`}
        >
          {isCompleted && <Check className="w-4 h-4 text-success-foreground" />}
        </button>
        
        {/* Task content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            {/* Day badge */}
            <span className="text-xs font-mono text-muted-foreground">
              Day {task.dayNumber}
            </span>
            
            {/* Task type badge */}
            <span className={`phase-badge ${config.color} flex items-center gap-1`}>
              <Icon className="w-3 h-3" />
              {config.label}
            </span>
            
            {/* Today/Next badge */}
            {isToday && (
              <span className="phase-badge bg-primary text-primary-foreground">
                Today
              </span>
            )}
            {isNext && !isToday && (
              <span className="phase-badge bg-warning text-warning-foreground">
                Next Up
              </span>
            )}
          </div>
          
          {/* Topic title */}
          <h3 className={`font-semibold text-foreground mb-1 ${isCompleted ? 'line-through' : ''}`}>
            {task.topic}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3">
            {task.description}
          </p>
          
          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {task.estimatedMinutes} min
            </span>
            <span className="text-muted-foreground/60">|</span>
            <span>Outcome: {task.outcome}</span>
          </div>
          
          {/* Expandable section */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs text-primary mt-3 hover:underline"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3 h-3" /> Hide notes
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3" /> Add notes
              </>
            )}
          </button>
          
          {isExpanded && (
            <div className="mt-3 fade-in">
              <textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Add your notes here... What did you learn? Any blockers?"
                className="w-full bg-muted/50 border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                rows={3}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
