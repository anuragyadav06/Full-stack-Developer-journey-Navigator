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
  ...phase1JavaCore,   
  ...phase2DSA,        
  ...phase3Database,   
  ...phase4Frontend,   
  ...phase5Backend,    
  ...phase6Fullstack,  
  ...phase7Capstone,   
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
