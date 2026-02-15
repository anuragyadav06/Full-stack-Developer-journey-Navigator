// Phase 6: Full Stack Integration + Cloud + System Design (Weeks 57-71) - Feb 13 - May 29, 2027
// UPDATED: 106 days (was 84) - Added AWS (14 days), System Design (14 days), Performance optimization

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase6Fullstack: CurriculumTask[] = [
  // Week 57: Integration Basics (7 days)
  { topic: 'Full Stack Architecture', description: 'Frontend-backend communication, CORS, API calls', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand full stack architecture' },
  { topic: 'React API Integration', description: 'Axios, fetch, environment variables', taskType: 'learn', estimatedMinutes: 150, outcome: 'Call APIs from React' },
  { topic: 'Error Handling in UI', description: 'Handle API errors, loading states', taskType: 'learn', estimatedMinutes: 120, outcome: 'Graceful error handling' },
  { topic: 'Authentication Flow', description: 'Login/logout in React, token storage', taskType: 'learn', estimatedMinutes: 180, outcome: 'Auth flow implemented' },
  { topic: 'Protected Routes', description: 'Auth context, route guards', taskType: 'learn', estimatedMinutes: 150, outcome: 'Routes protected' },
  { topic: 'Integration Practice', description: 'Connect React to Task API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Integration working' },
  { topic: 'Week 57 Review', description: 'Integration basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Integration solid' },

  // Week 58: State Management (7 days)
  { topic: 'Global State Patterns', description: 'When to use context, React Query, Zustand', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right state solution' },
  { topic: 'React Query Deep Dive', description: 'useQuery, useMutation, caching strategies', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master React Query' },
  { topic: 'Optimistic Updates', description: 'Update UI before API response', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement optimistic updates' },
  { topic: 'Form Libraries', description: 'React Hook Form, Zod validation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use form libraries' },
  { topic: 'State Practice', description: 'Implement CRUD with React Query', taskType: 'practice', estimatedMinutes: 180, outcome: 'CRUD working' },
  { topic: 'Performance Optimization', description: 'React.memo, useMemo, code splitting', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimize performance' },
  { topic: 'Week 58 Review', description: 'State management review', taskType: 'revise', estimatedMinutes: 120, outcome: 'State patterns solid' },

  // Week 59-60: CRUD Application (14 days)
  { topic: 'CRUD Project: Setup', description: 'Set up React and Spring Boot projects', taskType: 'build', estimatedMinutes: 120, outcome: 'Projects initialized' },
  { topic: 'CRUD Project: Backend API', description: 'Create Employee REST API', taskType: 'build', estimatedMinutes: 180, outcome: 'API complete' },
  { topic: 'CRUD Project: Frontend Setup', description: 'React project with routing', taskType: 'build', estimatedMinutes: 150, outcome: 'Frontend scaffolded' },
  { topic: 'CRUD Project: List View', description: 'Display employees with pagination', taskType: 'build', estimatedMinutes: 180, outcome: 'List view working' },
  { topic: 'CRUD Project: Create Form', description: 'Add new employee form', taskType: 'build', estimatedMinutes: 180, outcome: 'Create working' },
  { topic: 'CRUD Project: Edit/Delete', description: 'Update and delete operations', taskType: 'build', estimatedMinutes: 180, outcome: 'CRUD complete' },
  { topic: 'Week 59 Review', description: 'CRUD implementation review', taskType: 'revise', estimatedMinutes: 90, outcome: 'CRUD reviewed' },

  { topic: 'CRUD Project: Authentication', description: 'Add login/register pages', taskType: 'build', estimatedMinutes: 180, outcome: 'Auth UI complete' },
  { topic: 'CRUD Project: Token Handling', description: 'JWT integration, axios interceptors', taskType: 'build', estimatedMinutes: 180, outcome: 'Token handling working' },
  { topic: 'CRUD Project: Authorization', description: 'Role-based UI rendering', taskType: 'build', estimatedMinutes: 150, outcome: 'Authorization in UI' },
  { topic: 'CRUD Project: Styling', description: 'Tailwind CSS, responsive design', taskType: 'build', estimatedMinutes: 180, outcome: 'App styled' },
  { topic: 'CRUD Project: Error Handling', description: 'Toast notifications, error boundaries', taskType: 'build', estimatedMinutes: 120, outcome: 'Errors handled gracefully' },
  { topic: 'CRUD Project: Testing', description: 'Frontend unit tests', taskType: 'build', estimatedMinutes: 180, outcome: 'Tests written' },
  { topic: 'CRUD Project Complete!', description: 'Full stack CRUD app review', taskType: 'revise', estimatedMinutes: 120, outcome: 'CRUD app complete' },

  // Week 61-62: Git & Linux (14 days)
  { topic: 'Git Fundamentals', description: 'init, add, commit, status, log', taskType: 'learn', estimatedMinutes: 120, outcome: 'Basic git operations' },
  { topic: 'Git Branching', description: 'Branches, merge, rebase, conflicts', taskType: 'learn', estimatedMinutes: 150, outcome: 'Branch management' },
  { topic: 'Git Workflow', description: 'Feature branches, pull requests, code review', taskType: 'learn', estimatedMinutes: 120, outcome: 'Team workflow understood' },
  { topic: 'GitHub', description: 'Remote repos, push, pull, fork, clone', taskType: 'learn', estimatedMinutes: 120, outcome: 'GitHub proficient' },
  { topic: 'Git Practice', description: 'Collaborative workflow simulation', taskType: 'practice', estimatedMinutes: 180, outcome: 'Git workflow practiced' },
  { topic: 'Linux Basics', description: 'File system, navigation, permissions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Navigate Linux' },
  { topic: 'Week 61 Review', description: 'Git and Linux review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Git mastered' },

  { topic: 'Linux Commands', description: 'Essential commands: grep, find, chmod, ssh', taskType: 'learn', estimatedMinutes: 150, outcome: 'Command line proficient' },
  { topic: 'Shell Scripting Basics', description: 'Simple bash scripts, automation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write simple scripts' },
  { topic: 'Package Management', description: 'apt, yum, package installation', taskType: 'learn', estimatedMinutes: 90, outcome: 'Manage packages' },
  { topic: 'Process Management', description: 'ps, top, kill, background processes', taskType: 'learn', estimatedMinutes: 90, outcome: 'Manage processes' },
  { topic: 'Environment Setup', description: 'Environment variables, PATH, .bashrc', taskType: 'learn', estimatedMinutes: 90, outcome: 'Configure environment' },
  { topic: 'Linux Practice', description: 'Set up development environment on Linux', taskType: 'practice', estimatedMinutes: 180, outcome: 'Dev environment ready' },
  { topic: 'Week 62 Review', description: 'Linux review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Linux basics solid' },

  // Week 63-64: Docker (14 days)
  { topic: 'Docker Introduction', description: 'Containers vs VMs, Docker architecture', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand Docker concepts' },
  { topic: 'Docker Installation & CLI', description: 'Install Docker, basic commands', taskType: 'learn', estimatedMinutes: 120, outcome: 'Docker running' },
  { topic: 'Docker Images', description: 'Pull, build, tag, push images', taskType: 'learn', estimatedMinutes: 150, outcome: 'Work with images' },
  { topic: 'Dockerfile', description: 'Write Dockerfiles, best practices', taskType: 'learn', estimatedMinutes: 180, outcome: 'Create Dockerfiles' },
  { topic: 'Docker Containers', description: 'Run, stop, remove, logs, exec', taskType: 'learn', estimatedMinutes: 150, outcome: 'Manage containers' },
  { topic: 'Docker Practice', description: 'Dockerize Spring Boot application', taskType: 'practice', estimatedMinutes: 180, outcome: 'App containerized' },
  { topic: 'Week 63 Review', description: 'Docker basics review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Docker basics solid' },

  { topic: 'Docker Volumes', description: 'Data persistence, volume types', taskType: 'learn', estimatedMinutes: 120, outcome: 'Persist container data' },
  { topic: 'Docker Networks', description: 'Container networking, bridge networks', taskType: 'learn', estimatedMinutes: 120, outcome: 'Connect containers' },
  { topic: 'Docker Compose', description: 'Multi-container apps, compose file', taskType: 'learn', estimatedMinutes: 180, outcome: 'Use Docker Compose' },
  { topic: 'Compose Practice', description: 'Full stack app with Compose', taskType: 'practice', estimatedMinutes: 180, outcome: 'Compose working' },
  { topic: 'Docker Best Practices', description: 'Multi-stage builds, security, optimization', taskType: 'learn', estimatedMinutes: 120, outcome: 'Follow best practices' },
  { topic: 'Docker Complete Practice', description: 'Dockerize CRUD application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Full app dockerized' },
  { topic: 'Week 64 Review', description: 'Docker comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Docker mastered' },

  // Week 65: MongoDB (7 days)
  { topic: 'MongoDB Introduction', description: 'NoSQL concepts, documents, collections', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand MongoDB' },
  { topic: 'MongoDB CRUD', description: 'insertOne, find, updateOne, deleteOne, query operators', taskType: 'learn', estimatedMinutes: 180, outcome: 'Perform CRUD in MongoDB' },
  { topic: 'Aggregation Pipeline', description: '$match, $group, $project, aggregation stages', taskType: 'learn', estimatedMinutes: 180, outcome: 'Use aggregation' },
  { topic: 'Spring Data MongoDB', description: 'MongoRepository, document mapping, queries', taskType: 'learn', estimatedMinutes: 180, outcome: 'Connect Spring to MongoDB' },
  { topic: 'MongoDB Practice', description: 'Build API with MongoDB backend', taskType: 'practice', estimatedMinutes: 180, outcome: 'MongoDB API working' },
  { topic: 'SQL vs NoSQL Decision', description: 'When to use SQL vs NoSQL, hybrid approaches', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right database' },
  { topic: 'Week 65 Review', description: 'MongoDB review', taskType: 'revise', estimatedMinutes: 120, outcome: 'MongoDB skills solid' },

  // 🔥 NEW: Week 66-67 - AWS & Cloud (14 days) - CRITICAL
  
  // AWS Week 1: Core Services
  { topic: 'Cloud & AWS Introduction', description: 'Cloud concepts (IaaS, PaaS, SaaS), AWS regions/AZs, create AWS account, IAM basics (users, roles, policies), billing', taskType: 'learn', estimatedMinutes: 180, outcome: 'AWS account ready, cloud fundamentals understood' },
  { topic: 'EC2 - Compute', description: 'EC2 instances, SSH connection, security groups, key pairs, install Java/MySQL on EC2, Elastic IPs', taskType: 'learn', estimatedMinutes: 180, outcome: 'Deploy apps on EC2' },
  { topic: 'S3 - Storage', description: 'S3 buckets, upload/download, bucket policies, static website hosting, versioning, CORS config', taskType: 'learn', estimatedMinutes: 180, outcome: 'Store and serve files from S3' },
  { topic: 'RDS - Database', description: 'Create MySQL RDS, connect from EC2, backups, Multi-AZ, security groups, parameter groups', taskType: 'learn', estimatedMinutes: 180, outcome: 'Managed database in cloud' },
  { topic: 'Deploy Spring Boot to AWS', description: 'Create JAR, upload to EC2, run as systemd service, connect to RDS, configure env variables, test endpoints', taskType: 'practice', estimatedMinutes: 240, outcome: 'Spring Boot running on AWS' },
  { topic: 'Deploy React to S3+CloudFront', description: 'Build React for production, upload to S3, create CloudFront distribution (CDN), custom domain, HTTPS', taskType: 'practice', estimatedMinutes: 180, outcome: 'React app on CDN globally' },
  { topic: 'Week 66 AWS Review', description: 'Core AWS services review', taskType: 'revise', estimatedMinutes: 120, outcome: 'EC2, S3, RDS mastered' },

  // AWS Week 2: Advanced + DevOps
  { topic: 'VPC - Networking', description: 'VPC, subnets (public/private), route tables, internet gateway, NAT, security vs network ACLs', taskType: 'learn', estimatedMinutes: 180, outcome: 'AWS networking understood' },
  { topic: 'Load Balancers & Auto Scaling', description: 'Application Load Balancer, target groups, health checks, Auto Scaling Groups, scaling policies', taskType: 'learn', estimatedMinutes: 180, outcome: 'Scalable architecture' },
  { topic: 'Lambda & Serverless', description: 'AWS Lambda functions, triggers (API Gateway, S3), serverless use cases', taskType: 'learn', estimatedMinutes: 180, outcome: 'Build serverless functions' },
  { topic: 'API Gateway + Lambda', description: 'Create REST API with API Gateway, Lambda proxy integration, CORS, deploy stages', taskType: 'practice', estimatedMinutes: 180, outcome: 'Serverless API working' },
  { topic: 'CI/CD with GitHub Actions', description: 'GitHub Actions workflow: build JAR → deploy to EC2, React → S3, secrets management, auto-deploy on push', taskType: 'learn', estimatedMinutes: 240, outcome: 'Automated deployment pipeline' },
  { topic: 'Docker on AWS (ECS/ECR)', description: 'Push images to ECR, deploy containers on ECS/Fargate, task definitions', taskType: 'learn', estimatedMinutes: 180, outcome: 'Run containers on AWS' },
  { topic: 'AWS Complete Project', description: 'Deploy FULL Employee CRUD: Spring Boot (EC2/ECS), React (S3+CloudFront), MySQL (RDS), Redis (ElastiCache), ALB, CI/CD, monitoring. Architecture diagram.', taskType: 'build', estimatedMinutes: 300, outcome: 'Production AWS deployment - RESUME HIGHLIGHT!' },

  // 🔥 NEW: Week 68-69 - System Design (14 days) - CRITICAL FOR INTERVIEWS
  
  // System Design Week 1: Fundamentals
  { topic: 'System Design Introduction', description: 'What is system design, functional vs non-functional requirements, scalability/availability/reliability, trade-offs, interview approach', taskType: 'learn', estimatedMinutes: 180, outcome: 'System design mindset' },
  { topic: 'Scalability Patterns', description: 'Vertical vs horizontal scaling, load balancing (round-robin, least connections), stateless apps, CDN, reverse proxy, connection pooling', taskType: 'learn', estimatedMinutes: 180, outcome: 'Design for scale' },
  { topic: 'Caching Strategies', description: 'Cache levels (browser, CDN, app, DB), cache-aside/write-through/write-back, invalidation, TTL, cache stampede', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master caching' },
  { topic: 'Database Scaling', description: 'Read replicas, replication lag, master-slave, sharding (horizontal partitioning), consistent hashing, ACID vs BASE', taskType: 'learn', estimatedMinutes: 180, outcome: 'Scale databases' },
  { topic: 'CAP Theorem', description: 'CAP theorem deep dive, eventual consistency, strong consistency, quorum, Paxos/Raft intro, real-world examples', taskType: 'learn', estimatedMinutes: 180, outcome: 'Distributed systems theory' },
  { topic: 'Design: URL Shortener', description: 'Requirements, capacity estimation, API design, data schema, base62 encoding, caching, analytics, scaling plan WITH DIAGRAMS', taskType: 'practice', estimatedMinutes: 240, outcome: 'Complete URL shortener design' },
  { topic: 'Week 68 Review', description: 'System design fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Fundamentals solid' },

  // System Design Week 2: Advanced Designs
  { topic: 'Microservices Patterns', description: 'Service decomposition, API Gateway, service discovery, circuit breaker, SAGA, event sourcing, CQRS, bulkhead', taskType: 'learn', estimatedMinutes: 180, outcome: 'Microservices patterns mastered' },
  { topic: 'Message Queues in Design', description: 'Async communication, queue vs topic, delivery guarantees, Kafka for streaming, DLQ, use cases', taskType: 'learn', estimatedMinutes: 150, outcome: 'Design async systems' },
  { topic: 'Design: Twitter Feed', description: 'Post tweets, follow, timeline. Fanout on write vs read, hot users, ranking, push vs pull, caching timelines WITH DIAGRAMS', taskType: 'practice', estimatedMinutes: 240, outcome: 'Twitter design complete' },
  { topic: 'Design: Instagram', description: 'Image upload/storage (S3, CDN), photo feed, graph DB for followers, ranking, processing pipeline, sharding billions of photos WITH DIAGRAMS', taskType: 'practice', estimatedMinutes: 240, outcome: 'Instagram design complete' },
  { topic: 'Design: Uber', description: 'Real-time location (WebSockets), geospatial indexing (QuadTree), matching, dynamic pricing, trip tracking, ETA, time-series data WITH DIAGRAMS', taskType: 'practice', estimatedMinutes: 240, outcome: 'Uber design complete' },
  { topic: 'Production Patterns', description: 'Rate limiting (token bucket), API versioning, idempotency, monitoring (metrics, logging, tracing), alerting, graceful degradation', taskType: 'learn', estimatedMinutes: 180, outcome: 'Production considerations' },
  { topic: 'System Design Mock', description: 'Full 45-min mock interview: random problem (Netflix/YouTube/WhatsApp), whiteboard, explain trade-offs, handle questions', taskType: 'practice', estimatedMinutes: 180, outcome: 'Interview-ready!' },

  // Week 70-71: Microservices (14 days)
  { topic: 'Microservices Architecture', description: 'Monolith vs microservices, when to use, service boundaries, DDD', taskType: 'learn', estimatedMinutes: 150, outcome: 'Microservices concepts clear' },
  { topic: 'Service Discovery & Gateway', description: 'Eureka server, Spring Cloud Gateway, routing, filters', taskType: 'learn', estimatedMinutes: 180, outcome: 'Discovery and gateway working' },
  { topic: 'Config Server', description: 'Spring Cloud Config, centralized configuration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Externalize config' },
  { topic: 'Circuit Breaker & Resilience', description: 'Resilience4j, circuit breaker, fallback, retry patterns', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle failures' },
  { topic: 'Distributed Tracing', description: 'Sleuth, Zipkin, correlation IDs, trace requests', taskType: 'learn', estimatedMinutes: 120, outcome: 'Trace distributed calls' },
  { topic: 'Microservices Practice', description: 'Break monolith into 3 services with gateway, discovery, config', taskType: 'practice', estimatedMinutes: 240, outcome: 'Microservices working' },
  { topic: 'Week 70 Review', description: 'Microservices week 1 review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Microservices basics solid' },

  { topic: 'Service Communication', description: 'REST vs messaging, sync vs async, service mesh intro', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose communication' },
  { topic: 'Microservices Testing', description: 'Contract testing, integration testing, chaos engineering', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test microservices' },
  { topic: 'Microservices Docker', description: 'Containerize all services, Docker Compose multi-service', taskType: 'practice', estimatedMinutes: 180, outcome: 'Services containerized' },
  { topic: 'Microservices Project', description: 'Complete microservices app with all patterns', taskType: 'practice', estimatedMinutes: 240, outcome: 'Production microservices' },
  { topic: 'Full Stack Review', description: 'Comprehensive full stack + cloud + system design review', taskType: 'revise', estimatedMinutes: 180, outcome: 'All skills assessed' },
  { topic: 'DSA Revision', description: 'Solve 5 medium DSA problems to keep sharp', taskType: 'practice', estimatedMinutes: 180, outcome: 'DSA refreshed' },
  { topic: 'Phase 6 Complete!', description: 'Full Stack + Cloud (AWS) + System Design mastery achieved!', taskType: 'revise', estimatedMinutes: 120, outcome: 'HIGH-PAYING JOBS READY!' },
];