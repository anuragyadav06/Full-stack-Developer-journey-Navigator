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
  const [search, setSearch] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const { today: todayTask, next: nextTask } = getTodayAndNextTask(dailyTasks);

  const totalWeeks = Math.ceil(dailyTasks.length / 7);

  // Auto jump to current studying week
  useEffect(() => {
    const completions = getTaskCompletions();

    const currentTask = dailyTasks.find(
      task => !completions[task.id]?.completed
    );

    if (currentTask) {
      setSelectedWeek(currentTask.week);
    }
  }, []);

  // Filter logic
  const filteredTasks = useMemo(() => {

    const completions = getTaskCompletions();

    return dailyTasks.filter(task => {

      // SEARCH MODE
      if (search.trim() !== '') {
        return task.topic.toLowerCase().includes(search.toLowerCase());
      }

      // NORMAL MODE
      if (task.week !== selectedWeek) return false;

      if (selectedPhase !== 'all' && task.phase !== selectedPhase) return false;

      if (filterType !== 'all' && task.taskType !== filterType) return false;

      if (!showCompleted && completions[task.id]?.completed) return false;

      return true;
    });

  }, [selectedWeek, selectedPhase, filterType, showCompleted, refreshKey, search]);

  // Week date range
  const getWeekDateRange = (week: number) => {

    const weekTasks = dailyTasks.filter(t => t.week === week);

    if (!weekTasks.length) return '';

    const startDate = new Date(weekTasks[0].date);
    const endDate = new Date(weekTasks[weekTasks.length - 1].date);

    const format = (d: Date) =>
      d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return `${format(startDate)} - ${format(endDate)}`;
  };

  const handleCompletionChange = () => {
    setRefreshKey(p => p + 1);
  };

  return (
    <div className="flex-1 p-6 lg:p-8 flex flex-col overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col flex-1 overflow-hidden">

        {/* HEADER + SEARCH */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">
              Learning Roadmap
            </h1>
            <p className="text-muted-foreground text-sm">
              Your day-by-day journey to becoming a Java Full Stack Developer
            </p>
          </div>

          <input
            type="text"
            placeholder="Search topics"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs bg-muted px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-primary"
          />

        </div>

        {/* WEEK NAVIGATION */}
        <div className="glass-card p-4 mb-6">

          <div className="flex items-center justify-between mb-3">

            <button
              onClick={() => setSelectedWeek(w => Math.max(1, w - 1))}
              disabled={selectedWeek === 1}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h2 className="text-xl font-bold">Week {selectedWeek}</h2>
              <p className="text-sm text-muted-foreground">
                {getWeekDateRange(selectedWeek)}
              </p>
            </div>

            <button
              onClick={() => setSelectedWeek(w => Math.min(totalWeeks, w + 1))}
              disabled={selectedWeek === totalWeeks}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* HORIZONTAL WEEK SCROLL */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2">

            {Array.from({ length: totalWeeks }, (_, i) => i + 1).map(week => (

              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                  selectedWeek === week
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/70'
                }`}
              >
                W{week}
              </button>

            ))}

          </div>
        </div>

        {/* FILTERS */}
        <div className="glass-card p-4 mb-4">

          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filters</span>
          </div>

          <div className="flex flex-wrap gap-3">

            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="bg-muted rounded-lg px-3 py-2"
            >
              <option value="all">All Phases</option>
              {phases.map(p => (
                <option key={p.id} value={p.id}>{p.shortName}</option>
              ))}
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as TaskType | 'all')}
              className="bg-muted rounded-lg px-3 py-2"
            >
              <option value="all">All Types</option>
              <option value="learn">Learn</option>
              <option value="practice">Practice</option>
              <option value="build">Build</option>
              <option value="revise">Revise</option>
            </select>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
              />
              <span className="text-sm text-muted-foreground">Show completed</span>
            </label>

          </div>
        </div>

        {/* TASKS (ONLY THIS SCROLLS) */}
        <div className="space-y-4 overflow-y-auto flex-1 pr-2">

          {filteredTasks.length ? (

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

            <div className="glass-card p-8 text-center text-muted-foreground">
              No tasks found.
            </div>

          )}

        </div>

      </div>
    </div>
  );
};
