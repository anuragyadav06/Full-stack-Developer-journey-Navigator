import React, { useState, useEffect } from 'react';
import { Flame, Calendar, TrendingUp, ChevronRight, Zap } from 'lucide-react';
import { ProgressRing } from './ProgressRing';
import { TaskCard } from './TaskCard';
import { dailyTasks, phases } from '@/data/roadmapData';

import {
  getStreakData,
  calculateOverallProgress,
  calculatePhaseProgress,
  getCurrentTask,
  getRemainingWeekTasks,
  updateLastAccess,
  getJourneyStats
} from '@/lib/storage';

import type { DailyTask } from '@/data/roadmapData';

interface DashboardProps {
  onNavigateToRoadmap: () => void;
  onNavigateToStreaks: () => void;
  onNavigateToTimeline: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onNavigateToRoadmap,
  onNavigateToStreaks,
  onNavigateToTimeline
}) => {

  const [streak, setStreak] = useState({ currentStreak: 0, longestStreak: 0 });
  const [overallProgress, setOverallProgress] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState<Record<string, number>>({});
  const [todayTask, setTodayTask] = useState<DailyTask | null>(null);
  const [weekTasks, setWeekTasks] = useState<DailyTask[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshData = () => {
    setStreak(getStreakData());
    setOverallProgress(calculateOverallProgress(dailyTasks));

    const phaseData: Record<string, number> = {};
    phases.forEach(phase => {
      phaseData[phase.id] = calculatePhaseProgress(phase.id, dailyTasks);
    });
    setPhaseProgress(phaseData);

    const current = getCurrentTask(dailyTasks);
    setTodayTask(current);

    setWeekTasks(getRemainingWeekTasks(dailyTasks, current));
  };

  useEffect(() => {
    updateLastAccess();
    refreshData();
  }, [refreshKey]);

  const handleCompletionChange = () => {
    setRefreshKey(v => v + 1);
  };

  const today = new Date().toISOString().split('T')[0];

  const currentPhase =
    phases.find(
      phase => today >= phase.startDate && today <= phase.endDate
    ) || phases[0];

  const paceStats = getJourneyStats(dailyTasks);

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome Back, Developer</h1>
          <p className="text-muted-foreground">
            Your path to Java Full Stack mastery continues.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          {/* STREAK */}
          <div
            className="glass-card p-5 cursor-pointer hover:opacity-80"
            onClick={onNavigateToStreaks}
          >
            <div className="flex justify-between mb-3">
              <span className="text-sm text-muted-foreground">Current Streak</span>
              <Flame className="text-warning" />
            </div>

            <div className="text-3xl font-bold">
              {streak.currentStreak}
              <span className="text-lg ml-1 text-muted-foreground">days</span>
            </div>

            <p className="text-xs text-muted-foreground">
              Best: {streak.longestStreak} days
            </p>
          </div>

          {/* JOURNEY PROGRESS */}
          <div className="glass-card p-6 flex flex-col items-center justify-center">
            <h3 className="text-sm text-muted-foreground mb-3">
              Journey Progress
            </h3>

            <ProgressRing
              progress={overallProgress}
              size={110}
              strokeWidth={10}
            />

            <p className="text-xs text-muted-foreground mt-2">
              Keep going!
            </p>
          </div>

          {/* JOURNEY PACE */}
          <div
            className="glass-card p-5 cursor-pointer hover:opacity-80"
            onClick={onNavigateToTimeline}
          >
            <div className="flex justify-between mb-3">
              <span className="text-sm text-muted-foreground">Journey Pace</span>
              <Calendar className="text-accent" />
            </div>

            <div className="text-xl font-bold mb-1">
              {paceStats.daysRemaining} days left
            </div>

            <p className="text-sm text-muted-foreground">
              {paceStats.remainingTasks} tasks remaining
            </p>

            <p
              className={`text-xs mt-2 ${
                paceStats.paceStatus === 'ahead'
                  ? 'text-green-500'
                  : paceStats.paceStatus === 'on-track'
                  ? 'text-blue-500'
                  : 'text-red-500'
              }`}
            >
              {paceStats.paceStatus === 'ahead'
                ? 'Ahead of schedule 🔥'
                : paceStats.paceStatus === 'on-track'
                ? 'On track ✅'
                : 'Behind schedule ⚠️'}
            </p>

            <p className="text-xs text-muted-foreground mt-1">
              Current: {paceStats.currentPace}/day | Required: {paceStats.requiredPace}/day
            </p>
          </div>

          {/* CURRENT PHASE */}
          <div className="glass-card p-5">
            <div className="flex justify-between mb-3">
              <span className="text-sm text-muted-foreground">Current Phase</span>
              <Zap style={{ color: currentPhase.color }} />
            </div>

            <div className="text-lg font-bold truncate">
              {currentPhase.shortName}
            </div>

            <p className="text-xs text-muted-foreground">
              {phaseProgress[currentPhase.id] || 0}% complete
            </p>
          </div>

        </div>

        {/* MAIN AREA */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* TODAY PANEL */}
          <div>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold flex gap-2">
                <TrendingUp className="text-primary" />
                Today's Focus
              </h2>

              <button
                onClick={onNavigateToRoadmap}
                className="text-sm text-primary flex items-center gap-1"
              >
                View Roadmap <ChevronRight size={16} />
              </button>
            </div>

            {todayTask ? (
              <TaskCard
                task={todayTask}
                isToday
                onCompletionChange={handleCompletionChange}
              />
            ) : (
              <div className="glass-card p-6 text-center">
                No task today
              </div>
            )}
          </div>

          {/* WEEK PANEL */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              Remaining This Week
            </h2>

            <div className="space-y-4 overflow-y-auto max-h-[420px] pr-2">
              {weekTasks.length ? (
                weekTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onCompletionChange={handleCompletionChange}
                  />
                ))
              ) : (
                <div className="glass-card p-6 text-center text-muted-foreground">
                  No remaining tasks 🎉
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};