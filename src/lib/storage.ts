/* ===================== */
/* STORAGE KEYS */
/* ===================== */

const STORAGE_KEYS = {
  USER_PROGRESS: 'devpath_user_progress',
  TASK_COMPLETIONS: 'devpath_task_completions',
  TASK_NOTES: 'devpath_task_notes',
  PROJECT_PROGRESS: 'devpath_project_progress',
  USER_SETTINGS: 'devpath_user_settings',
  STREAKS: 'devpath_streaks'
};

/* ===================== */
/* TYPES */
/* ===================== */

export interface TaskCompletion {
  taskId: string;
  completed: boolean;
  completedAt: string | null; // YYYY-MM-DD
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
  activeDays: string[];
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

/* ===================== */
/* GENERIC STORAGE */
/* ===================== */

function getItem<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function setItem<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* ===================== */
/* TASK COMPLETIONS */
/* ===================== */

export function getTaskCompletions(): Record<string, TaskCompletion> {
  return getItem(STORAGE_KEYS.TASK_COMPLETIONS, {});
}

export function setTaskCompletion(
  taskId: string,
  completed: boolean,
  completedDate?: string
) {

  const completions = getTaskCompletions();

  if (!completed) {
    delete completions[taskId];
  } else {
    completions[taskId] = {
      taskId,
      completed: true,
      completedAt:
        completedDate || new Date().toISOString().split("T")[0]
    };
  }

  setItem(STORAGE_KEYS.TASK_COMPLETIONS, completions);

  rebuildStreakFromCompletions();
}

/* ===================== */
/* STREAK SYSTEM (FIXED) */
/* ===================== */

export function getStreakData(): StreakData {
  return getItem(STORAGE_KEYS.STREAKS, {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: '',
    activeDays: []
  });
}

function rebuildStreakFromCompletions() {

  const completions = getTaskCompletions();

  const dates = Object.values(completions)
    .filter(c => c.completed && c.completedAt)
    .map(c => c.completedAt!)
    .sort();

  if (dates.length === 0) {
    setItem(STORAGE_KEYS.STREAKS, {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: '',
      activeDays: []
    });
    return;
  }

  let longest = 1;
  let current = 1;

  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1]);
    const curr = new Date(dates[i]);

    const diff =
      (curr.getTime() - prev.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      current++;
      longest = Math.max(longest, current);
    } else if (diff > 1) {
      current = 1;
    }
  }

  setItem(STORAGE_KEYS.STREAKS, {
    currentStreak: current,
    longestStreak: longest,
    lastActiveDate: dates[dates.length - 1],
    activeDays: dates
  });
}

/* ===================== */
/* TASK NOTES */
/* ===================== */

export function getTaskNotes(): Record<string, TaskNote> {
  return getItem(STORAGE_KEYS.TASK_NOTES, {});
}

export function setTaskNote(taskId: string, note: string) {

  const notes = getTaskNotes();

  notes[taskId] = {
    taskId,
    note,
    updatedAt: new Date().toISOString()
  };

  setItem(STORAGE_KEYS.TASK_NOTES, notes);
}

/* ===================== */
/* PROJECT PROGRESS */
/* ===================== */

export function getProjectProgress(): Record<string, ProjectProgress> {
  return getItem(STORAGE_KEYS.PROJECT_PROGRESS, {});
}

function ensureProject(progress: Record<string, ProjectProgress>, id: string) {
  if (!progress[id]) {
    progress[id] = {
      projectId: id,
      subtaskCompletions: {},
      notes: '',
      startedAt: new Date().toISOString(),
      completedAt: null
    };
  }
}

export function updateProjectSubtask(
  projectId: string,
  subtaskId: string,
  completed: boolean
) {

  const progress = getProjectProgress();
  ensureProject(progress, projectId);

  progress[projectId].subtaskCompletions[subtaskId] = completed;

  setItem(STORAGE_KEYS.PROJECT_PROGRESS, progress);
}

export function setProjectNotes(projectId: string, notes: string) {

  const progress = getProjectProgress();
  ensureProject(progress, projectId);

  progress[projectId].notes = notes;

  setItem(STORAGE_KEYS.PROJECT_PROGRESS, progress);
}

/* ===================== */
/* USER PROGRESS */
/* ===================== */

export function getUserProgress(): UserProgress {
  return getItem(STORAGE_KEYS.USER_PROGRESS, {
    currentDayNumber: 1,
    startDate: '2026-01-24',
    lastAccessDate: new Date().toISOString().split('T')[0]
  });
}

export function updateLastAccess() {
  const progress = getUserProgress();
  progress.lastAccessDate = new Date().toISOString().split('T')[0];
  setItem(STORAGE_KEYS.USER_PROGRESS, progress);
}

// 🔥 NEW FUNCTION - Update the journey start date
export function setUserStartDate(newStartDate: string) {
  const progress = getUserProgress();
  progress.startDate = newStartDate;
  setItem(STORAGE_KEYS.USER_PROGRESS, progress);
}

/* ===================== */
/* 🔥 DYNAMIC DATE CALCULATION */
/* ===================== */

/**
 * Calculate the actual date for a task based on journey start date and day number
 * @param dayNumber - The day number of the task (1-559)
 * @returns Date string in YYYY-MM-DD format
 */
export function getTaskDate(dayNumber: number): string {
  const progress = getUserProgress();
  const startDate = new Date(progress.startDate);
  
  // Add (dayNumber - 1) days to start date
  const taskDate = new Date(startDate);
  taskDate.setDate(taskDate.getDate() + (dayNumber - 1));
  
  // Format as YYYY-MM-DD
  return taskDate.toISOString().split('T')[0];
}

/**
 * Get the week number for a given day
 * @param dayNumber - The day number (1-559)
 * @returns Week number (1-80)
 */
export function getWeekNumber(dayNumber: number): number {
  return Math.ceil(dayNumber / 7);
}

/**
 * 🔥 NEW: Calculate dynamic phase dates based on tasks
 * This finds the first and last task in a phase and calculates their dates
 */
export function getPhaseActualDates(
  phaseId: string,
  tasks: { id: string; phase: string; dayNumber: number }[]
): { startDate: string; endDate: string } {
  
  // Get all tasks in this phase
  const phaseTasks = tasks.filter(t => t.phase === phaseId);
  
  if (phaseTasks.length === 0) {
    // Fallback if no tasks found
    return { startDate: 'N/A', endDate: 'N/A' };
  }
  
  // Sort by day number
  phaseTasks.sort((a, b) => a.dayNumber - b.dayNumber);
  
  // Get first and last day numbers
  const firstDay = phaseTasks[0].dayNumber;
  const lastDay = phaseTasks[phaseTasks.length - 1].dayNumber;
  
  // Calculate actual dates
  const startDate = getTaskDate(firstDay);
  const endDate = getTaskDate(lastDay);
  
  return { startDate, endDate };
}

/**
 * Format a date for display (e.g., "Jan 24, 2026")
 */
export function formatDateForDisplay(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Format a date range for display (e.g., "Jan 24 - Feb 15, 2026")
 */
export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
  const startDay = start.getDate();
  const endMonth = end.toLocaleDateString('en-US', { month: 'short' });
  const endDay = end.getDate();
  const year = end.getFullYear();
  
  // If same month, show: "Jan 24 - 30, 2026"
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay} - ${endDay}, ${year}`;
  }
  
  // Different months: "Jan 24 - Feb 15, 2026"
  return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
}

/* ===================== */
/* PROGRESS CALCULATIONS */
/* ===================== */

export function calculatePhaseProgress(
  phaseId: string,
  tasks: { id: string; phase: string }[]
) {

  const completions = getTaskCompletions();
  const phaseTasks = tasks.filter(t => t.phase === phaseId);

  if (!phaseTasks.length) return 0;

  const done = phaseTasks.filter(
    t => completions[t.id]?.completed
  ).length;

  return Math.round((done / phaseTasks.length) * 100);
}

export function calculateOverallProgress(tasks: { id: string }[]) {

  const completions = getTaskCompletions();
  if (!tasks.length) return 0;

  const done = tasks.filter(
    t => completions[t.id]?.completed
  ).length;

  return Math.round((done / tasks.length) * 100);
}

/* ===================== */
/* TASK HELPERS */
/* ===================== */

export function getCurrentTask<T extends { id: string }>(tasks: T[]) {

  const completions = getTaskCompletions();

  return tasks.find(
    t => !completions[t.id]?.completed
  ) || null;
}

export function getRemainingWeekTasks<
  T extends { id: string; week: number }
>(
  tasks: T[],
  currentTask: T | null
) {

  if (!currentTask) return [];

  const completions = getTaskCompletions();

  return tasks.filter(t =>
    t.week === currentTask.week &&
    t.id !== currentTask.id &&
    !completions[t.id]?.completed
  );
}

/* ===================== */
/* BACKUP / RESTORE */
/* ===================== */

export function exportAllData(): string {

  return JSON.stringify({
    completions: getTaskCompletions(),
    notes: getTaskNotes(),
    projects: getProjectProgress(),
    streaks: getStreakData(),
    progress: getUserProgress(),
    exportedAt: new Date().toISOString()
  }, null, 2);
}

export function importData(json: string): boolean {

  try {
    const data = JSON.parse(json);

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

/* ===================== */
/* JOURNEY STATS */
/* ===================== */

export function getJourneyStats(tasks: { id: string }[]) {

  const progress = getUserProgress();
  const completions = getTaskCompletions();

  const startDate = new Date(progress.startDate);

  // ✅ Always derive from tasks length
  const TOTAL_DAYS = tasks.length;

  const today = new Date();

  const actualDaysPassed = Math.floor(
    (today.getTime() - startDate.getTime()) /
    (1000 * 60 * 60 * 24)
  );

  const daysPassed = Math.max(1, actualDaysPassed);

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + TOTAL_DAYS);

  const daysRemaining = Math.max(
    0,
    Math.ceil(
      (endDate.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
    )
  );

  const completedTasks = tasks.filter(
    t => completions[t.id]?.completed
  ).length;

  const remainingTasks = tasks.length - completedTasks;

  const currentPace = completedTasks / daysPassed;
  const requiredPace = remainingTasks / Math.max(daysRemaining, 1);

  // ✅ Add tolerance to avoid stupid decimal punishment
  const tolerance = 0.05;

  let paceStatus: 'ahead' | 'on-track' | 'behind';

  if (actualDaysPassed <= 1 && completedTasks === 0) {
    paceStatus = 'on-track';
  } else if (currentPace > requiredPace + tolerance) {
    paceStatus = 'ahead';
  } else if (currentPace < requiredPace - tolerance) {
    paceStatus = 'behind';
  } else {
    paceStatus = 'on-track';
  }

  return {
    daysRemaining,
    remainingTasks,
    currentPace: currentPace.toFixed(2),
    requiredPace: requiredPace.toFixed(2),
    paceStatus
  };
}

export function getTodayAndNextTask<T extends { id: string }>(tasks: T[]) {
  const completions = getTaskCompletions();

  const pendingTasks = tasks.filter(
    task => !completions[task.id]?.completed
  );

  return {
    today: pendingTasks[0] || null,
    next: pendingTasks[1] || null
  };
}