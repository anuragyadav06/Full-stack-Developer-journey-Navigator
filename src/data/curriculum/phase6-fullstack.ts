import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase6Fullstack: CurriculumTask[] = [

  // Week 58: Integration Basics
  { topic: 'Full Stack Architecture', description: 'Frontend-backend communication, CORS, API calls', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand full stack architecture' },
  { topic: 'React API Integration', description: 'Axios, fetch, environment variables', taskType: 'learn', estimatedMinutes: 150, outcome: 'Call APIs from React' },
  { topic: 'Error Handling in UI', description: 'Handle API errors, loading states', taskType: 'learn', estimatedMinutes: 120, outcome: 'Graceful error handling' },
  { topic: 'Authentication Flow', description: 'Login/logout in React, token storage', taskType: 'learn', estimatedMinutes: 180, outcome: 'Auth flow implemented' },
  { topic: 'Protected Routes', description: 'Auth context, route guards', taskType: 'learn', estimatedMinutes: 150, outcome: 'Routes protected' },
  { topic: 'Integration Practice', description: 'Connect React to Task API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Integration working' },
  { topic: 'Week 58 Review', description: 'Integration basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Integration solid' },

  // Week 59: State Management
  { topic: 'Global State Patterns', description: 'Context, React Query, Zustand', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right state solution' },
  { topic: 'React Query Deep Dive', description: 'useQuery, useMutation, caching strategies', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master React Query' },
  { topic: 'Optimistic Updates', description: 'Update UI before API response', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement optimistic updates' },
  { topic: 'Form Libraries', description: 'React Hook Form, Zod validation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use form libraries' },
  { topic: 'State Practice', description: 'Implement CRUD with React Query', taskType: 'practice', estimatedMinutes: 180, outcome: 'CRUD working' },
  { topic: 'Performance Optimization', description: 'React.memo, useMemo, code splitting', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimize performance' },
  { topic: 'Week 59 Review', description: 'State management review', taskType: 'revise', estimatedMinutes: 120, outcome: 'State patterns solid' },

  // Week 60: CRUD Project - Core
  { topic: 'CRUD Project: Setup', description: 'Set up React and Spring Boot projects', taskType: 'build', estimatedMinutes: 120, outcome: 'Projects initialized' },
  { topic: 'CRUD Project: Backend API', description: 'Create Employee REST API', taskType: 'build', estimatedMinutes: 180, outcome: 'API complete' },
  { topic: 'CRUD Project: Frontend Setup', description: 'React project with routing', taskType: 'build', estimatedMinutes: 150, outcome: 'Frontend scaffolded' },
  { topic: 'CRUD Project: List View', description: 'Display employees with pagination', taskType: 'build', estimatedMinutes: 180, outcome: 'List view working' },
  { topic: 'CRUD Project: Create Form', description: 'Add new employee form', taskType: 'build', estimatedMinutes: 180, outcome: 'Create working' },
  { topic: 'CRUD Project: Edit/Delete', description: 'Update and delete operations', taskType: 'build', estimatedMinutes: 180, outcome: 'CRUD complete' },
  { topic: 'Week 60 Review', description: 'CRUD implementation review', taskType: 'revise', estimatedMinutes: 120, outcome: 'CRUD reviewed' },

  // Week 61: CRUD Project - Auth & Polish
  { topic: 'CRUD Project: Authentication', description: 'Add login/register pages', taskType: 'build', estimatedMinutes: 180, outcome: 'Auth UI complete' },
  { topic: 'CRUD Project: Token Handling', description: 'JWT integration, axios interceptors', taskType: 'build', estimatedMinutes: 180, outcome: 'Token handling working' },
  { topic: 'CRUD Project: Authorization', description: 'Role-based UI rendering', taskType: 'build', estimatedMinutes: 150, outcome: 'Authorization in UI' },
  { topic: 'CRUD Project: Styling', description: 'Tailwind CSS, responsive design', taskType: 'build', estimatedMinutes: 180, outcome: 'App styled' },
  { topic: 'CRUD Project: Error Handling', description: 'Toast notifications, error boundaries', taskType: 'build', estimatedMinutes: 120, outcome: 'Errors handled gracefully' },
  { topic: 'CRUD Project: Testing', description: 'Frontend unit tests', taskType: 'build', estimatedMinutes: 180, outcome: 'Tests written' },
  { topic: 'Week 61 Review', description: 'CRUD project complete review', taskType: 'revise', estimatedMinutes: 120, outcome: 'CRUD app complete' },

  // Week 62: Git & Linux
  { topic: 'Git Fundamentals', description: 'init, add, commit, status, log', taskType: 'learn', estimatedMinutes: 120, outcome: 'Basic git operations' },
  { topic: 'Git Branching', description: 'Branches, merge, rebase, conflicts', taskType: 'learn', estimatedMinutes: 150, outcome: 'Branch management' },
  { topic: 'Git Workflow', description: 'Feature branches, pull requests', taskType: 'learn', estimatedMinutes: 120, outcome: 'Team workflow understood' },
  { topic: 'GitHub', description: 'Remote repos, push, pull, fork, clone', taskType: 'learn', estimatedMinutes: 120, outcome: 'GitHub proficient' },
  { topic: 'Git Practice', description: 'Collaborative workflow simulation', taskType: 'practice', estimatedMinutes: 180, outcome: 'Git workflow practiced' },
  { topic: 'Linux Basics', description: 'File system, navigation, permissions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Navigate Linux' },
  { topic: 'Week 62 Review', description: 'Git and Linux review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Git mastered' },

  // Week 63: Linux Advanced
  { topic: 'Linux Commands', description: 'grep, find, chmod, ssh', taskType: 'learn', estimatedMinutes: 150, outcome: 'Command line proficient' },
  { topic: 'Shell Scripting Basics', description: 'Simple bash scripts', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write scripts' },
  { topic: 'Package Management', description: 'apt, yum', taskType: 'learn', estimatedMinutes: 90, outcome: 'Manage packages' },
  { topic: 'Process Management', description: 'ps, top, kill', taskType: 'learn', estimatedMinutes: 90, outcome: 'Manage processes' },
  { topic: 'Environment Setup', description: 'Environment variables, PATH', taskType: 'learn', estimatedMinutes: 90, outcome: 'Configure environment' },
  { topic: 'Linux Practice', description: 'Set up development environment', taskType: 'practice', estimatedMinutes: 180, outcome: 'Dev environment ready' },
  { topic: 'Week 63 Review', description: 'Linux review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Linux basics solid' },

  // Week 64: Docker Basics
  { topic: 'Docker Introduction', description: 'Containers vs VMs, Docker architecture', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand Docker concepts' },
  { topic: 'Docker Installation & CLI', description: 'Install Docker, basic commands', taskType: 'learn', estimatedMinutes: 120, outcome: 'Docker running' },
  { topic: 'Docker Images', description: 'Pull, build, tag, push images', taskType: 'learn', estimatedMinutes: 150, outcome: 'Work with images' },
  { topic: 'Dockerfile', description: 'Write Dockerfiles, best practices', taskType: 'learn', estimatedMinutes: 180, outcome: 'Create Dockerfiles' },
  { topic: 'Docker Containers', description: 'Run, stop, remove, logs, exec', taskType: 'learn', estimatedMinutes: 150, outcome: 'Manage containers' },
  { topic: 'Docker Practice', description: 'Dockerize Spring Boot application', taskType: 'practice', estimatedMinutes: 180, outcome: 'App containerized' },
  { topic: 'Week 64 Review', description: 'Docker basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Docker fundamentals solid' },

  // Week 65: Docker Advanced
  { topic: 'Docker Volumes', description: 'Data persistence, volume types', taskType: 'learn', estimatedMinutes: 120, outcome: 'Persist container data' },
  { topic: 'Docker Networks', description: 'Container networking, bridge networks', taskType: 'learn', estimatedMinutes: 120, outcome: 'Connect containers' },
  { topic: 'Docker Compose', description: 'Multi-container apps, compose file', taskType: 'learn', estimatedMinutes: 180, outcome: 'Use Docker Compose' },
  { topic: 'Compose Practice', description: 'Full stack app with Compose', taskType: 'practice', estimatedMinutes: 180, outcome: 'Compose working' },
  { topic: 'Docker Best Practices', description: 'Multi-stage builds, security, optimization', taskType: 'learn', estimatedMinutes: 120, outcome: 'Follow best practices' },
  { topic: 'Docker Complete Practice', description: 'Dockerize CRUD application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Full app dockerized' },
  { topic: 'Week 65 Review', description: 'Docker comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Docker mastered' },

  // Week 66: MongoDB
  { topic: 'MongoDB Introduction', description: 'NoSQL concepts, documents, collections', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand MongoDB' },
  { topic: 'MongoDB CRUD', description: 'insertOne, find, updateOne, deleteOne', taskType: 'learn', estimatedMinutes: 180, outcome: 'Perform CRUD in MongoDB' },
  { topic: 'Aggregation Pipeline', description: '$match, $group, $project stages', taskType: 'learn', estimatedMinutes: 180, outcome: 'Use aggregation' },
  { topic: 'Spring Data MongoDB', description: 'MongoRepository, document mapping', taskType: 'learn', estimatedMinutes: 180, outcome: 'Connect Spring to MongoDB' },
  { topic: 'MongoDB Practice', description: 'Build API with MongoDB backend', taskType: 'practice', estimatedMinutes: 180, outcome: 'MongoDB API working' },
  { topic: 'SQL vs NoSQL Decision', description: 'When to use SQL vs NoSQL', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right database' },
  { topic: 'Week 66 Review', description: 'MongoDB review', taskType: 'revise', estimatedMinutes: 120, outcome: 'MongoDB skills solid' },

  // Week 67: AWS Core
  { topic: 'Cloud & AWS Introduction', description: 'Cloud concepts, IAM basics, billing', taskType: 'learn', estimatedMinutes: 180, outcome: 'AWS fundamentals understood' },
  { topic: 'EC2 - Compute', description: 'EC2 setup, SSH, security groups', taskType: 'learn', estimatedMinutes: 180, outcome: 'Deploy apps on EC2' },
  { topic: 'S3 - Storage', description: 'Buckets, static hosting, versioning', taskType: 'learn', estimatedMinutes: 180, outcome: 'Store files in S3' },
  { topic: 'RDS - Database', description: 'Create MySQL RDS, backups, Multi-AZ', taskType: 'learn', estimatedMinutes: 180, outcome: 'Managed database running' },
  { topic: 'Deploy Spring Boot to AWS', description: 'Upload JAR to EC2, connect to RDS', taskType: 'practice', estimatedMinutes: 240, outcome: 'Backend deployed' },
  { topic: 'Deploy React to S3+CloudFront', description: 'Build React, CDN distribution, HTTPS', taskType: 'practice', estimatedMinutes: 180, outcome: 'Frontend globally deployed' },
  { topic: 'Week 67 Review', description: 'AWS core services review', taskType: 'revise', estimatedMinutes: 120, outcome: 'EC2, S3, RDS mastered' },

  // Week 68: AWS Advanced
  { topic: 'VPC - Networking', description: 'Subnets, route tables, NAT, IGW', taskType: 'learn', estimatedMinutes: 180, outcome: 'AWS networking understood' },
  { topic: 'Load Balancers & Auto Scaling', description: 'ALB, ASG, health checks', taskType: 'learn', estimatedMinutes: 180, outcome: 'Scalable architecture' },
  { topic: 'Lambda & Serverless', description: 'Lambda functions, triggers', taskType: 'learn', estimatedMinutes: 180, outcome: 'Serverless basics clear' },
  { topic: 'API Gateway + Lambda', description: 'Create REST API with Lambda', taskType: 'practice', estimatedMinutes: 180, outcome: 'Serverless API working' },
  { topic: 'CI/CD with GitHub Actions', description: 'Auto deploy backend/frontend', taskType: 'learn', estimatedMinutes: 240, outcome: 'CI/CD pipeline ready' },
  { topic: 'Docker on AWS (ECS/ECR)', description: 'Push images, deploy containers', taskType: 'learn', estimatedMinutes: 180, outcome: 'Containers on AWS' },
  { topic: 'Week 68 Review', description: 'AWS advanced review', taskType: 'revise', estimatedMinutes: 120, outcome: 'AWS production ready' },

  // Week 69: System Design Fundamentals
  { topic: 'System Design Introduction', description: 'Functional vs non-functional requirements', taskType: 'learn', estimatedMinutes: 180, outcome: 'System mindset developed' },
  { topic: 'Scalability Patterns', description: 'Horizontal scaling, load balancing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Design for scale' },
  { topic: 'Caching Strategies', description: 'Cache patterns, TTL, invalidation', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master caching' },
  { topic: 'Database Scaling', description: 'Read replicas, sharding', taskType: 'learn', estimatedMinutes: 180, outcome: 'Scale databases' },
  { topic: 'CAP Theorem', description: 'Consistency vs availability tradeoffs', taskType: 'learn', estimatedMinutes: 180, outcome: 'Distributed systems basics' },
  { topic: 'Design: URL Shortener', description: 'Capacity estimation, schema, scaling plan', taskType: 'practice', estimatedMinutes: 240, outcome: 'URL shortener designed' },
  { topic: 'Week 69 Review', description: 'System design fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Fundamentals solid' },

  // Week 70: System Design Advanced
  { topic: 'Microservices Patterns', description: 'SAGA, CQRS, event sourcing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Microservices patterns mastered' },
  { topic: 'Message Queues in Design', description: 'Async systems, delivery guarantees', taskType: 'learn', estimatedMinutes: 150, outcome: 'Async architecture design' },
  { topic: 'Design: Twitter Feed', description: 'Timeline generation, hot users', taskType: 'practice', estimatedMinutes: 240, outcome: 'Twitter system designed' },
  { topic: 'Design: Instagram', description: 'Image storage, ranking, sharding', taskType: 'practice', estimatedMinutes: 240, outcome: 'Instagram system designed' },
  { topic: 'Design: Uber', description: 'Geospatial indexing, real-time tracking', taskType: 'practice', estimatedMinutes: 240, outcome: 'Uber system designed' },
  { topic: 'Production Patterns', description: 'Rate limiting, monitoring, idempotency', taskType: 'learn', estimatedMinutes: 180, outcome: 'Production ready mindset' },
  { topic: 'Week 70 Review', description: 'Advanced system design review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Design interview ready' },

  // Week 71: Microservices Core
  { topic: 'Microservices Architecture', description: 'Service boundaries, DDD', taskType: 'learn', estimatedMinutes: 150, outcome: 'Microservices clear' },
  { topic: 'Service Discovery & Gateway', description: 'Eureka, Spring Cloud Gateway', taskType: 'learn', estimatedMinutes: 180, outcome: 'Discovery working' },
  { topic: 'Config Server', description: 'Centralized configuration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Config server working' },
  { topic: 'Circuit Breaker & Resilience', description: 'Resilience4j patterns', taskType: 'learn', estimatedMinutes: 150, outcome: 'Failure handling' },
  { topic: 'Distributed Tracing', description: 'Sleuth, Zipkin', taskType: 'learn', estimatedMinutes: 120, outcome: 'Trace requests' },
  { topic: 'Microservices Practice', description: 'Break monolith into services', taskType: 'practice', estimatedMinutes: 240, outcome: 'Microservices running' },
  { topic: 'Week 71 Review', description: 'Microservices fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Microservices solid' },

  // Week 72: Microservices Advanced & Completion
  { topic: 'Service Communication', description: 'REST vs messaging tradeoffs', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose communication style' },
  { topic: 'Microservices Testing', description: 'Contract & integration testing', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test microservices' },
  { topic: 'Microservices Docker', description: 'Containerize services', taskType: 'practice', estimatedMinutes: 180, outcome: 'Services containerized' },
  { topic: 'Microservices Project', description: 'Complete production-ready setup', taskType: 'practice', estimatedMinutes: 240, outcome: 'Production microservices ready' },
  { topic: 'Full Stack Review', description: 'Comprehensive full stack + cloud review', taskType: 'revise', estimatedMinutes: 180, outcome: 'All skills assessed' },
  { topic: 'DSA Revision', description: 'Solve 5 medium DSA problems', taskType: 'practice', estimatedMinutes: 180, outcome: 'DSA refreshed' },
  { topic: 'Phase 6 Complete!', description: 'Full Stack + Cloud + System Design mastery achieved!', taskType: 'revise', estimatedMinutes: 120, outcome: 'HIGH-PAYING JOB READY!' },

];