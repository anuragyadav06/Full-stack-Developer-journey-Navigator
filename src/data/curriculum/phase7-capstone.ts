import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';
export const phase7Capstone: CurriculumTask[] = [

  // Week 73: Capstone Planning & User Service
  { topic: 'Capstone: Requirements', description: 'Define e-commerce platform requirements, features', taskType: 'build', estimatedMinutes: 180, outcome: 'Requirements documented' },
  { topic: 'Capstone: Architecture Design', description: 'Design microservices architecture, database schema', taskType: 'build', estimatedMinutes: 180, outcome: 'Architecture finalized' },
  { topic: 'Capstone: Project Setup', description: 'Set up microservices, configs, Docker base', taskType: 'build', estimatedMinutes: 180, outcome: 'Projects initialized' },
  { topic: 'Capstone: User Service', description: 'Build registration, authentication, roles', taskType: 'build', estimatedMinutes: 180, outcome: 'User service complete' },
  { topic: 'Capstone: User Service Tests', description: 'Unit and integration tests', taskType: 'build', estimatedMinutes: 150, outcome: 'User service tested' },
  { topic: 'Capstone: Gateway & Discovery Setup', description: 'Configure API Gateway + Eureka', taskType: 'build', estimatedMinutes: 150, outcome: 'Gateway working' },
  { topic: 'Week 73 Review', description: 'Architecture and user module review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Week validated' },

  // Week 74: Product & Order Services
  { topic: 'Capstone: Product Service', description: 'Build product catalog service', taskType: 'build', estimatedMinutes: 180, outcome: 'Product service built' },
  { topic: 'Capstone: Product CRUD', description: 'Complete CRUD, filtering, search', taskType: 'build', estimatedMinutes: 180, outcome: 'Product CRUD complete' },
  { topic: 'Capstone: Product Tests', description: 'Write product service tests', taskType: 'build', estimatedMinutes: 150, outcome: 'Product tested' },
  { topic: 'Capstone: Order Service', description: 'Build order management module', taskType: 'build', estimatedMinutes: 180, outcome: 'Order service complete' },
  { topic: 'Capstone: Order Processing', description: 'Status updates, inventory communication', taskType: 'build', estimatedMinutes: 180, outcome: 'Orders processing' },
  { topic: 'Capstone: Order Tests', description: 'Test order service', taskType: 'build', estimatedMinutes: 150, outcome: 'Order tested' },
  { topic: 'Week 74 Review', description: 'Backend services review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Backend validated' },

  // Week 75: Frontend Integration
  { topic: 'Capstone: React Setup', description: 'Initialize frontend structure', taskType: 'build', estimatedMinutes: 120, outcome: 'Frontend ready' },
  { topic: 'Capstone: Home & Listing', description: 'Landing page + product grid', taskType: 'build', estimatedMinutes: 180, outcome: 'Listing working' },
  { topic: 'Capstone: Product Detail Page', description: 'Detail page with API integration', taskType: 'build', estimatedMinutes: 150, outcome: 'Details working' },
  { topic: 'Capstone: Shopping Cart', description: 'Cart logic with global state', taskType: 'build', estimatedMinutes: 180, outcome: 'Cart complete' },
  { topic: 'Capstone: Checkout Flow', description: 'Checkout UI + order creation', taskType: 'build', estimatedMinutes: 180, outcome: 'Checkout working' },
  { topic: 'Capstone: Auth Integration UI', description: 'Login/register + JWT handling', taskType: 'build', estimatedMinutes: 150, outcome: 'Auth integrated' },
  { topic: 'Week 75 Review', description: 'Frontend integration review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Frontend validated' },

  // Week 76: Admin, Testing & Polish
  { topic: 'Capstone: Admin Panel', description: 'Admin product & order management', taskType: 'build', estimatedMinutes: 180, outcome: 'Admin ready' },
  { topic: 'Capstone: Styling & UX Polish', description: 'Tailwind polish, responsiveness', taskType: 'build', estimatedMinutes: 180, outcome: 'UI polished' },
  { topic: 'Capstone: Frontend Tests', description: 'Component and integration tests', taskType: 'build', estimatedMinutes: 150, outcome: 'Frontend tested' },
  { topic: 'Capstone: Docker Compose', description: 'Full stack dockerized', taskType: 'build', estimatedMinutes: 180, outcome: 'Compose complete' },
  { topic: 'Capstone: Performance Optimization', description: 'Optimize endpoints and caching', taskType: 'build', estimatedMinutes: 150, outcome: 'Performance improved' },
  { topic: 'Capstone: Security Audit', description: 'Fix vulnerabilities and validate auth', taskType: 'build', estimatedMinutes: 150, outcome: 'Security hardened' },
  { topic: 'Week 76 Review', description: 'Full integration review', taskType: 'revise', estimatedMinutes: 120, outcome: 'System stable' },

  // Week 77: Documentation & Deployment
  { topic: 'Capstone: API Documentation', description: 'Swagger/OpenAPI completion', taskType: 'build', estimatedMinutes: 150, outcome: 'APIs documented' },
  { topic: 'Capstone: README & Architecture Docs', description: 'Write documentation', taskType: 'build', estimatedMinutes: 150, outcome: 'Docs complete' },
  { topic: 'Capstone: Deployment to AWS', description: 'Deploy backend + frontend', taskType: 'build', estimatedMinutes: 240, outcome: 'Live project deployed' },
  { topic: 'Capstone: Monitoring Setup', description: 'Logging + metrics setup', taskType: 'build', estimatedMinutes: 150, outcome: 'Monitoring active' },
  { topic: 'Capstone: Final E2E Testing', description: 'Complete end-to-end tests', taskType: 'build', estimatedMinutes: 180, outcome: 'System verified' },
  { topic: 'Capstone Demo Preparation', description: 'Prepare real-world demo scenarios', taskType: 'build', estimatedMinutes: 120, outcome: 'Demo ready' },
  { topic: 'Week 77 Review', description: 'Deployment validation', taskType: 'revise', estimatedMinutes: 120, outcome: 'Production ready' },

  // Week 78: DSA Interview Prep
  { topic: 'DSA Review: Arrays & Strings', description: 'Solve 8 medium problems', taskType: 'practice', estimatedMinutes: 240, outcome: 'Core patterns revised' },
  { topic: 'DSA Review: Linked Lists & Stack', description: 'Solve 6 medium problems', taskType: 'practice', estimatedMinutes: 180, outcome: 'Linked list mastery' },
  { topic: 'DSA Review: Trees', description: 'Solve 6 medium problems', taskType: 'practice', estimatedMinutes: 240, outcome: 'Tree problems solid' },
  { topic: 'DSA Review: Graphs', description: 'BFS, DFS, shortest path problems', taskType: 'practice', estimatedMinutes: 240, outcome: 'Graph confidence built' },
  { topic: 'DSA Review: Dynamic Programming', description: 'Solve 6 DP problems', taskType: 'practice', estimatedMinutes: 240, outcome: 'DP strengthened' },
  { topic: 'Mock Interview: DSA', description: 'Timed coding round simulation', taskType: 'practice', estimatedMinutes: 120, outcome: 'Mock completed' },
  { topic: 'Week 78 Review', description: 'DSA readiness assessment', taskType: 'revise', estimatedMinutes: 120, outcome: 'DSA strong' },

  // Week 79: Backend & Spring Interviews
  { topic: 'Java Interview Questions', description: 'Top 50 Java questions', taskType: 'revise', estimatedMinutes: 180, outcome: 'Java sharp' },
  { topic: 'Spring Boot Interview Prep', description: 'Core + advanced Spring questions', taskType: 'revise', estimatedMinutes: 180, outcome: 'Spring confident' },
  { topic: 'Database Interview Prep', description: 'SQL, indexing, transactions, optimization', taskType: 'revise', estimatedMinutes: 180, outcome: 'Database strong' },
  { topic: 'Microservices & Cloud Questions', description: 'Scalability, AWS, caching, queues', taskType: 'revise', estimatedMinutes: 180, outcome: 'Architecture clear' },
  { topic: 'System Design Mock', description: 'Design a scalable service in 45 mins', taskType: 'practice', estimatedMinutes: 180, outcome: 'Design mock done' },
  { topic: 'Behavioral Interview Prep', description: 'STAR method + real stories', taskType: 'learn', estimatedMinutes: 120, outcome: 'Behavioral ready' },
  { topic: 'Week 79 Review', description: 'Backend interview readiness check', taskType: 'revise', estimatedMinutes: 120, outcome: 'Backend ready' },

  // Week 80: Resume & Portfolio
  { topic: 'Resume Optimization', description: 'Rewrite resume for impact', taskType: 'build', estimatedMinutes: 180, outcome: 'Resume strong' },
  { topic: 'LinkedIn Optimization', description: 'Optimize profile and headline', taskType: 'build', estimatedMinutes: 120, outcome: 'LinkedIn optimized' },
  { topic: 'Portfolio Website Update', description: 'Showcase capstone and projects', taskType: 'build', estimatedMinutes: 180, outcome: 'Portfolio impressive' },
  { topic: 'GitHub Cleanup', description: 'Clean repos, write README, pin projects', taskType: 'build', estimatedMinutes: 120, outcome: 'GitHub polished' },
  { topic: 'Apply to 10 Companies', description: 'Target quality roles', taskType: 'practice', estimatedMinutes: 180, outcome: 'Applications sent' },
  { topic: 'Networking Strategy', description: 'Reach out to recruiters and devs', taskType: 'practice', estimatedMinutes: 120, outcome: 'Network expanded' },
  { topic: 'Week 80 Review', description: 'Career strategy evaluation', taskType: 'revise', estimatedMinutes: 120, outcome: 'Market ready' },

  // Week 81: Final Confidence Build
  { topic: 'Full Mock Interview Day', description: 'DSA + System Design + Behavioral', taskType: 'practice', estimatedMinutes: 300, outcome: 'Interview simulation done' },
  { topic: 'Weak Area Reinforcement', description: 'Revise weakest topic deeply', taskType: 'practice', estimatedMinutes: 240, outcome: 'Gaps reduced' },
  { topic: 'Final DSA Practice', description: 'Solve 5 random medium problems', taskType: 'practice', estimatedMinutes: 180, outcome: 'Confidence high' },
  { topic: 'Capstone Presentation Practice', description: 'Practice explaining architecture', taskType: 'practice', estimatedMinutes: 150, outcome: 'Storytelling clear' },
  { topic: 'Mental Prep & Strategy', description: 'Interview mindset preparation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Mentally prepared' },
  { topic: 'Journey Reflection', description: 'Review full learning path', taskType: 'revise', estimatedMinutes: 120, outcome: 'Self-awareness gained' },
  { topic: 'JOURNEY COMPLETE! 🎉', description: 'You are now a production-ready Java Full Stack Engineer!', taskType: 'revise', estimatedMinutes: 60, outcome: 'Engineer achieved!' },

];