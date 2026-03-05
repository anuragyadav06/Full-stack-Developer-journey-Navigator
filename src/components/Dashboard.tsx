import React, { useState, useEffect } from 'react';
import { Flame, Calendar, TrendingUp, ChevronRight, Zap, Sparkles, Brain } from 'lucide-react';
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

  // --- COMPLEMENT LOGIC ENGINE ---
  const getVibeCheck = () => {
    const aheadLines = [
      "Anurag… relax. You're coding like the deadline personally insulted your family. Respect. ⚡",
      "You're outrunning the roadmap so hard it might file a bug report against you.",
      "Senior engineer behaviour detected. Keep going and recruiters will start smelling the commits.",
      "You're moving faster than most bootcamp grads move excuses.",
      "At this pace the roadmap will need a new roadmap.",
      "Legend pace. Somewhere a Java instructor just felt proud and doesn't know why."

    ];
    const trackLines = [
      "Clean rhythm. No drama. Just work. This is how engineers are built.",
      "You’re doing what 90% of people *say* they’ll do but never actually do.",
      "Good pace. Not flashy, not lazy. Just dangerous consistency.",
      "Stack enough days like this and you'll accidentally become elite.",
      "You're coding like someone who actually intends to get hired."
    ];
    const laggingLines = [
      "Anurag… the roadmap is waiting. Your excuses are not part of the syllabus.",
      "You wanted to be a full stack developer, remember? Because right now the stack is just dust.",
      "The keyboard isn't going to solve problems telepathically. Start typing.",
      "Right now the roadmap is progressing slower than a government website.",
      "This pace won't get you hired. It barely gets you warmed up.",
      "Your future self is watching this procrastination like a horror movie."
    ];

    // Pick a random line from the appropriate category
    const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    if (paceStats.paceStatus === 'ahead') {
      return {
        text: pick(aheadLines),
        style: "border-green-500/50 bg-green-500/10 text-green-400",
        icon: <Sparkles className="text-green-400" size={18} />
      };
    } else if (paceStats.paceStatus === 'on-track') {
      return {
        text: pick(trackLines),
        style: "border-blue-500/50 bg-blue-500/10 text-blue-400",
        icon: <Zap className="text-blue-400" size={18} />
      };
    } else {
      return {
        text: pick(laggingLines),
        style: "border-red-500/50 bg-red-500/10 text-red-400",
        icon: <Brain className="text-red-400" size={18} />
      };
    }
  };

  const vibe = getVibeCheck();

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">

        {/* Header with Complement Box */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome Back, Developer</h1>
            <p className="text-muted-foreground">
              Your path to Java Full Stack mastery continues.
            </p>
          </div>

          {/* THE NEW COMPLEMENT BOX */}
          <div className={`max-w-md border rounded-xl p-4 flex gap-3 items-start transition-all duration-500 hover:scale-[1.02] ${vibe.style}`}>
            <div className="mt-1">{vibe.icon}</div>
            <p className="text-sm font-medium italic leading-relaxed">
              "{vibe.text}"
            </p>
          </div>
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
              className={`text-xs mt-2 ${paceStats.paceStatus === 'ahead'
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