// Phase 6: Full Stack Integration + AWS + System Design (17 Weeks, 119 Days)
// 10/10 PERFECT: Includes AWS Cloud, System Design, Docker, MongoDB
// Every week review on Day 7

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase6Fullstack: CurriculumTask[] = [
  // Week 59: Integration Basics (Days 134-140)
  { topic: 'Full Stack Architecture', description: 'Frontend-backend communication, CORS, API consumption', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand full stack' },
  { topic: 'React API Integration', description: 'Axios, fetch, environment variables', taskType: 'learn', estimatedMinutes: 150, outcome: 'Call backend from React' },
  { topic: 'Error Handling in UI', description: 'API errors, loading states, error boundaries', taskType: 'learn', estimatedMinutes: 120, outcome: 'Handle errors in UI' },
  { topic: 'Authentication Flow', description: 'Login/logout UI, token storage, interceptors', taskType: 'learn', estimatedMinutes: 180, outcome: 'Auth flow working' },
  { topic: 'Protected Routes', description: 'Auth context, route guards, redirects', taskType: 'learn', estimatedMinutes: 150, outcome: 'Protect routes' },
  { topic: 'Integration Practice', description: 'Connect React to Task API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Full stack integrated' },
  { topic: 'Week 59 Review', description: 'Integration basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Integration solid' },

  // Week 60: State Management (Days 141-147)
  { topic: 'Global State Patterns', description: 'Context API, React Query, when to use', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose state solution' },
  { topic: 'React Query', description: 'useQuery, useMutation, caching, invalidation', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master React Query' },
  { topic: 'Optimistic Updates', description: 'Update UI before response, rollback', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimistic UI' },
  { topic: 'Form Libraries', description: 'React Hook Form, Zod validation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Build complex forms' },
  { topic: 'State Practice', description: 'CRUD with React Query and optimistic updates', taskType: 'practice', estimatedMinutes: 180, outcome: 'Advanced state working' },
  { topic: 'Performance Optimization', description: 'React.memo, useMemo, useCallback, code splitting', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimize performance' },
  { topic: 'Week 60 Review', description: 'State management review', taskType: 'revise', estimatedMinutes: 120, outcome: 'State mastered' },

  // Week 61: CRUD Project - Part 1 (Days 148-154)
  { topic: 'CRUD Project Setup', description: 'Initialize React and Spring Boot', taskType: 'build', estimatedMinutes: 120, outcome: 'Projects ready' },
  { topic: 'Backend API', description: 'Create Employee Management API', taskType: 'build', estimatedMinutes: 180, outcome: 'API complete' },
  { topic: 'Frontend Structure', description: 'React with routing, layouts', taskType: 'build', estimatedMinutes: 150, outcome: 'Frontend scaffolded' },
  { topic: 'List View', description: 'Display employees with pagination', taskType: 'build', estimatedMinutes: 180, outcome: 'List working' },
  { topic: 'Create Form', description: 'Add employee with validation', taskType: 'build', estimatedMinutes: 180, outcome: 'Create working' },
  { topic: 'Edit & Delete', description: 'Update and delete operations', taskType: 'build', estimatedMinutes: 180, outcome: 'Full CRUD working' },
  { topic: 'Week 61 Review', description: 'CRUD Part 1 review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Basic CRUD solid' },

  // Week 62: CRUD Project - Part 2 (Days 155-161)
  { topic: 'Authentication UI', description: 'Login and register pages', taskType: 'build', estimatedMinutes: 180, outcome: 'Auth pages complete' },
  { topic: 'Token Management', description: 'JWT storage, axios interceptors', taskType: 'build', estimatedMinutes: 180, outcome: 'Token handling working' },
  { topic: 'Authorization UI', description: 'Role-based rendering, permissions', taskType: 'build', estimatedMinutes: 150, outcome: 'Authorization in UI' },
  { topic: 'Styling & UX', description: 'Tailwind CSS, responsive, loading states', taskType: 'build', estimatedMinutes: 180, outcome: 'Professional UI' },
  { topic: 'Error Handling', description: 'Error boundaries, toasts, retry', taskType: 'build', estimatedMinutes: 120, outcome: 'Robust errors' },
  { topic: 'Frontend Testing', description: 'Jest, React Testing Library', taskType: 'build', estimatedMinutes: 180, outcome: 'Tests passing' },
  { topic: 'Week 62 Review', description: 'CRUD complete review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Full stack CRUD mastered!' },

  // Week 63: Git & Linux (Days 162-168)
  { topic: 'Git Fundamentals', description: 'init, add, commit, status, log, diff', taskType: 'learn', estimatedMinutes: 120, outcome: 'Git basics mastered' },
  { topic: 'Git Branching', description: 'Branches, merge, rebase, conflicts', taskType: 'learn', estimatedMinutes: 150, outcome: 'Branch workflow' },
  { topic: 'Git Workflows', description: 'Feature branch, pull requests, code review', taskType: 'learn', estimatedMinutes: 120, outcome: 'Team collaboration' },
  { topic: 'GitHub', description: 'Remote repos, push, pull, fork, GitHub Actions intro', taskType: 'learn', estimatedMinutes: 120, outcome: 'GitHub proficient' },
  { topic: 'Linux Basics', description: 'File system, navigation, commands, permissions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Linux fundamentals' },
  { topic: 'Linux Commands', description: 'grep, find, chmod, ssh, pipes', taskType: 'learn', estimatedMinutes: 150, outcome: 'Command line proficient' },
  { topic: 'Week 63 Review', description: 'Git and Linux review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Version control mastered' },

  // Week 64: Docker - Part 1 (Days 169-175)
  { topic: 'Docker Introduction', description: 'Containers vs VMs, Docker architecture', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand containerization' },
  { topic: 'Docker Setup & CLI', description: 'Install Docker, basic commands', taskType: 'learn', estimatedMinutes: 120, outcome: 'Docker ready' },
  { topic: 'Docker Images', description: 'Pull, build, tag, push images', taskType: 'learn', estimatedMinutes: 150, outcome: 'Work with images' },
  { topic: 'Dockerfile', description: 'Write Dockerfiles, multi-stage builds', taskType: 'learn', estimatedMinutes: 180, outcome: 'Create Dockerfiles' },
  { topic: 'Docker Containers', description: 'Container lifecycle, logs, exec, ports', taskType: 'learn', estimatedMinutes: 150, outcome: 'Manage containers' },
  { topic: 'Docker Practice', description: 'Dockerize Spring Boot app', taskType: 'practice', estimatedMinutes: 180, outcome: 'Backend containerized' },
  { topic: 'Week 64 Review', description: 'Docker fundamentals review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Docker basics solid' },

  // Week 65: Docker - Part 2 (Days 176-182)
  { topic: 'Docker Volumes', description: 'Data persistence, volumes, bind mounts', taskType: 'learn', estimatedMinutes: 120, outcome: 'Persist data' },
  { topic: 'Docker Networks', description: 'Container networking, service discovery', taskType: 'learn', estimatedMinutes: 120, outcome: 'Connect containers' },
  { topic: 'Docker Compose', description: 'Multi-container apps, docker-compose.yml', taskType: 'learn', estimatedMinutes: 180, outcome: 'Orchestrate containers' },
  { topic: 'Compose Practice', description: 'React + Spring Boot + MySQL with Compose', taskType: 'practice', estimatedMinutes: 240, outcome: 'Multi-container running' },
  { topic: 'Docker Security', description: 'Security best practices, scanning', taskType: 'learn', estimatedMinutes: 120, outcome: 'Secure containers' },
  { topic: 'Docker Project', description: 'Dockerize CRUD app with Compose', taskType: 'practice', estimatedMinutes: 180, outcome: 'Production Docker' },
  { topic: 'Week 65 Review', description: 'Docker comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Docker mastered' },

  // Week 66: MongoDB (Days 183-189)
  { topic: 'MongoDB Introduction', description: 'NoSQL concepts, document model', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand MongoDB' },
  { topic: 'MongoDB CRUD', description: 'insertOne/Many, find, update, delete, operators', taskType: 'learn', estimatedMinutes: 180, outcome: 'MongoDB CRUD' },
  { topic: 'Aggregation Pipeline', description: '$match, $group, $project, $sort, $limit', taskType: 'learn', estimatedMinutes: 180, outcome: 'Complex aggregations' },
  { topic: 'Spring Data MongoDB', description: 'MongoRepository, document mapping', taskType: 'learn', estimatedMinutes: 180, outcome: 'Integrate MongoDB' },
  { topic: 'MongoDB Practice', description: 'Build product catalog API', taskType: 'practice', estimatedMinutes: 180, outcome: 'MongoDB API working' },
  { topic: 'SQL vs NoSQL', description: 'When to use relational vs document', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right database' },
  { topic: 'Week 66 Review', description: 'MongoDB review', taskType: 'revise', estimatedMinutes: 120, outcome: 'NoSQL mastered' },

  // Week 67: AWS Fundamentals (Days 190-196)
  { topic: 'Cloud & AWS Introduction', description: 'Cloud concepts, IaaS/PaaS/SaaS, AWS overview', taskType: 'learn', estimatedMinutes: 180, outcome: 'Cloud fundamentals' },
  { topic: 'AWS Account & IAM', description: 'Create account, IAM users/roles/policies', taskType: 'learn', estimatedMinutes: 150, outcome: 'AWS configured' },
  { topic: 'EC2 - Compute', description: 'Launch instances, SSH, security groups', taskType: 'learn', estimatedMinutes: 180, outcome: 'Deploy on EC2' },
  { topic: 'S3 - Storage', description: 'S3 buckets, upload/download, static hosting', taskType: 'learn', estimatedMinutes: 180, outcome: 'Store files on S3' },
  { topic: 'RDS - Database', description: 'Create MySQL RDS, connect from EC2', taskType: 'learn', estimatedMinutes: 180, outcome: 'Managed database' },
  { topic: 'Deploy Spring Boot', description: 'Deploy app to EC2, connect to RDS', taskType: 'practice', estimatedMinutes: 240, outcome: 'Backend on AWS' },
  { topic: 'Week 67 Review', description: 'AWS fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Core AWS mastered' },

  // Week 68: AWS Advanced (Days 197-203)
  { topic: 'CloudFront & CDN', description: 'Deploy React to S3, CloudFront, HTTPS', taskType: 'learn', estimatedMinutes: 180, outcome: 'Frontend on CDN' },
  { topic: 'VPC & Networking', description: 'VPC, subnets, route tables, security', taskType: 'learn', estimatedMinutes: 180, outcome: 'AWS networking' },
  { topic: 'Load Balancers', description: 'ALB, target groups, health checks', taskType: 'learn', estimatedMinutes: 150, outcome: 'Load balancing' },
  { topic: 'Lambda & Serverless', description: 'AWS Lambda, API Gateway, serverless', taskType: 'learn', estimatedMinutes: 180, outcome: 'Serverless APIs' },
  { topic: 'CI/CD with GitHub Actions', description: 'Automated deployment to AWS', taskType: 'learn', estimatedMinutes: 240, outcome: 'CI/CD pipeline' },
  { topic: 'ECS & Fargate', description: 'ECR, ECS, deploy containers to AWS', taskType: 'learn', estimatedMinutes: 180, outcome: 'Containers on AWS' },
  { topic: 'Week 68 Review', description: 'AWS advanced review', taskType: 'revise', estimatedMinutes: 120, outcome: 'AWS deployment mastered' },

  // Week 69: System Design Fundamentals (Days 204-210)
  { topic: 'System Design Introduction', description: 'Requirements gathering, constraints, estimations', taskType: 'learn', estimatedMinutes: 180, outcome: 'System design mindset' },
  { topic: 'Scalability Patterns', description: 'Vertical vs horizontal, load balancing, stateless', taskType: 'learn', estimatedMinutes: 180, outcome: 'Design for scale' },
  { topic: 'Caching Strategies', description: 'Cache levels, cache-aside, write-through', taskType: 'learn', estimatedMinutes: 180, outcome: 'Caching patterns' },
  { topic: 'Database Scaling', description: 'Read replicas, sharding, consistent hashing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Scale databases' },
  { topic: 'CAP Theorem', description: 'Consistency, Availability, Partition tolerance', taskType: 'learn', estimatedMinutes: 180, outcome: 'Distributed systems' },
  { topic: 'Design: URL Shortener', description: 'Design TinyURL with requirements, API, schema', taskType: 'practice', estimatedMinutes: 240, outcome: 'Complete design' },
  { topic: 'Week 69 Review', description: 'System design basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Design basics solid' },

  // Week 70: System Design Advanced (Days 211-217)
  { topic: 'Microservices Patterns', description: 'API Gateway, service discovery, circuit breaker', taskType: 'learn', estimatedMinutes: 180, outcome: 'Microservices patterns' },
  { topic: 'Message Queues in Design', description: 'Async communication, event-driven, Kafka use', taskType: 'learn', estimatedMinutes: 150, outcome: 'Design async systems' },
  { topic: 'Design: Twitter Feed', description: 'Design Twitter timeline, fanout, ranking', taskType: 'practice', estimatedMinutes: 240, outcome: 'Twitter design complete' },
  { topic: 'Design: Instagram', description: 'Design Instagram: image storage, feed, sharding', taskType: 'practice', estimatedMinutes: 240, outcome: 'Instagram design complete' },
  { topic: 'Design: Uber', description: 'Design Uber: geospatial indexing, matching', taskType: 'practice', estimatedMinutes: 240, outcome: 'Uber design complete' },
  { topic: 'Production Patterns', description: 'Rate limiting, API versioning, monitoring', taskType: 'learn', estimatedMinutes: 180, outcome: 'Production considerations' },
  { topic: 'Week 70 Review', description: 'Advanced system design review', taskType: 'revise', estimatedMinutes: 120, outcome: 'System design mastered' },

  // Week 71: Microservices Implementation (Days 218-224)
  { topic: 'Microservices Architecture', description: 'Service decomposition, bounded contexts', taskType: 'learn', estimatedMinutes: 150, outcome: 'Design microservices' },
  { topic: 'Service Discovery & Gateway', description: 'Eureka, Spring Cloud Gateway', taskType: 'learn', estimatedMinutes: 180, outcome: 'Service infrastructure' },
  { topic: 'Config Server', description: 'Centralized configuration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Externalize config' },
  { topic: 'Resilience Patterns', description: 'Circuit breaker, fallbacks, retries', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle failures' },
  { topic: 'Distributed Tracing', description: 'Sleuth, Zipkin, correlation IDs', taskType: 'learn', estimatedMinutes: 120, outcome: 'Trace requests' },
  { topic: 'Microservices Practice', description: 'Break app into 3 services', taskType: 'practice', estimatedMinutes: 240, outcome: 'Microservices working' },
  { topic: 'Week 71 Review', description: 'Microservices review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Microservices solid' },

  // Week 72: Microservices Advanced (Days 225-231)
  { topic: 'Service Communication', description: 'REST vs messaging, sync vs async', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose communication' },
  { topic: 'API Documentation', description: 'OpenAPI specification, centralized docs', taskType: 'learn', estimatedMinutes: 90, outcome: 'Document services' },
  { topic: 'Microservices Testing', description: 'Contract testing, integration strategies', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test microservices' },
  { topic: 'Monitoring & Logging', description: 'Centralized logging, metrics, health checks', taskType: 'learn', estimatedMinutes: 150, outcome: 'Observe services' },
  { topic: 'Docker Compose Multi-Service', description: 'Orchestrate microservices', taskType: 'practice', estimatedMinutes: 180, outcome: 'Services containerized' },
  { topic: 'Deployment Strategies', description: 'Blue-green, canary, rolling deployments', taskType: 'learn', estimatedMinutes: 120, outcome: 'Deploy safely' },
  { topic: 'Week 72 Review', description: 'Advanced microservices review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Microservices mastered' },

  // Week 73: AWS Deployment Project (Days 232-238)
  { topic: 'AWS Project Planning', description: 'Plan deployment architecture', taskType: 'build', estimatedMinutes: 150, outcome: 'Architecture planned' },
  { topic: 'AWS Backend Deployment', description: 'Deploy Spring Boot to EC2/ECS', taskType: 'build', estimatedMinutes: 240, outcome: 'Backend on AWS' },
  { topic: 'AWS Frontend Deployment', description: 'Deploy React to S3 + CloudFront', taskType: 'build', estimatedMinutes: 180, outcome: 'Frontend on AWS' },
  { topic: 'AWS Database Setup', description: 'Configure RDS with backups', taskType: 'build', estimatedMinutes: 150, outcome: 'Database on AWS' },
  { topic: 'AWS Load Balancer', description: 'Configure ALB, health checks', taskType: 'build', estimatedMinutes: 150, outcome: 'Load balancer working' },
  { topic: 'CI/CD Pipeline', description: 'GitHub Actions to AWS', taskType: 'build', estimatedMinutes: 240, outcome: 'Automated deployment' },
  { topic: 'Week 73 Review', description: 'AWS deployment review', taskType: 'revise', estimatedMinutes: 120, outcome: 'AWS production ready' },

  // Week 74: Security & Optimization (Days 239-245)
  { topic: 'HTTPS Configuration', description: 'SSL/TLS certificates, Route 53', taskType: 'build', estimatedMinutes: 180, outcome: 'HTTPS enabled' },
  { topic: 'Secrets Management', description: 'AWS Secrets Manager, environment variables', taskType: 'build', estimatedMinutes: 150, outcome: 'Secrets secured' },
  { topic: 'Security Headers', description: 'CORS, CSP, security headers', taskType: 'build', estimatedMinutes: 120, outcome: 'Security hardened' },
  { topic: 'Performance Testing', description: 'Load testing, JMeter, optimization', taskType: 'practice', estimatedMinutes: 180, outcome: 'Performance validated' },
  { topic: 'Monitoring Setup', description: 'CloudWatch, logs, alarms, dashboards', taskType: 'build', estimatedMinutes: 180, outcome: 'Monitoring active' },
  { topic: 'Cost Optimization', description: 'AWS cost management, optimization', taskType: 'learn', estimatedMinutes: 120, outcome: 'Costs optimized' },
  { topic: 'Week 74 Review', description: 'Security and optimization review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Production secure' },

  // Week 75: Portfolio & Documentation (Days 246-252)
  { topic: 'Architecture Documentation', description: 'Architecture diagrams, system docs', taskType: 'build', estimatedMinutes: 180, outcome: 'Architecture documented' },
  { topic: 'API Documentation', description: 'Complete API documentation', taskType: 'build', estimatedMinutes: 150, outcome: 'APIs documented' },
  { topic: 'README Creation', description: 'Comprehensive README files', taskType: 'build', estimatedMinutes: 150, outcome: 'READMEs complete' },
  { topic: 'Deployment Guide', description: 'Step-by-step deployment guide', taskType: 'build', estimatedMinutes: 120, outcome: 'Deployment documented' },
  { topic: 'Demo Preparation', description: 'Create demo videos, screenshots', taskType: 'build', estimatedMinutes: 180, outcome: 'Demo ready' },
  { topic: 'Portfolio Polish', description: 'GitHub profile, project showcase', taskType: 'build', estimatedMinutes: 180, outcome: 'Portfolio impressive' },
  { topic: 'Phase 6 Complete!', description: 'Full Stack + AWS + System Design MASTERED!', taskType: 'revise', estimatedMinutes: 120, outcome: 'CLOUD-NATIVE DEVELOPER!' },

];