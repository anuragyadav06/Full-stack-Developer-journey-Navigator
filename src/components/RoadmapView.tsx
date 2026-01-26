import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { dailyTasks, phases, TaskType } from '@/data/roadmapData';
import { getTaskCompletions, getTodayAndNextTask } from '@/lib/storage';

export const RoadmapView: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedPhase, setSelectedPhase] = useState<string | 'all'>('all');
  const [filterType, setFilterType] = useState<TaskType | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  
  // Get today and next task
  const { today: todayTask, next: nextTask } = getTodayAndNextTask(dailyTasks);
  
  // Calculate total weeks
  const totalWeeks = Math.ceil(dailyTasks.length / 7);
  
useEffect(() => {
  const completions = getTaskCompletions();

  const currentTask = dailyTasks.find(
    task => !completions[task.id]?.completed
  );

  if (currentTask) {
    setSelectedWeek(currentTask.week);
  }
}, []);

  
  // Filter tasks
  const filteredTasks = useMemo(() => {
    const completions = getTaskCompletions();
    
    return dailyTasks.filter(task => {
      // Week filter
      if (task.week !== selectedWeek) return false;
      
      // Phase filter
      if (selectedPhase !== 'all' && task.phase !== selectedPhase) return false;
      
      // Type filter
      if (filterType !== 'all' && task.taskType !== filterType) return false;
      
      // Completed filter
      if (!showCompleted && completions[task.id]?.completed) return false;
      
      return true;
    });
  }, [selectedWeek, selectedPhase, filterType, showCompleted, refreshKey]);
  
  // Get week date range
  const getWeekDateRange = (week: number) => {
    const weekTasks = dailyTasks.filter(t => t.week === week);
    if (weekTasks.length === 0) return '';
    
    const startDate = new Date(weekTasks[0].date);
    const endDate = new Date(weekTasks[weekTasks.length - 1].date);
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };
    
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };
  
  const handleCompletionChange = () => {
    setRefreshKey(prev => prev + 1);
  };
  
  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Learning Roadmap
          </h1>
          <p className="text-muted-foreground">
            Your day-by-day journey to becoming a Java Full Stack Developer
          </p>
        </div>
        
        {/* Week Navigation */}
        <div className="glass-card p-4 mb-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedWeek(Math.max(1, selectedWeek - 1))}
              disabled={selectedWeek === 1}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground">
                Week {selectedWeek}
              </h2>
              <p className="text-sm text-muted-foreground">
                {getWeekDateRange(selectedWeek)}
              </p>
            </div>
            
            <button
              onClick={() => setSelectedWeek(Math.min(totalWeeks, selectedWeek + 1))}
              disabled={selectedWeek === totalWeeks}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Week quick nav */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {Array.from({ length: Math.min(8, totalWeeks) }, (_, i) => i + 1).map(week => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedWeek === week
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                W{week}
              </button>
            ))}
            {totalWeeks > 8 && (
              <span className="text-muted-foreground text-sm self-center">
                ... W{totalWeeks}
              </span>
            )}
          </div>
        </div>
        
        {/* Filters */}
        <div className="glass-card p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filters</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {/* Phase filter */}
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="all">All Phases</option>
              {phases.map(phase => (
                <option key={phase.id} value={phase.id}>{phase.shortName}</option>
              ))}
            </select>
            
            {/* Type filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as TaskType | 'all')}
              className="bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="all">All Types</option>
              <option value="learn">Learn</option>
              <option value="practice">Practice</option>
              <option value="build">Build</option>
              <option value="revise">Revise</option>
            </select>
            
            {/* Show completed toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/50"
              />
              <span className="text-sm text-muted-foreground">Show completed</span>
            </label>
          </div>
        </div>
        
        {/* Tasks List */}
        <div className="space-y-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                isToday={task.id === todayTask?.id}
                isNext={task.id === nextTask?.id}
                onCompletionChange={handleCompletionChange}
              />
            ))
          ) : (
            <div className="glass-card p-8 text-center">
              <p className="text-muted-foreground">
                No tasks match your filters for this week.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
