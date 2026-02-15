import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { dailyTasks, phases, TaskType } from '@/data/roadmapData';
import { 
  getTaskCompletions, 
  setTaskCompletion,
  getTaskDate
} from '@/lib/storage';

export const RoadmapView: React.FC = () => {

  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedPhase, setSelectedPhase] = useState<string | 'all'>('all');
  const [filterType, setFilterType] = useState<TaskType | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [search, setSearch] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const completions = getTaskCompletions();

  const totalWeeks = Math.ceil(dailyTasks.length / 7);

  /* ===================== */
  /* TODAY + NEXT TASK */
  /* ===================== */

  const pendingTasks = useMemo(() => {
    return dailyTasks.filter(
      task => !completions[task.id]?.completed
    );
  }, [refreshKey]);

  const todayTask = pendingTasks[0] || null;
  const nextTask = pendingTasks[1] || null;

  /* ===================== */
  /* AUTO JUMP WEEK */
  /* ===================== */

  useEffect(() => {
    if (todayTask) {
      setSelectedWeek(todayTask.week);
    }
  }, []);

  /* ===================== */
  /* FILTER TASKS */
  /* ===================== */

  const filteredTasks = useMemo(() => {

    return dailyTasks.filter(task => {

      if (search.trim() !== '') {
        return task.topic
          .toLowerCase()
          .includes(search.toLowerCase());
      }

      if (task.week !== selectedWeek) return false;

      if (selectedPhase !== 'all' && task.phase !== selectedPhase) return false;

      if (filterType !== 'all' && task.taskType !== filterType) return false;

      if (!showCompleted && completions[task.id]?.completed) return false;

      return true;

    });

  }, [
    selectedWeek,
    selectedPhase,
    filterType,
    showCompleted,
    refreshKey,
    search
  ]);

  /* ===================== */
  /* WEEK DATE RANGE */
  /* ===================== */

  const getWeekDateRange = (week: number) => {
    const firstDayOfWeek = (week - 1) * 7 + 1;
    const lastDayOfWeek = Math.min(week * 7, dailyTasks.length);

    const startDate = new Date(getTaskDate(firstDayOfWeek));
    const endDate = new Date(getTaskDate(lastDayOfWeek));

    const format = (d: Date) =>
      d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return `${format(startDate)} - ${format(endDate)}`;
  };

  const handleCompletionChange = () => {
    setRefreshKey(v => v + 1);
  };

  /* ===================== */
  /* UI */
  /* ===================== */

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">

      {/* 🔥 SCROLLABLE CONTAINER - Everything scrolls together */}
      <div className="flex-1 overflow-y-auto">

        <div className="max-w-4xl mx-auto p-6 lg:p-8">

          {/* HEADER - Scrolls */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div>
              <h1 className="text-2xl font-bold mb-1">
                Learning Roadmap
              </h1>
              <p className="text-sm text-muted-foreground">
                Your day-by-day journey to Java Full Stack mastery
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

          {/* WEEK NAVIGATION - Scrolls */}
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
                <h2 className="text-xl font-bold">
                  Week {selectedWeek}
                </h2>
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

            {/* WEEK SCROLL */}
            <div className="flex gap-2 overflow-x-auto py-2">

              {Array.from({ length: totalWeeks }, (_, i) => i + 1).map(week => (

                <button
                  key={week}
                  onClick={() => setSelectedWeek(week)}
                  className={`px-4 py-2 rounded-full transition ${
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

          {/* 🔥 STICKY FILTERS - Becomes sticky when scrolling */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm pb-4">
            
            <div className="glass-card p-4">

              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Filters
                </span>
              </div>

              <div className="flex flex-wrap gap-3">

                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(e.target.value)}
                  className="bg-muted rounded-lg px-3 py-2"
                >
                  <option value="all">All Phases</option>
                  {phases.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.shortName}
                    </option>
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
                  <span className="text-sm text-muted-foreground">
                    Show completed
                  </span>
                </label>

              </div>

            </div>

          </div>

          {/* 🔥 TASK LIST - Scrolls normally */}
          <div className="space-y-4 pb-8">

            {filteredTasks.length ? (

              filteredTasks.map(task => {

                const completion = completions[task.id];

                return (
                  <div key={task.id} className="space-y-1">

                    <TaskCard
                      task={task}
                      isToday={task.id === todayTask?.id}
                      isNext={task.id === nextTask?.id}
                      onCompletionChange={handleCompletionChange}
                    />

                    {/* COMPLETED DATE */}
                    {completion?.completed && (

                      <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground">

                        <span>Completed on</span>

                        <input
                          type="date"
                          value={completion.completedAt || ""}
                          onChange={(e) => {
                            setTaskCompletion(task.id, true, e.target.value);
                            setRefreshKey(v => v + 1);
                          }}
                          className="bg-muted px-2 py-1 rounded-md outline-none"
                        />

                      </div>

                    )}

                  </div>
                );
              })

            ) : (

              <div className="glass-card p-8 text-center text-muted-foreground">
                No tasks found.
              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};