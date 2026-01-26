import React, { useState } from 'react';
import { getTaskCompletions } from '@/lib/storage';
import { dailyTasks } from '@/data/roadmapData';

export const StreakCalendarView: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const completions = getTaskCompletions();

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const completedDates = Object.values(completions)
    .filter(c => c.completed && c.completedAt)
    .map(c => c.completedAt!.split('T')[0]);

  const changeMonth = (dir: number) => {
    setCurrentMonth(new Date(year, month + dir, 1));
    setSelectedDate(null);
  };

  const tasksForDate = dailyTasks.filter(
    t => completions[t.id]?.completedAt?.startsWith(selectedDate || '')
  );

  return (
    <div className="flex h-full w-full p-8 gap-6 overflow-hidden">

      {/* LEFT - CALENDAR */}
      <div className="flex-[3] glass-card p-6 flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => changeMonth(-1)}
            className="px-3 py-1 rounded bg-muted hover:bg-muted/70"
          >
            ◀
          </button>

          <h2 className="text-2xl font-bold">
            {currentMonth.toLocaleString('default', { month: 'long' })} {year}
          </h2>

          <button 
            onClick={() => changeMonth(1)}
            className="px-3 py-1 rounded bg-muted hover:bg-muted/70"
          >
            ▶
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-4 flex-1">

          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

            const isCompleted = completedDates.includes(dateStr);

            return (
              <div
                key={day}
                onClick={() => isCompleted && setSelectedDate(dateStr)}
                className={`
                  h-24 w-full rounded-xl flex items-center justify-center 
                  text-lg font-semibold cursor-pointer transition
                  ${isCompleted ? 'bg-green-500 text-black hover:bg-green-400' : 'bg-muted'}
                  ${selectedDate === dateStr ? 'ring-2 ring-primary' : ''}
                `}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT - DETAILS */}
      <div className="flex-[1] glass-card p-6 overflow-y-auto">

        <h3 className="text-lg font-semibold mb-4">
          Completed Tasks
        </h3>

        {!selectedDate && (
          <p className="text-muted-foreground">
            Select a green date to view details
          </p>
        )}

        {selectedDate && (
          <>
            <p className="text-sm mb-4 text-muted-foreground">
              Date: {selectedDate}
            </p>

            {tasksForDate.length > 0 ? (
              <ul className="space-y-3">
                {tasksForDate.map(task => (
                  <li 
                    key={task.id} 
                    className="p-3 rounded-lg bg-muted/60 text-sm"
                  >
                    {task.topic}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">
                No tasks found.
              </p>
            )}
          </>
        )}
      </div>

    </div>
  );
};
