import React from 'react';
import { dailyTasks, phases } from '@/data/roadmapData';
import { 
  getJourneyStats, 
  getUserProgress, 
  calculatePhaseProgress,
  getPhaseActualDates,
  formatDateRange
} from '@/lib/storage';

import { ProgressBar } from '@/components/ProgressRing';

export const JourneyTimelineView: React.FC = () => {

  const progress = getUserProgress();
  const stats = getJourneyStats(dailyTasks);

  const startDate = new Date(progress.startDate);
  const TOTAL_DAYS = 559;  // 🔥 UPDATED from 522

  const today = new Date();
  
  // 🔥 FIX: Calculate days passed properly (no negative values)
  const daysPassed = Math.max(
    0,  // Never show negative
    Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  );
  
  // Calculate end date
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + TOTAL_DAYS);
  
  // Format dates for display
  const startDateStr = startDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
  
  const endDateStr = endDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  });

  const percent = Math.min(100, Math.round((daysPassed / TOTAL_DAYS) * 100));

  return (
    <div className="flex-1 p-8 overflow-y-auto">

      <h1 className="text-2xl font-bold mb-6">
        Journey Timeline
      </h1>

      {/* Timeline Bar with Start/End Dates */}
      <div className="mb-3">
        
        {/* 🔥 NEW: Date labels above the bar */}
        <div className="flex justify-between text-sm text-muted-foreground mb-2 px-1">
          <span>{startDateStr}</span>
          <span>{endDateStr}</span>
        </div>
        
        <div className="relative h-4 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        
        {/* Progress percentage below bar */}
        <div className="text-center text-xs text-muted-foreground mt-1">
          {percent}% Complete
        </div>
        
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 mt-8">

        <div className="glass-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Days Passed</p>
          <p className="text-xl font-bold">{daysPassed}</p>
        </div>

        <div className="glass-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Days Left</p>
          <p className="text-xl font-bold">{stats.daysRemaining}</p>
        </div>

        <div className="glass-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Tasks Left</p>
          <p className="text-xl font-bold">{stats.remainingTasks}</p>
        </div>

        <div className="glass-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Status</p>
          <p className={`text-xl font-bold ${
            stats.paceStatus === 'ahead' ? 'text-green-500' : 
            stats.paceStatus === 'on-track' ? 'text-blue-500' : 
            'text-red-500'
          }`}>
            {stats.paceStatus === 'ahead' ? 'Ahead' : 
             stats.paceStatus === 'on-track' ? 'On Track' : 
             'Behind'}
          </p>
        </div>

      </div>

      {/* Phases With Progress */}
      <h2 className="text-lg font-semibold mb-4">
        Phase Progress
      </h2>

      <div className="space-y-5 max-w-2xl">

        {phases.map(phase => {

          const phaseProgress = calculatePhaseProgress(
            phase.id,
            dailyTasks
          );

          // 🔥 Get dynamic phase dates
          const { startDate, endDate } = getPhaseActualDates(
            phase.id,
            dailyTasks
          );

          // 🔥 Format the date range
          const dateRangeText = formatDateRange(startDate, endDate);

          return (
            <div 
              key={phase.id} 
              className="glass-card p-4 space-y-2"
            >

              {/* Phase Header */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: phase.color }}
                  />

                  <span className="font-medium">
                    {phase.shortName}
                  </span>
                </div>

                {/* 🔥 DYNAMIC date range */}
                <span className="text-sm text-muted-foreground">
                  {dateRangeText}
                </span>

              </div>

              {/* Progress Bar */}
              <ProgressBar
                progress={phaseProgress}
                label={`${phaseProgress}%`}
                showLabel
                color="bg-primary"
                height={8}
              />

            </div>
          );
        })}

      </div>

    </div>
  );
};