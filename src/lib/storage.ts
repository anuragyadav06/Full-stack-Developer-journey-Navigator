// Local storage abstraction for persistence
// Can be easily swapped for IndexedDB or file-based storage for Electron/Tauri

const STORAGE_KEYS = {
  USER_PROGRESS: 'devpath_user_progress',
  TASK_COMPLETIONS: 'devpath_task_completions',
  TASK_NOTES: 'devpath_task_notes',
  PROJECT_PROGRESS: 'devpath_project_progress',
  USER_SETTINGS: 'devpath_user_settings',
  STREAKS: 'devpath_streaks'
};

export interface TaskCompletion {
  taskId: string;
  completed: boolean;
  completedAt: string | null;
}

export interface TaskNote {
  taskId: string;
  note: string;
  updatedAt: string;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  activeDays: string[]; // Array of dates
}

export interface UserProgress {
  currentDayNumber: number;
  startDate: string;
  lastAccessDate: string;
}

export interface ProjectProgress {
  projectId: string;
  subtaskCompletions: Record<string, boolean>;
  notes: string;
  startedAt: string | null;
  completedAt: string | null;
}

// Generic storage functions
function getItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Storage error:', error);
  }
}

// Task completions
export function getTaskCompletions(): Record<string, TaskCompletion> {
  return getItem(STORAGE_KEYS.TASK_COMPLETIONS, {});
}

export function setTaskCompletion(taskId: string, completed: boolean): void {
  const completions = getTaskCompletions();
  completions[taskId] = {
    taskId,
    completed,
    completedAt: completed ? new Date().toISOString() : null
  };
  setItem(STORAGE_KEYS.TASK_COMPLETIONS, completions);
  
  // Update streak when completing a task
  if (completed) {
    updateStreak();
  }
}

// Task notes
export function getTaskNotes(): Record<string, TaskNote> {
  return getItem(STORAGE_KEYS.TASK_NOTES, {});
}

export function setTaskNote(taskId: string, note: string): void {
  const notes = getTaskNotes();
  notes[taskId] = {
    taskId,
    note,
    updatedAt: new Date().toISOString()
  };
  setItem(STORAGE_KEYS.TASK_NOTES, notes);
}

// Streak tracking
export function getStreakData(): StreakData {
  return getItem(STORAGE_KEYS.STREAKS, {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: '',
    activeDays: []
  });
}

function updateStreak(): void {
  const streakData = getStreakData();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  
  if (streakData.lastActiveDate === today) {
    // Already active today
    return;
  }
  
  if (!streakData.activeDays.includes(today)) {
    streakData.activeDays.push(today);
  }
  
  if (streakData.lastActiveDate === yesterday) {
    // Continuing streak
    streakData.currentStreak += 1;
  } else if (streakData.lastActiveDate !== today) {
    // Streak broken, start new
    streakData.currentStreak = 1;
  }
  
  if (streakData.currentStreak > streakData.longestStreak) {
    streakData.longestStreak = streakData.currentStreak;
  }
  
  streakData.lastActiveDate = today;
  setItem(STORAGE_KEYS.STREAKS, streakData);
}

// Project progress
export function getProjectProgress(): Record<string, ProjectProgress> {
  return getItem(STORAGE_KEYS.PROJECT_PROGRESS, {});
}

export function updateProjectSubtask(
  projectId: string, 
  subtaskId: string, 
  completed: boolean
): void {
  const progress = getProjectProgress();
  
  if (!progress[projectId]) {
    progress[projectId] = {
      projectId,
      subtaskCompletions: {},
      notes: '',
      startedAt: new Date().toISOString(),
      completedAt: null
    };
  }
  
  progress[projectId].subtaskCompletions[subtaskId] = completed;
  setItem(STORAGE_KEYS.PROJECT_PROGRESS, progress);
}

export function setProjectNotes(projectId: string, notes: string): void {
  const progress = getProjectProgress();
  
  if (!progress[projectId]) {
    progress[projectId] = {
      projectId,
      subtaskCompletions: {},
      notes: '',
      startedAt: new Date().toISOString(),
      completedAt: null
    };
  }
  
  progress[projectId].notes = notes;
  setItem(STORAGE_KEYS.PROJECT_PROGRESS, progress);
}

// User progress
export function getUserProgress(): UserProgress {
  return getItem(STORAGE_KEYS.USER_PROGRESS, {
    currentDayNumber: 1,
    startDate: '2026-01-24',
    lastAccessDate: new Date().toISOString().split('T')[0]
  });
}

export function updateLastAccess(): void {
  const progress = getUserProgress();
  progress.lastAccessDate = new Date().toISOString().split('T')[0];
  setItem(STORAGE_KEYS.USER_PROGRESS, progress);
}

// Calculate completion percentages
export function calculatePhaseProgress(phaseId: string, tasks: { id: string; phase: string }[]): number {
  const completions = getTaskCompletions();
  const phaseTasks = tasks.filter(t => t.phase === phaseId);
  
  if (phaseTasks.length === 0) return 0;
  
  const completed = phaseTasks.filter(t => completions[t.id]?.completed).length;
  return Math.round((completed / phaseTasks.length) * 100);
}

export function calculateOverallProgress(tasks: { id: string }[]): number {
  const completions = getTaskCompletions();
  if (tasks.length === 0) return 0;
  
  const completed = tasks.filter(t => completions[t.id]?.completed).length;
  return Math.round((completed / tasks.length) * 100);
}

// Get today's task and next pending
export function getTodayAndNextTask<T extends { id: string }>(tasks: T[]): {
  today: T | null;
  next: T | null;
} {
  const completions = getTaskCompletions();

  // All incomplete tasks in order
  const pendingTasks = tasks.filter(
    task => !completions[task.id]?.completed
  );

  const today = pendingTasks.length > 0 ? pendingTasks[0] : null;
  const next = pendingTasks.length > 1 ? pendingTasks[1] : null;

  return { today, next };
}


// Export all data (for backup)
export function exportAllData(): string {
  const data = {
    completions: getTaskCompletions(),
    notes: getTaskNotes(),
    projects: getProjectProgress(),
    streaks: getStreakData(),
    progress: getUserProgress(),
    exportedAt: new Date().toISOString()
  };
  
  return JSON.stringify(data, null, 2);
}

// Import data (for restore)
export function importData(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    
    if (data.completions) setItem(STORAGE_KEYS.TASK_COMPLETIONS, data.completions);
    if (data.notes) setItem(STORAGE_KEYS.TASK_NOTES, data.notes);
    if (data.projects) setItem(STORAGE_KEYS.PROJECT_PROGRESS, data.projects);
    if (data.streaks) setItem(STORAGE_KEYS.STREAKS, data.streaks);
    if (data.progress) setItem(STORAGE_KEYS.USER_PROGRESS, data.progress);
    
    return true;
  } catch {
    return false;
  }
}
// Get first incomplete task (Today's Focus)
export function getCurrentTask<T extends { id: string }>(tasks: T[]): T | null {
  const completions = getTaskCompletions();

  return (
    tasks.find(task => !completions[task.id]?.completed) || null
  );
}


// Get remaining tasks of the same week
export function getRemainingWeekTasks<T extends { id: string; week: number }>(
  tasks: T[],
  currentTask: T | null
): T[] {
  if (!currentTask) return [];

  const completions = getTaskCompletions();

  return tasks.filter(task => 
    task.week === currentTask.week &&
    task.id !== currentTask.id &&
    !completions[task.id]?.completed
  );
}


// Get completed tasks grouped by Phase + Week
export function getCompletedGroupedByWeek<T extends { id: string; week: number; phase: string }>(
  tasks: T[]
) {
  const completions = getTaskCompletions();

  const completed = tasks.filter(
    task => completions[task.id]?.completed
  );

  const grouped: Record<string, T[]> = {};

  completed.forEach(task => {
    const key = `${task.phase}-week-${task.week}`;

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(task);
  });

  return grouped;
}
export function getJourneyStats(tasks: { id: string }[]) {
  const progress = getUserProgress();
  const completions = getTaskCompletions();

  const startDate = new Date(progress.startDate);
  const TOTAL_DAYS = 522;

  const today = new Date();
  const daysPassed = Math.max(
    1,
    Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  );

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + TOTAL_DAYS);

  const daysRemaining = Math.max(
    0,
    Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    t => completions[t.id]?.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  const currentPace = completedTasks / daysPassed;
  const requiredPace = remainingTasks / Math.max(daysRemaining, 1);

  const paceStatus =
    currentPace >= requiredPace ? 'ahead' : 'behind';

  return {
    daysRemaining,
    remainingTasks,
    currentPace: currentPace.toFixed(2),
    requiredPace: requiredPace.toFixed(2),
    paceStatus
  };
}

