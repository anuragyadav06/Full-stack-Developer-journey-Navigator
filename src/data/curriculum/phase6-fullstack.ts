// Phase 6: Full Stack Integration (Weeks 55-66) - Jan 30 - Apr 24, 2027

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase6Fullstack: CurriculumTask[] = [
  // Week 55: Integration Basics
  { topic: 'Full Stack Architecture', description: 'Frontend-backend communication, CORS, API calls', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand full stack architecture' },
  { topic: 'React API Integration', description: 'Axios, fetch, environment variables', taskType: 'learn', estimatedMinutes: 150, outcome: 'Call APIs from React' },
  { topic: 'Error Handling in UI', description: 'Handle API errors, loading states', taskType: 'learn', estimatedMinutes: 120, outcome: 'Graceful error handling' },
  { topic: 'Authentication Flow', description: 'Login/logout in React, token storage', taskType: 'learn', estimatedMinutes: 180, outcome: 'Auth flow implemented' },
  { topic: 'Protected Routes', description: 'Auth context, route guards', taskType: 'learn', estimatedMinutes: 150, outcome: 'Routes protected' },
  { topic: 'Integration Practice', description: 'Connect React to Task API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Integration working' },
  { topic: 'Week 55 Review', description: 'Integration basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Integration solid' },

  // Week 56: State Management
  { topic: 'Global State Patterns', description: 'When to use context, React Query, Zustand', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right state solution' },
  { topic: 'React Query Deep Dive', description: 'useQuery, useMutation, caching strategies', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master React Query' },
  { topic: 'Optimistic Updates', description: 'Update UI before API response', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement optimistic updates' },
  { topic: 'Form Libraries', description: 'React Hook Form, Zod validation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use form libraries' },
  { topic: 'State Practice', description: 'Implement CRUD with React Query', taskType: 'practice', estimatedMinutes: 180, outcome: 'CRUD working' },
  { topic: 'Performance Optimization', description: 'React.memo, useMemo, code splitting', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimize performance' },
  { topic: 'Week 56 Review', description: 'State management review', taskType: 'revise', estimatedMinutes: 120, outcome: 'State patterns solid' },

  // Week 57-58: CRUD Application
  { topic: 'CRUD Project: Setup', description: 'Set up React and Spring Boot projects', taskType: 'build', estimatedMinutes: 120, outcome: 'Projects initialized' },
  { topic: 'CRUD Project: Backend API', description: 'Create Employee REST API', taskType: 'build', estimatedMinutes: 180, outcome: 'API complete' },
  { topic: 'CRUD Project: Frontend Setup', description: 'React project with routing', taskType: 'build', estimatedMinutes: 150, outcome: 'Frontend scaffolded' },
  { topic: 'CRUD Project: List View', description: 'Display employees with pagination', taskType: 'build', estimatedMinutes: 180, outcome: 'List view working' },
  { topic: 'CRUD Project: Create Form', description: 'Add new employee form', taskType: 'build', estimatedMinutes: 180, outcome: 'Create working' },
  { topic: 'CRUD Project: Edit/Delete', description: 'Update and delete operations', taskType: 'build', estimatedMinutes: 180, outcome: 'CRUD complete' },
  { topic: 'CRUD Project: Week Review', description: 'Review CRUD implementation', taskType: 'revise', estimatedMinutes: 90, outcome: 'CRUD reviewed' },

  { topic: 'CRUD Project: Authentication', description: 'Add login/register pages', taskType: 'build', estimatedMinutes: 180, outcome: 'Auth UI complete' },
  { topic: 'CRUD Project: Token Handling', description: 'JWT integration, axios interceptors', taskType: 'build', estimatedMinutes: 180, outcome: 'Token handling working' },
  { topic: 'CRUD Project: Authorization', description: 'Role-based UI rendering', taskType: 'build', estimatedMinutes: 150, outcome: 'Authorization in UI' },
  { topic: 'CRUD Project: Styling', description: 'Tailwind CSS, responsive design', taskType: 'build', estimatedMinutes: 180, outcome: 'App styled' },
  { topic: 'CRUD Project: Error Handling', description: 'Toast notifications, error boundaries', taskType: 'build', estimatedMinutes: 120, outcome: 'Errors handled gracefully' },
  { topic: 'CRUD Project: Testing', description: 'Frontend unit tests', taskType: 'build', estimatedMinutes: 180, outcome: 'Tests written' },
  { topic: 'CRUD Project Complete!', description: 'Full stack CRUD app review', taskType: 'revise', estimatedMinutes: 120, outcome: 'CRUD app complete' },

  // Week 59-60: Git & Linux
  { topic: 'Git Fundamentals', description: 'init, add, commit, status, log', taskType: 'learn', estimatedMinutes: 120, outcome: 'Basic git operations' },
  { topic: 'Git Branching', description: 'Branches, merge, rebase, conflicts', taskType: 'learn', estimatedMinutes: 150, outcome: 'Branch management' },
  { topic: 'Git Workflow', description: 'Feature branches, pull requests, code review', taskType: 'learn', estimatedMinutes: 120, outcome: 'Team workflow understood' },
  { topic: 'GitHub', description: 'Remote repos, push, pull, fork, clone', taskType: 'learn', estimatedMinutes: 120, outcome: 'GitHub proficient' },
  { topic: 'Git Practice', description: 'Collaborative workflow simulation', taskType: 'practice', estimatedMinutes: 180, outcome: 'Git workflow practiced' },
  { topic: 'Linux Basics', description: 'File system, navigation, permissions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Navigate Linux' },
  { topic: 'Week 59 Review', description: 'Git and Linux review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Git mastered' },

  { topic: 'Linux Commands', description: 'Essential commands: grep, find, chmod, ssh', taskType: 'learn', estimatedMinutes: 150, outcome: 'Command line proficient' },
  { topic: 'Shell Scripting Basics', description: 'Simple bash scripts, automation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write simple scripts' },
  { topic: 'Package Management', description: 'apt, yum, package installation', taskType: 'learn', estimatedMinutes: 90, outcome: 'Manage packages' },
  { topic: 'Process Management', description: 'ps, top, kill, background processes', taskType: 'learn', estimatedMinutes: 90, outcome: 'Manage processes' },
  { topic: 'Environment Setup', description: 'Environment variables, PATH, .bashrc', taskType: 'learn', estimatedMinutes: 90, outcome: 'Configure environment' },
  { topic: 'Linux Practice', description: 'Set up development environment on Linux', taskType: 'practice', estimatedMinutes: 180, outcome: 'Dev environment ready' },
  { topic: 'Week 60 Review', description: 'Linux review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Linux basics solid' },

  // Week 61-62: Docker
  { topic: 'Docker Introduction', description: 'Containers vs VMs, Docker architecture', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand Docker concepts' },
  { topic: 'Docker Installation & CLI', description: 'Install Docker, basic commands', taskType: 'learn', estimatedMinutes: 120, outcome: 'Docker running' },
  { topic: 'Docker Images', description: 'Pull, build, tag, push images', taskType: 'learn', estimatedMinutes: 150, outcome: 'Work with images' },
  { topic: 'Dockerfile', description: 'Write Dockerfiles, best practices', taskType: 'learn', estimatedMinutes: 180, outcome: 'Create Dockerfiles' },
  { topic: 'Docker Containers', description: 'Run, stop, remove, logs, exec', taskType: 'learn', estimatedMinutes: 150, outcome: 'Manage containers' },
  { topic: 'Docker Practice', description: 'Dockerize Spring Boot application', taskType: 'practice', estimatedMinutes: 180, outcome: 'App containerized' },
  { topic: 'Week 61 Review', description: 'Docker basics review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Docker basics solid' },

  { topic: 'Docker Volumes', description: 'Data persistence, volume types', taskType: 'learn', estimatedMinutes: 120, outcome: 'Persist container data' },
  { topic: 'Docker Networks', description: 'Container networking, bridge networks', taskType: 'learn', estimatedMinutes: 120, outcome: 'Connect containers' },
  { topic: 'Docker Compose', description: 'Multi-container apps, compose file', taskType: 'learn', estimatedMinutes: 180, outcome: 'Use Docker Compose' },
  { topic: 'Compose Practice', description: 'Full stack app with Compose', taskType: 'practice', estimatedMinutes: 180, outcome: 'Compose working' },
  { topic: 'Docker Best Practices', description: 'Multi-stage builds, security, optimization', taskType: 'learn', estimatedMinutes: 120, outcome: 'Follow best practices' },
  { topic: 'Docker Complete Practice', description: 'Dockerize CRUD application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Full app dockerized' },
  { topic: 'Week 62 Review', description: 'Docker comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Docker mastered' },

  // Week 63-64: MongoDB
  { topic: 'MongoDB Introduction', description: 'NoSQL concepts, documents, collections', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand MongoDB' },
  { topic: 'MongoDB Setup', description: 'Install MongoDB, Compass, basic operations', taskType: 'learn', estimatedMinutes: 120, outcome: 'MongoDB running' },
  { topic: 'CRUD Operations', description: 'insertOne, find, updateOne, deleteOne', taskType: 'learn', estimatedMinutes: 150, outcome: 'Perform CRUD' },
  { topic: 'Query Operators', description: 'Comparison, logical, array operators', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write complex queries' },
  { topic: 'Aggregation', description: 'Aggregation pipeline, $match, $group', taskType: 'learn', estimatedMinutes: 180, outcome: 'Use aggregation' },
  { topic: 'MongoDB Practice', description: 'Build queries for e-commerce data', taskType: 'practice', estimatedMinutes: 180, outcome: '20 queries written' },
  { topic: 'Week 63 Review', description: 'MongoDB basics review', taskType: 'revise', estimatedMinutes: 90, outcome: 'MongoDB basics solid' },

  { topic: 'Spring Data MongoDB', description: 'MongoRepository, document mapping', taskType: 'learn', estimatedMinutes: 180, outcome: 'Connect Spring to MongoDB' },
  { topic: 'MongoDB Schema Design', description: 'Embedding vs referencing, denormalization', taskType: 'learn', estimatedMinutes: 150, outcome: 'Design MongoDB schemas' },
  { topic: 'Indexes in MongoDB', description: 'Index types, query optimization', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimize queries' },
  { topic: 'MongoDB + Java Practice', description: 'Build API with MongoDB backend', taskType: 'practice', estimatedMinutes: 180, outcome: 'MongoDB API working' },
  { topic: 'SQL vs NoSQL', description: 'When to use which, hybrid approaches', taskType: 'learn', estimatedMinutes: 90, outcome: 'Choose right database' },
  { topic: 'MongoDB Project', description: 'Add MongoDB to existing application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Dual database app' },
  { topic: 'Week 64 Review', description: 'MongoDB comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'MongoDB mastered' },

  // Week 65-66: Microservices Introduction
  { topic: 'Microservices Concepts', description: 'Monolith vs microservices, benefits, challenges', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand microservices' },
  { topic: 'Service Design', description: 'Bounded contexts, service boundaries', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design services' },
  { topic: 'Service Communication', description: 'REST, synchronous vs asynchronous', taskType: 'learn', estimatedMinutes: 150, outcome: 'Connect services' },
  { topic: 'API Gateway', description: 'Spring Cloud Gateway, routing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement gateway' },
  { topic: 'Service Discovery', description: 'Eureka, service registration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Set up discovery' },
  { topic: 'Microservices Practice', description: 'Break monolith into 2 services', taskType: 'practice', estimatedMinutes: 180, outcome: 'Services communicating' },
  { topic: 'Week 65 Review', description: 'Microservices basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Microservices intro complete' },

  { topic: 'Config Server', description: 'Centralized configuration', taskType: 'learn', estimatedMinutes: 120, outcome: 'Externalize config' },
  { topic: 'Resilience Patterns', description: 'Circuit breaker, retry, fallback', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle failures' },
  { topic: 'Distributed Tracing', description: 'Zipkin, trace correlation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Trace requests' },
  { topic: 'Microservices Docker', description: 'Containerize microservices', taskType: 'practice', estimatedMinutes: 180, outcome: 'Services dockerized' },
  { topic: 'Full Stack Phase Review', description: 'Comprehensive full stack review', taskType: 'revise', estimatedMinutes: 180, outcome: 'Full stack skills assessed' },
  { topic: 'DSA Revision Day', description: 'Solve 5 medium DSA problems', taskType: 'practice', estimatedMinutes: 180, outcome: 'DSA skills refreshed' },
  { topic: 'Phase 6 Complete!', description: 'Full stack mastery achieved', taskType: 'revise', estimatedMinutes: 120, outcome: 'Full stack phase completed' },
];
