// Phase 7: Capstone Project & Interview Prep (Weeks 67-75) - Apr 25 - Jun 30, 2027

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase7Capstone: CurriculumTask[] = [
  // Week 67-70: Capstone Project (E-Commerce Platform)
  { topic: 'Capstone: Requirements', description: 'Define e-commerce platform requirements, features', taskType: 'build', estimatedMinutes: 180, outcome: 'Requirements documented' },
  { topic: 'Capstone: Architecture Design', description: 'Design microservices architecture, database schema', taskType: 'build', estimatedMinutes: 180, outcome: 'Architecture finalized' },
  { topic: 'Capstone: Project Setup', description: 'Set up all microservices, configs, Docker', taskType: 'build', estimatedMinutes: 180, outcome: 'Projects initialized' },
  { topic: 'Capstone: User Service', description: 'Build user registration, authentication', taskType: 'build', estimatedMinutes: 180, outcome: 'User service complete' },
  { topic: 'Capstone: User Service Tests', description: 'Unit and integration tests for user service', taskType: 'build', estimatedMinutes: 150, outcome: 'User service tested' },
  { topic: 'Capstone: Product Service', description: 'Build product catalog service', taskType: 'build', estimatedMinutes: 180, outcome: 'Product service started' },
  { topic: 'Capstone: Week 67 Review', description: 'Review progress, address blockers', taskType: 'revise', estimatedMinutes: 90, outcome: 'Week reviewed' },

  { topic: 'Capstone: Product CRUD', description: 'Complete product CRUD operations', taskType: 'build', estimatedMinutes: 180, outcome: 'Product CRUD complete' },
  { topic: 'Capstone: Product Search', description: 'Add search and filtering', taskType: 'build', estimatedMinutes: 180, outcome: 'Search working' },
  { topic: 'Capstone: Product Tests', description: 'Test product service', taskType: 'build', estimatedMinutes: 150, outcome: 'Product service tested' },
  { topic: 'Capstone: Order Service', description: 'Build order management service', taskType: 'build', estimatedMinutes: 180, outcome: 'Order service started' },
  { topic: 'Capstone: Order Processing', description: 'Order creation, status updates', taskType: 'build', estimatedMinutes: 180, outcome: 'Orders processing' },
  { topic: 'Capstone: Order Tests', description: 'Test order service', taskType: 'build', estimatedMinutes: 150, outcome: 'Order service tested' },
  { topic: 'Capstone: Week 68 Review', description: 'Review backend services', taskType: 'revise', estimatedMinutes: 90, outcome: 'Backend reviewed' },

  { topic: 'Capstone: API Gateway', description: 'Set up Spring Cloud Gateway', taskType: 'build', estimatedMinutes: 180, outcome: 'Gateway configured' },
  { topic: 'Capstone: Service Discovery', description: 'Configure Eureka for services', taskType: 'build', estimatedMinutes: 150, outcome: 'Discovery working' },
  { topic: 'Capstone: React Setup', description: 'Initialize React frontend project', taskType: 'build', estimatedMinutes: 120, outcome: 'Frontend initialized' },
  { topic: 'Capstone: Home Page', description: 'Build landing page with products', taskType: 'build', estimatedMinutes: 180, outcome: 'Home page complete' },
  { topic: 'Capstone: Product Listing', description: 'Product grid with filters', taskType: 'build', estimatedMinutes: 180, outcome: 'Product listing done' },
  { topic: 'Capstone: Product Detail', description: 'Product detail page', taskType: 'build', estimatedMinutes: 150, outcome: 'Detail page complete' },
  { topic: 'Capstone: Week 69 Review', description: 'Review frontend progress', taskType: 'revise', estimatedMinutes: 90, outcome: 'Frontend reviewed' },

  { topic: 'Capstone: Shopping Cart', description: 'Cart functionality with context', taskType: 'build', estimatedMinutes: 180, outcome: 'Cart working' },
  { topic: 'Capstone: Checkout Flow', description: 'Checkout process UI', taskType: 'build', estimatedMinutes: 180, outcome: 'Checkout complete' },
  { topic: 'Capstone: User Dashboard', description: 'Order history, profile', taskType: 'build', estimatedMinutes: 150, outcome: 'Dashboard done' },
  { topic: 'Capstone: Admin Panel', description: 'Basic admin functionality', taskType: 'build', estimatedMinutes: 180, outcome: 'Admin panel started' },
  { topic: 'Capstone: Styling', description: 'Polish UI with Tailwind', taskType: 'build', estimatedMinutes: 180, outcome: 'UI polished' },
  { topic: 'Capstone: Frontend Tests', description: 'Component tests', taskType: 'build', estimatedMinutes: 150, outcome: 'Frontend tested' },
  { topic: 'Capstone: Week 70 Review', description: 'Full integration review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Integration reviewed' },

  // Week 71-72: Capstone Polish & Documentation
  { topic: 'Capstone: Docker Compose', description: 'Complete Docker Compose setup', taskType: 'build', estimatedMinutes: 180, outcome: 'Compose working' },
  { topic: 'Capstone: Bug Fixes', description: 'Fix identified bugs', taskType: 'build', estimatedMinutes: 180, outcome: 'Bugs fixed' },
  { topic: 'Capstone: Performance', description: 'Optimize slow endpoints', taskType: 'build', estimatedMinutes: 150, outcome: 'Performance improved' },
  { topic: 'Capstone: Error Handling', description: 'Improve error handling throughout', taskType: 'build', estimatedMinutes: 150, outcome: 'Errors handled' },
  { topic: 'Capstone: Logging', description: 'Add comprehensive logging', taskType: 'build', estimatedMinutes: 120, outcome: 'Logging complete' },
  { topic: 'Capstone: Security Review', description: 'Security audit and fixes', taskType: 'build', estimatedMinutes: 180, outcome: 'Security improved' },
  { topic: 'Capstone: Week 71 Review', description: 'Quality review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Quality assessed' },

  { topic: 'Capstone: API Documentation', description: 'Complete API docs with Swagger', taskType: 'build', estimatedMinutes: 150, outcome: 'API documented' },
  { topic: 'Capstone: README', description: 'Write comprehensive README', taskType: 'build', estimatedMinutes: 120, outcome: 'README complete' },
  { topic: 'Capstone: Architecture Docs', description: 'Document architecture decisions', taskType: 'build', estimatedMinutes: 120, outcome: 'Architecture documented' },
  { topic: 'Capstone: Demo Prep', description: 'Prepare demo scenarios', taskType: 'build', estimatedMinutes: 120, outcome: 'Demo ready' },
  { topic: 'Capstone: Final Testing', description: 'End-to-end testing', taskType: 'build', estimatedMinutes: 180, outcome: 'E2E tests passing' },
  { topic: 'Capstone Complete!', description: 'Capstone project finished', taskType: 'revise', estimatedMinutes: 120, outcome: 'Capstone delivered' },
  { topic: 'Capstone Retrospective', description: 'What went well, lessons learned', taskType: 'revise', estimatedMinutes: 90, outcome: 'Lessons documented' },

  // Week 73-75: Interview Preparation & Final Review
  { topic: 'DSA Review: Arrays & Strings', description: 'Solve 5 medium problems each', taskType: 'practice', estimatedMinutes: 180, outcome: '10 problems solved' },
  { topic: 'DSA Review: Linked Lists', description: 'Solve 5 medium problems', taskType: 'practice', estimatedMinutes: 150, outcome: '5 problems solved' },
  { topic: 'DSA Review: Trees & Graphs', description: 'Solve 5 medium problems each', taskType: 'practice', estimatedMinutes: 180, outcome: '10 problems solved' },
  { topic: 'DSA Review: DP', description: 'Solve 5 medium problems', taskType: 'practice', estimatedMinutes: 180, outcome: '5 problems solved' },
  { topic: 'Mock Interview: DSA', description: 'Timed coding interview simulation', taskType: 'practice', estimatedMinutes: 120, outcome: 'Mock completed' },
  { topic: 'Java Interview Questions', description: 'Review top 50 Java questions', taskType: 'revise', estimatedMinutes: 180, outcome: 'Java reviewed' },
  { topic: 'Week 73 Review', description: 'DSA interview readiness check', taskType: 'revise', estimatedMinutes: 90, outcome: 'DSA ready' },

  { topic: 'Spring Boot Interview Prep', description: 'Top Spring Boot questions', taskType: 'revise', estimatedMinutes: 180, outcome: 'Spring reviewed' },
  { topic: 'System Design Basics', description: 'Load balancing, caching, databases', taskType: 'learn', estimatedMinutes: 180, outcome: 'System design intro' },
  { topic: 'System Design Practice', description: 'Design URL shortener', taskType: 'practice', estimatedMinutes: 180, outcome: 'Design completed' },
  { topic: 'Behavioral Interview Prep', description: 'STAR method, common questions', taskType: 'learn', estimatedMinutes: 120, outcome: 'Behavioral prep done' },
  { topic: 'Mock Interview: Technical', description: 'Full technical interview simulation', taskType: 'practice', estimatedMinutes: 180, outcome: 'Mock completed' },
  { topic: 'Resume & Portfolio', description: 'Update resume, portfolio site', taskType: 'build', estimatedMinutes: 180, outcome: 'Resume updated' },
  { topic: 'Week 74 Review', description: 'Interview readiness assessment', taskType: 'revise', estimatedMinutes: 90, outcome: 'Interview ready' },

  { topic: 'Full Stack Review I', description: 'Frontend + API integration review', taskType: 'revise', estimatedMinutes: 180, outcome: 'Full stack reviewed' },
  { topic: 'Full Stack Review II', description: 'Backend + database review', taskType: 'revise', estimatedMinutes: 180, outcome: 'Backend reviewed' },
  { topic: 'DevOps Review', description: 'Docker, Git, Linux review', taskType: 'revise', estimatedMinutes: 120, outcome: 'DevOps reviewed' },
  { topic: 'Mock Interview: Full', description: 'Complete mock interview day', taskType: 'practice', estimatedMinutes: 240, outcome: 'Full mock done' },
  { topic: 'Final DSA Practice', description: 'Solve 5 random problems', taskType: 'practice', estimatedMinutes: 180, outcome: 'Problems solved' },
  { topic: 'Journey Reflection', description: 'Review entire learning journey', taskType: 'revise', estimatedMinutes: 120, outcome: 'Journey reflected' },
  { topic: 'JOURNEY COMPLETE! 🎉', description: 'You are now a Java Full Stack Developer!', taskType: 'revise', estimatedMinutes: 60, outcome: 'Full Stack Developer achieved!' },
];
