import React from 'react';
import { dailyTasks, phases } from '@/data/roadmapData';
import { 
  getJourneyStats, 
  getUserProgress, 
  calculatePhaseProgress 
} from '@/lib/storage';

import { ProgressBar } from '@/components/ProgressRing';

export const JourneyTimelineView: React.FC = () => {

  const progress = getUserProgress();
  const stats = getJourneyStats(dailyTasks);

  const startDate = new Date(progress.startDate);
  const TOTAL_DAYS = 522;

  const today = new Date();

  const daysPassed = TOTAL_DAYS - stats.daysRemaining;
  const percent = Math.min(100, Math.round((daysPassed / TOTAL_DAYS) * 100));

  return (
    <div className="flex-1 p-8 overflow-y-auto">

      <h1 className="text-2xl font-bold mb-6">
        Journey Timeline
      </h1>

      {/* Timeline Bar */}
      <div className="relative h-4 bg-muted rounded-full overflow-hidden mb-12">

        <div
          className="absolute left-0 top-0 h-full bg-primary transition-all"
          style={{ width: `${percent}%` }}
        />

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

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
            stats.paceStatus === 'ahead' ? 'text-green-500' : 'text-red-500'
          }`}>
            {stats.paceStatus === 'ahead' ? 'Ahead' : 'Behind'}
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

                <span className="text-sm text-muted-foreground">
                  {phase.startDate} → {phase.endDate}
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
