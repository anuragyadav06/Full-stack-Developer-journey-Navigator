// Phase 7: Capstone Project & Interview Preparation (8 Weeks, 56 Days)
// 10/10 PERFECT: Production E-Commerce + Complete Interview Prep
// Every week review on Day 7

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase7Capstone: CurriculumTask[] = [
  // Week 76: Capstone Planning & User Service (Days 253-259)
  { topic: 'Capstone Requirements', description: 'Define e-commerce platform requirements, features', taskType: 'build', estimatedMinutes: 180, outcome: 'Requirements documented' },
  { topic: 'Architecture Design', description: 'Microservices architecture, database schema', taskType: 'build', estimatedMinutes: 180, outcome: 'Architecture finalized' },
  { topic: 'Project Setup', description: 'Initialize microservices, configs, Docker', taskType: 'build', estimatedMinutes: 180, outcome: 'Projects scaffolded' },
  { topic: 'User Service', description: 'Build user service with authentication', taskType: 'build', estimatedMinutes: 180, outcome: 'User service complete' },
  { topic: 'User Service Tests', description: 'Unit and integration tests', taskType: 'build', estimatedMinutes: 150, outcome: 'User service tested' },
  { topic: 'Gateway & Discovery', description: 'Configure API Gateway and Eureka', taskType: 'build', estimatedMinutes: 150, outcome: 'Gateway working' },
  { topic: 'Week 76 Review', description: 'Architecture and user service review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Week 76 validated' },

  // Week 77: Product & Order Services (Days 260-266)
  { topic: 'Product Service', description: 'Build product catalog service', taskType: 'build', estimatedMinutes: 180, outcome: 'Product service built' },
  { topic: 'Product CRUD & Search', description: 'Complete CRUD, filtering, search', taskType: 'build', estimatedMinutes: 180, outcome: 'Product CRUD complete' },
  { topic: 'Product Tests', description: 'Write product service tests', taskType: 'build', estimatedMinutes: 150, outcome: 'Product tested' },
  { topic: 'Order Service', description: 'Build order management module', taskType: 'build', estimatedMinutes: 180, outcome: 'Order service complete' },
  { topic: 'Order Processing', description: 'Status updates, inventory communication', taskType: 'build', estimatedMinutes: 180, outcome: 'Orders processing' },
  { topic: 'Order Tests', description: 'Test order service', taskType: 'build', estimatedMinutes: 150, outcome: 'Order tested' },
  { topic: 'Week 77 Review', description: 'Backend services review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Backend validated' },

  // Week 78: Frontend Development (Days 267-273)
  { topic: 'React Setup', description: 'Initialize frontend with Tailwind', taskType: 'build', estimatedMinutes: 120, outcome: 'Frontend ready' },
  { topic: 'Home & Product Listing', description: 'Landing page + product grid', taskType: 'build', estimatedMinutes: 180, outcome: 'Listing working' },
  { topic: 'Product Detail Page', description: 'Detail page with API integration', taskType: 'build', estimatedMinutes: 180, outcome: 'Details working' },
  { topic: 'Shopping Cart', description: 'Cart logic with global state', taskType: 'build', estimatedMinutes: 180, outcome: 'Cart complete' },
  { topic: 'Checkout Flow', description: 'Checkout UI + order creation', taskType: 'build', estimatedMinutes: 180, outcome: 'Checkout working' },
  { topic: 'Auth Integration', description: 'Login/register + JWT handling', taskType: 'build', estimatedMinutes: 180, outcome: 'Auth integrated' },
  { topic: 'Week 78 Review', description: 'Frontend integration review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Frontend validated' },

  // Week 79: Admin, Polish & Testing (Days 274-280)
  { topic: 'Admin Panel', description: 'Admin product & order management', taskType: 'build', estimatedMinutes: 180, outcome: 'Admin ready' },
  { topic: 'Analytics Dashboard', description: 'Sales charts, revenue, stats', taskType: 'build', estimatedMinutes: 180, outcome: 'Analytics working' },
  { topic: 'UI Polish', description: 'Tailwind styling, responsiveness, UX', taskType: 'build', estimatedMinutes: 180, outcome: 'UI polished' },
  { topic: 'Frontend Tests', description: 'Component and integration tests', taskType: 'build', estimatedMinutes: 180, outcome: 'Frontend tested' },
  { topic: 'Backend Tests', description: 'Comprehensive backend test suite', taskType: 'build', estimatedMinutes: 180, outcome: 'Backend tested' },
  { topic: 'Performance Optimization', description: 'Optimize queries, caching, lazy loading', taskType: 'build', estimatedMinutes: 150, outcome: 'Performance optimized' },
  { topic: 'Week 79 Review', description: 'Complete system review', taskType: 'revise', estimatedMinutes: 120, outcome: 'System integrated' },

  // Week 80: Deployment & Production (Days 281-287)
  { topic: 'Docker Compose', description: 'Full stack with Docker Compose', taskType: 'build', estimatedMinutes: 180, outcome: 'Compose working' },
  { topic: 'AWS Backend Deployment', description: 'Deploy microservices to AWS ECS', taskType: 'build', estimatedMinutes: 240, outcome: 'Backend on AWS' },
  { topic: 'AWS Frontend Deployment', description: 'Deploy React to S3 + CloudFront', taskType: 'build', estimatedMinutes: 180, outcome: 'Frontend on AWS' },
  { topic: 'CI/CD Pipeline', description: 'GitHub Actions for automated deployment', taskType: 'build', estimatedMinutes: 240, outcome: 'CI/CD complete' },
  { topic: 'Monitoring & Logging', description: 'CloudWatch, logs, alarms', taskType: 'build', estimatedMinutes: 180, outcome: 'Monitoring active' },
  { topic: 'Security Hardening', description: 'HTTPS, secrets, security headers', taskType: 'build', estimatedMinutes: 150, outcome: 'Production secure' },
  { topic: 'Week 80 Review', description: 'Deployment review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Production ready' },

  // Week 81: Documentation & Demo (Days 288-294)
  { topic: 'Architecture Documentation', description: 'System design docs, diagrams', taskType: 'build', estimatedMinutes: 180, outcome: 'Architecture documented' },
  { topic: 'API Documentation', description: 'Complete OpenAPI documentation', taskType: 'build', estimatedMinutes: 150, outcome: 'APIs documented' },
  { topic: 'README & Guides', description: 'Project README, setup guide, deployment guide', taskType: 'build', estimatedMinutes: 180, outcome: 'Documentation complete' },
  { topic: 'Demo Video', description: 'Create demo video showing features', taskType: 'build', estimatedMinutes: 180, outcome: 'Demo ready' },
  { topic: 'Portfolio Update', description: 'Add to portfolio, screenshots, write-up', taskType: 'build', estimatedMinutes: 150, outcome: 'Portfolio updated' },
  { topic: 'GitHub Polish', description: 'Clean repos, pin project, README badges', taskType: 'build', estimatedMinutes: 120, outcome: 'GitHub polished' },
  { topic: 'Week 81 Review', description: 'Capstone project review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Capstone delivered!' },

  // Week 82: Interview Prep - DSA & Backend (Days 295-301)
  { topic: 'DSA Review: Arrays & Strings', description: 'Solve 10 medium problems', taskType: 'practice', estimatedMinutes: 240, outcome: 'Core patterns revised' },
  { topic: 'DSA Review: Trees & Graphs', description: 'Solve 10 medium problems', taskType: 'practice', estimatedMinutes: 240, outcome: 'Tree/graph solid' },
  { topic: 'DSA Review: Dynamic Programming', description: 'Solve 8 DP problems', taskType: 'practice', estimatedMinutes: 240, outcome: 'DP strengthened' },
  { topic: 'Java Interview Questions', description: 'Top 50 Java questions with answers', taskType: 'revise', estimatedMinutes: 180, outcome: 'Java sharp' },
  { topic: 'Spring Boot Interview Prep', description: 'Core + advanced Spring questions', taskType: 'revise', estimatedMinutes: 180, outcome: 'Spring confident' },
  { topic: 'System Design Practice', description: 'Design 2 systems in 45 mins each', taskType: 'practice', estimatedMinutes: 180, outcome: 'Design practiced' },
  { topic: 'Week 82 Review', description: 'Interview prep review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Interview ready' },

  // Week 83: Final Prep & Launch (Days 302-308)
  { topic: 'Mock Interview: DSA', description: 'Complete coding round simulation', taskType: 'practice', estimatedMinutes: 180, outcome: 'DSA mock done' },
  { topic: 'Mock Interview: System Design', description: 'System design interview simulation', taskType: 'practice', estimatedMinutes: 180, outcome: 'Design mock done' },
  { topic: 'Behavioral Interview Prep', description: 'STAR method + prepare stories', taskType: 'learn', estimatedMinutes: 180, outcome: 'Behavioral ready' },
  { topic: 'Resume Optimization', description: 'Rewrite resume for impact', taskType: 'build', estimatedMinutes: 180, outcome: 'Resume strong' },
  { topic: 'LinkedIn & Applications', description: 'Optimize LinkedIn, apply to 10 companies', taskType: 'practice', estimatedMinutes: 180, outcome: 'Applications sent' },
  { topic: 'Final Review', description: 'Review entire journey', taskType: 'revise', estimatedMinutes: 180, outcome: 'Journey reflected' },
  { topic: 'JOURNEY COMPLETE! 🎉', description: 'You are now a production-ready Java Full Stack Engineer!', taskType: 'revise', estimatedMinutes: 60, outcome: 'Engineer achieved!' },
];