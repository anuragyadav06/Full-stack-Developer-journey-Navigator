import { fullCurriculum, curriculumStats, CurriculumTask } from './curriculum';

export type TaskType = 'learn' | 'practice' | 'build' | 'revise';

export interface DailyTask {
  id: string;
  date: string; // YYYY-MM-DD
  dayNumber: number;
  topic: string;
  description: string;
  taskType: TaskType;
  estimatedMinutes: number;
  outcome: string;
  phase: string;
  week: number;
  resources?: string[];
}

export interface Phase {
  id: string;
  name: string;
  shortName: string;
  description: string;
  startDate: string;
  endDate: string;
  color: string;
  skills: string[];
  weekStart: number;
  weekEnd: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  phase: string;
  startDay: number;
  endDay: number;
  subtasks: { id: string; title: string; completed: boolean }[];
  skills: string[];
}

// All 7 phases covering Jan 24, 2026 - Jun 30, 2027
export const phases: Phase[] = [
  {
    id: 'java-core',
    name: 'Java Core Mastery',
    shortName: 'Java Core',
    description: 'Master Java basics, OOP, collections, and modern features. Revisit arrays, strings, and recursion at intermediate level.',
    startDate: '2026-01-24',
    endDate: '2026-03-20',
    color: 'hsl(199 89% 48%)',
    skills: ['Java Syntax', 'OOP', 'Collections', 'Exception Handling', 'Streams', 'File I/O'],
    weekStart: 1,
    weekEnd: 8
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    shortName: 'DSA',
    description: 'Build strong problem-solving skills. Revisit sorting at intermediate level, master trees, graphs, and DP.',
    startDate: '2026-03-21',
    endDate: '2026-06-12',
    color: 'hsl(262 83% 58%)',
    skills: ['Arrays', 'Sorting', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming'],
    weekStart: 9,
    weekEnd: 20
  },
  {
    id: 'database',
    name: 'Database Mastery',
    shortName: 'Database',
    description: 'Master SQL, database design, and Java database connectivity.',
    startDate: '2026-06-13',
    endDate: '2026-07-24',
    color: 'hsl(38 92% 50%)',
    skills: ['SQL', 'MySQL', 'Database Design', 'Normalization', 'JDBC', 'Transactions'],
    weekStart: 21,
    weekEnd: 26
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    shortName: 'Frontend',
    description: 'Master HTML, CSS, JavaScript, and React for building modern user interfaces.',
    startDate: '2026-07-25',
    endDate: '2026-10-16',
    color: 'hsl(142 76% 36%)',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Tailwind CSS', 'React Router'],
    weekStart: 27,
    weekEnd: 38
  },
  {
    id: 'backend',
    name: 'Backend Development',
    shortName: 'Backend',
    description: 'Master Spring Boot, REST APIs, JPA/Hibernate, and security.',
    startDate: '2026-10-17',
    endDate: '2027-01-29',
    color: 'hsl(0 84% 60%)',
    skills: ['Spring Boot', 'REST APIs', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'JWT'],
    weekStart: 39,
    weekEnd: 54
  },
  {
    id: 'fullstack',
    name: 'Full Stack Integration',
    shortName: 'Full Stack',
    description: 'Connect frontend and backend, learn Docker, MongoDB, Git, Linux, and microservices basics.',
    startDate: '2027-01-30',
    endDate: '2027-04-24',
    color: 'hsl(316 72% 52%)',
    skills: ['Full Stack', 'Docker', 'Git', 'Linux', 'MongoDB', 'Microservices'],
    weekStart: 55,
    weekEnd: 66
  },
  {
    id: 'capstone',
    name: 'Capstone & Interview Prep',
    shortName: 'Capstone',
    description: 'Build a production-ready e-commerce platform and prepare for interviews.',
    startDate: '2027-04-25',
    endDate: '2027-06-30',
    color: 'hsl(47 96% 53%)',
    skills: ['All Skills', 'System Design', 'Microservices', 'Interview Prep', 'Portfolio'],
    weekStart: 67,
    weekEnd: 75
  }
];

// Comprehensive project milestones throughout the journey
export const projects: Project[] = [
  // Phase 1: Java Core
  {
    id: 'java-grade-calculator',
    name: 'Student Grade Calculator',
    description: 'Build a console app to calculate and manage student grades using arrays and loops',
    phase: 'java-core',
    startDay: 14,
    endDay: 14,
    subtasks: [
      { id: 'gc-1', title: 'Design data structures for students and grades', completed: false },
      { id: 'gc-2', title: 'Implement grade calculation logic', completed: false },
      { id: 'gc-3', title: 'Add grade statistics (avg, min, max)', completed: false },
      { id: 'gc-4', title: 'Create interactive console menu', completed: false }
    ],
    skills: ['Java', 'Arrays', 'Loops', 'Methods']
  },
  {
    id: 'java-library-system',
    name: 'Library Management System',
    description: 'Design and implement a library system demonstrating OOP principles',
    phase: 'java-core',
    startDay: 34,
    endDay: 35,
    subtasks: [
      { id: 'lib-1', title: 'Design Book, Member, Library classes', completed: false },
      { id: 'lib-2', title: 'Implement inheritance hierarchy', completed: false },
      { id: 'lib-3', title: 'Add borrowing and returning logic', completed: false },
      { id: 'lib-4', title: 'Implement search functionality', completed: false },
      { id: 'lib-5', title: 'Add fine calculation system', completed: false }
    ],
    skills: ['Java', 'OOP', 'Inheritance', 'Polymorphism']
  },
  {
    id: 'java-banking-app',
    name: 'Console Banking Application',
    description: 'Full-featured banking app with OOP, file I/O, and collections',
    phase: 'java-core',
    startDay: 43,
    endDay: 49,
    subtasks: [
      { id: 'bank-1', title: 'Design Account class hierarchy', completed: false },
      { id: 'bank-2', title: 'Implement deposit/withdraw/transfer', completed: false },
      { id: 'bank-3', title: 'Add transaction history with collections', completed: false },
      { id: 'bank-4', title: 'Create interactive menu system', completed: false },
      { id: 'bank-5', title: 'Add file persistence for accounts', completed: false },
      { id: 'bank-6', title: 'Implement exception handling', completed: false },
      { id: 'bank-7', title: 'Add data export with Streams API', completed: false }
    ],
    skills: ['Java', 'OOP', 'Collections', 'File I/O', 'Streams']
  },

  // Phase 2: DSA
  {
    id: 'dsa-problem-set-1',
    name: 'DSA Problem Set: Arrays & Strings',
    description: 'Solve 30 array and string problems with complexity analysis',
    phase: 'dsa',
    startDay: 57,
    endDay: 70,
    subtasks: [
      { id: 'dsa1-1', title: 'Complete 10 two-pointer problems', completed: false },
      { id: 'dsa1-2', title: 'Complete 10 sliding window problems', completed: false },
      { id: 'dsa1-3', title: 'Complete 10 string manipulation problems', completed: false },
      { id: 'dsa1-4', title: 'Document time/space complexity for each', completed: false }
    ],
    skills: ['Arrays', 'Strings', 'Two Pointers', 'Sliding Window']
  },
  {
    id: 'dsa-problem-set-2',
    name: 'DSA Problem Set: Trees & Graphs',
    description: 'Solve 30 tree and graph problems',
    phase: 'dsa',
    startDay: 98,
    endDay: 126,
    subtasks: [
      { id: 'dsa2-1', title: 'Complete 10 binary tree problems', completed: false },
      { id: 'dsa2-2', title: 'Complete 5 BST problems', completed: false },
      { id: 'dsa2-3', title: 'Complete 10 graph traversal problems', completed: false },
      { id: 'dsa2-4', title: 'Complete 5 advanced graph problems', completed: false }
    ],
    skills: ['Trees', 'BST', 'Graphs', 'DFS', 'BFS']
  },

  // Phase 3: Database
  {
    id: 'db-library-project',
    name: 'Library Database Project',
    description: 'Design and implement a complete library database with JDBC',
    phase: 'database',
    startDay: 183,
    endDay: 189,
    subtasks: [
      { id: 'dblib-1', title: 'Design ER diagram', completed: false },
      { id: 'dblib-2', title: 'Create normalized schema', completed: false },
      { id: 'dblib-3', title: 'Write DDL scripts', completed: false },
      { id: 'dblib-4', title: 'Implement JDBC connection', completed: false },
      { id: 'dblib-5', title: 'Build CRUD operations', completed: false },
      { id: 'dblib-6', title: 'Add reporting queries', completed: false }
    ],
    skills: ['SQL', 'MySQL', 'Database Design', 'JDBC']
  },

  // Phase 4: Frontend
  {
    id: 'responsive-portfolio',
    name: 'Responsive Portfolio Site',
    description: 'Build a fully responsive personal portfolio with HTML, CSS',
    phase: 'frontend',
    startDay: 216,
    endDay: 216,
    subtasks: [
      { id: 'port-1', title: 'Design mobile-first layout', completed: false },
      { id: 'port-2', title: 'Create header and navigation', completed: false },
      { id: 'port-3', title: 'Build projects section', completed: false },
      { id: 'port-4', title: 'Add contact form', completed: false },
      { id: 'port-5', title: 'Implement dark mode', completed: false }
    ],
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design']
  },
  {
    id: 'js-weather-app',
    name: 'Weather Application',
    description: 'Build a weather app using JavaScript and Fetch API',
    phase: 'frontend',
    startDay: 233,
    endDay: 235,
    subtasks: [
      { id: 'weather-1', title: 'Set up project structure', completed: false },
      { id: 'weather-2', title: 'Implement API integration', completed: false },
      { id: 'weather-3', title: 'Build search functionality', completed: false },
      { id: 'weather-4', title: 'Display current weather', completed: false },
      { id: 'weather-5', title: 'Add 5-day forecast', completed: false },
      { id: 'weather-6', title: 'Handle errors gracefully', completed: false }
    ],
    skills: ['JavaScript', 'Fetch API', 'Async/Await', 'DOM']
  },
  {
    id: 'react-task-app',
    name: 'React Task Management App',
    description: 'Build a full-featured task management app with React',
    phase: 'frontend',
    startDay: 260,
    endDay: 266,
    subtasks: [
      { id: 'rtask-1', title: 'Set up React project with Vite', completed: false },
      { id: 'rtask-2', title: 'Create component structure', completed: false },
      { id: 'rtask-3', title: 'Implement state management', completed: false },
      { id: 'rtask-4', title: 'Add CRUD operations', completed: false },
      { id: 'rtask-5', title: 'Implement routing', completed: false },
      { id: 'rtask-6', title: 'Add filtering and search', completed: false },
      { id: 'rtask-7', title: 'Style with Tailwind CSS', completed: false }
    ],
    skills: ['React', 'Hooks', 'React Router', 'Tailwind CSS']
  },

  // Phase 5: Backend
  {
    id: 'rest-api-blog',
    name: 'Blog REST API',
    description: 'Build a complete blog API with Spring Boot and JPA relationships',
    phase: 'backend',
    startDay: 302,
    endDay: 315,
    subtasks: [
      { id: 'blog-1', title: 'Design entity relationships', completed: false },
      { id: 'blog-2', title: 'Implement Post, Comment, User entities', completed: false },
      { id: 'blog-3', title: 'Create CRUD endpoints', completed: false },
      { id: 'blog-4', title: 'Add pagination and sorting', completed: false },
      { id: 'blog-5', title: 'Implement search functionality', completed: false },
      { id: 'blog-6', title: 'Add validation and error handling', completed: false }
    ],
    skills: ['Spring Boot', 'JPA', 'REST', 'MySQL']
  },
  {
    id: 'rest-api-task-manager',
    name: 'Task Management REST API',
    description: 'Complete REST API with authentication, testing, and documentation',
    phase: 'backend',
    startDay: 344,
    endDay: 378,
    subtasks: [
      { id: 'taskapi-1', title: 'Design complete API specification', completed: false },
      { id: 'taskapi-2', title: 'Implement entity layer', completed: false },
      { id: 'taskapi-3', title: 'Build service layer with DTOs', completed: false },
      { id: 'taskapi-4', title: 'Create REST controllers', completed: false },
      { id: 'taskapi-5', title: 'Add JWT authentication', completed: false },
      { id: 'taskapi-6', title: 'Implement role-based access', completed: false },
      { id: 'taskapi-7', title: 'Write unit tests', completed: false },
      { id: 'taskapi-8', title: 'Write integration tests', completed: false },
      { id: 'taskapi-9', title: 'Add Swagger documentation', completed: false }
    ],
    skills: ['Spring Boot', 'Spring Security', 'JWT', 'Testing', 'OpenAPI']
  },

  // Phase 6: Full Stack
  {
    id: 'fullstack-employee-crud',
    name: 'Employee Management System',
    description: 'Full stack CRUD application with React and Spring Boot',
    phase: 'fullstack',
    startDay: 393,
    endDay: 406,
    subtasks: [
      { id: 'emp-1', title: 'Set up backend API', completed: false },
      { id: 'emp-2', title: 'Create React frontend', completed: false },
      { id: 'emp-3', title: 'Implement employee list with pagination', completed: false },
      { id: 'emp-4', title: 'Add create/edit forms', completed: false },
      { id: 'emp-5', title: 'Implement delete with confirmation', completed: false },
      { id: 'emp-6', title: 'Add authentication flow', completed: false },
      { id: 'emp-7', title: 'Implement role-based UI', completed: false },
      { id: 'emp-8', title: 'Dockerize the application', completed: false }
    ],
    skills: ['React', 'Spring Boot', 'MySQL', 'Docker', 'JWT']
  },
  {
    id: 'microservices-intro',
    name: 'Microservices Decomposition',
    description: 'Break a monolith into microservices with gateway and discovery',
    phase: 'fullstack',
    startDay: 455,
    endDay: 462,
    subtasks: [
      { id: 'micro-1', title: 'Identify service boundaries', completed: false },
      { id: 'micro-2', title: 'Create user service', completed: false },
      { id: 'micro-3', title: 'Create product service', completed: false },
      { id: 'micro-4', title: 'Set up API Gateway', completed: false },
      { id: 'micro-5', title: 'Configure service discovery', completed: false },
      { id: 'micro-6', title: 'Docker Compose setup', completed: false }
    ],
    skills: ['Microservices', 'Spring Cloud', 'Docker', 'API Gateway']
  },

  // Phase 7: Capstone
  {
    id: 'capstone-ecommerce',
    name: 'E-Commerce Platform (Capstone)',
    description: 'Production-ready e-commerce platform with microservices architecture',
    phase: 'capstone',
    startDay: 463,
    endDay: 504,
    subtasks: [
      { id: 'cap-1', title: 'Requirements and architecture design', completed: false },
      { id: 'cap-2', title: 'User service with auth', completed: false },
      { id: 'cap-3', title: 'Product catalog service', completed: false },
      { id: 'cap-4', title: 'Order management service', completed: false },
      { id: 'cap-5', title: 'API Gateway configuration', completed: false },
      { id: 'cap-6', title: 'Service discovery setup', completed: false },
      { id: 'cap-7', title: 'React storefront', completed: false },
      { id: 'cap-8', title: 'Shopping cart functionality', completed: false },
      { id: 'cap-9', title: 'Checkout process', completed: false },
      { id: 'cap-10', title: 'Admin dashboard', completed: false },
      { id: 'cap-11', title: 'Docker Compose deployment', completed: false },
      { id: 'cap-12', title: 'Comprehensive testing', completed: false },
      { id: 'cap-13', title: 'API documentation', completed: false },
      { id: 'cap-14', title: 'README and architecture docs', completed: false }
    ],
    skills: ['Full Stack', 'Microservices', 'Docker', 'React', 'Spring Boot', 'MongoDB']
  },
  {
    id: 'interview-prep',
    name: 'Interview Preparation',
    description: 'Complete interview preparation including DSA, system design, and behavioral',
    phase: 'capstone',
    startDay: 505,
    endDay: 523,
    subtasks: [
      { id: 'int-1', title: 'Solve 30 medium DSA problems', completed: false },
      { id: 'int-2', title: 'Review 50 Java interview questions', completed: false },
      { id: 'int-3', title: 'Review Spring Boot interview questions', completed: false },
      { id: 'int-4', title: 'Practice 3 system design problems', completed: false },
      { id: 'int-5', title: 'Prepare STAR stories for behavioral', completed: false },
      { id: 'int-6', title: 'Complete 3 mock interviews', completed: false },
      { id: 'int-7', title: 'Update resume and portfolio', completed: false }
    ],
    skills: ['DSA', 'System Design', 'Interview Skills', 'Portfolio']
  }
];

// Helper function to determine phase from day number
function getPhaseForDay(dayNumber: number): string {
  if (dayNumber <= 56) return 'java-core';
  if (dayNumber <= 147) return 'dsa';      // ✅ Days 57-147 (91 days)
  if (dayNumber <= 189) return 'database'; // ✅ Days 148-189 (42 days)
  if (dayNumber <= 273) return 'frontend'; // ✅ Days 190-273 (84 days)
  if (dayNumber <= 406) return 'backend';  // ✅ Days 274-399 (126 days)
  if (dayNumber <= 525) return 'fullstack';// ✅ Days 400-505 (106 days)
  return 'capstone';
}

// Generate all daily tasks from curriculum
export const generateDailyTasks = (): DailyTask[] => {
  const tasks: DailyTask[] = [];
  const startDate = new Date('2026-01-24');

  fullCurriculum.forEach((task: CurriculumTask, index: number) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);

    const dayNumber = index + 1;
    const weekNumber = Math.floor(index / 7) + 1;
    const phase = getPhaseForDay(dayNumber);

    tasks.push({
      id: `day-${dayNumber}`,
      date: currentDate.toISOString().split('T')[0],
      dayNumber,
      topic: task.topic,
      description: task.description,
      taskType: task.taskType,
      estimatedMinutes: task.estimatedMinutes,
      outcome: task.outcome,
      phase,
      week: weekNumber
    });
  });

  return tasks;
};

export const dailyTasks = generateDailyTasks();

// Export curriculum stats for dashboard
export { curriculumStats };
