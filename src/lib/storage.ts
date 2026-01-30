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
  const TOTAL_DAYS = 522;

  const today = new Date();

  const daysPassed = Math.max(
    1,
    Math.floor(
      (today.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24)
    )
  );

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

  return {
    daysRemaining,
    remainingTasks,
    currentPace: currentPace.toFixed(2),
    requiredPace: requiredPace.toFixed(2),
    paceStatus: currentPace >= requiredPace ? 'ahead' : 'behind'
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

