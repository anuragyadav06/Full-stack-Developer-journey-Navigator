// Curriculum Index - Exports all phase curricula
// Total duration: Jan 24, 2026 - Jun 30, 2027 (523 days)

export { phase1JavaCore, type CurriculumTask } from './phase1-java-core';
export { phase2DSA } from './phase2-dsa';
export { phase3Database } from './phase3-database';
export { phase4Frontend } from './phase4-frontend';
export { phase5Backend } from './phase5-backend';
export { phase6Fullstack } from './phase6-fullstack';
export { phase7Capstone } from './phase7-capstone';

// Import for combined export
import { phase1JavaCore } from './phase1-java-core';
import { phase2DSA } from './phase2-dsa';
import { phase3Database } from './phase3-database';
import { phase4Frontend } from './phase4-frontend';
import { phase5Backend } from './phase5-backend';
import { phase6Fullstack } from './phase6-fullstack';
import { phase7Capstone } from './phase7-capstone';

// Combined curriculum in order
export const fullCurriculum = [
  ...phase1JavaCore,    // Weeks 1-8 (56 days)
  ...phase2DSA,         // Weeks 9-20 (84 days)
  ...phase3Database,    // Weeks 21-26 (42 days)
  ...phase4Frontend,    // Weeks 27-38 (84 days)
  ...phase5Backend,     // Weeks 39-54 (112 days)
  ...phase6Fullstack,   // Weeks 55-66 (84 days)
  ...phase7Capstone,    // Weeks 67-75 (63 days)
];

// Summary statistics
export const curriculumStats = {
  totalDays: fullCurriculum.length,
  totalWeeks: Math.ceil(fullCurriculum.length / 7),
  phases: 7,
  startDate: '2026-01-24',
  endDate: '2027-06-30',
  phaseBreakdown: {
    'java-core': phase1JavaCore.length,
    'dsa': phase2DSA.length,
    'database': phase3Database.length,
    'frontend': phase4Frontend.length,
    'backend': phase5Backend.length,
    'fullstack': phase6Fullstack.length,
    'capstone': phase7Capstone.length
  }
};
