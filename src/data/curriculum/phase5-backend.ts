// Phase 5: Backend Development - Spring Boot to Microservices (19 Weeks, 133 Days)
// 10/10 PERFECT: Includes Redis, Kafka, Advanced Testing, Microservices
// Every week review on Day 7

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase5Backend: CurriculumTask[] = [
  // Week 40: Spring Core (Days 1-7)
  { topic: 'Spring Framework Introduction', description: 'IoC, DI, Spring ecosystem overview', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand Spring concepts' },
  { topic: 'Dependency Injection', description: 'Constructor, setter, field injection, @Autowired', taskType: 'learn', estimatedMinutes: 150, outcome: 'Apply DI patterns' },
  { topic: 'Spring Beans & Lifecycle', description: 'Bean lifecycle, scopes, @Component, @Bean', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage Spring beans' },
  { topic: 'Spring Configuration', description: '@Configuration, @Value, property files, profiles', taskType: 'learn', estimatedMinutes: 120, outcome: 'Configure Spring apps' },
  { topic: 'Spring AOP', description: 'Aspect-Oriented Programming, cross-cutting concerns', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use AOP patterns' },
  { topic: 'Spring Practice', description: 'Build Spring application with DI and AOP', taskType: 'practice', estimatedMinutes: 180, outcome: 'Spring app running' },
  { topic: 'Week 40 Review', description: 'Spring core concepts review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Spring fundamentals solid' },

  // Week 41: Spring Boot Basics (Days 8-14)
  { topic: 'Spring Boot Introduction', description: 'Spring Boot advantages, starters, auto-configuration', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand Spring Boot' },
  { topic: 'Spring Boot Project Setup', description: 'Spring Initializr, project structure, running apps', taskType: 'learn', estimatedMinutes: 90, outcome: 'Boot project running' },
  { topic: 'Application Properties', description: 'application.properties/yml, externalized config, profiles', taskType: 'learn', estimatedMinutes: 120, outcome: 'Configure Boot apps' },
  { topic: 'Logging in Spring Boot', description: 'SLF4J, Logback, log levels, custom patterns', taskType: 'learn', estimatedMinutes: 90, outcome: 'Implement logging' },
  { topic: 'Spring Boot DevTools', description: 'Live reload, automatic restart, development tools', taskType: 'learn', estimatedMinutes: 90, outcome: 'Use dev tools' },
  { topic: 'Boot Practice', description: 'Create configured Boot application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Boot app working' },
  { topic: 'Week 41 Review', description: 'Spring Boot basics review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Boot basics solid' },

  // Week 42: REST API Fundamentals (Days 15-21)
  { topic: 'REST Principles', description: 'REST architecture, resources, HTTP methods, statelessness', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand REST design' },
  { topic: '@RestController Basics', description: 'Controller annotations, @RequestMapping, return types', taskType: 'learn', estimatedMinutes: 120, outcome: 'Create REST controllers' },
  { topic: 'Request Mappings', description: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping', taskType: 'learn', estimatedMinutes: 120, outcome: 'Map HTTP methods' },
  { topic: 'Request Parameters', description: '@PathVariable, @RequestParam, @RequestBody, @RequestHeader', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle request data' },
  { topic: 'Response Handling', description: 'ResponseEntity, HTTP status codes, custom responses', taskType: 'learn', estimatedMinutes: 120, outcome: 'Craft API responses' },
  { topic: 'REST Practice', description: 'Build complete CRUD API', taskType: 'practice', estimatedMinutes: 180, outcome: 'CRUD API working' },
  { topic: 'Week 42 Review', description: 'REST fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'REST basics mastered' },

  // Week 43: Validation & Error Handling (Days 22-28)
  { topic: 'Bean Validation', description: '@Valid, @NotNull, @Size, @Email, custom validators', taskType: 'learn', estimatedMinutes: 150, outcome: 'Validate input properly' },
  { topic: 'Exception Handling', description: '@ExceptionHandler, @ControllerAdvice, global handling', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle exceptions globally' },
  { topic: 'Custom Exceptions', description: 'Domain-specific exceptions, exception hierarchy', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design exception strategy' },
  { topic: 'Error Response Format', description: 'Standardized errors, RFC 7807 Problem Details', taskType: 'learn', estimatedMinutes: 90, outcome: 'Format errors consistently' },
  { topic: 'Validation Practice', description: 'Add validation to CRUD API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Validation implemented' },
  { topic: 'API Documentation', description: 'Swagger/OpenAPI with Springdoc', taskType: 'learn', estimatedMinutes: 120, outcome: 'Document APIs' },
  { topic: 'Week 43 Review', description: 'Validation and errors review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Error handling mastered' },

  // Week 44: Spring Data JPA Basics (Days 29-35)
  { topic: 'JPA Introduction', description: 'JPA concepts, ORM, entities, persistence context', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand JPA' },
  { topic: 'Spring Data JPA Setup', description: 'Dependencies, datasource, H2 for development', taskType: 'learn', estimatedMinutes: 120, outcome: 'JPA configured' },
  { topic: 'Entity Mapping', description: '@Entity, @Table, @Id, @Column, @GeneratedValue', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map entities' },
  { topic: 'Repository Pattern', description: 'JpaRepository, CrudRepository, method naming', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use repositories' },
  { topic: 'CRUD with JPA', description: 'Save, find, update, delete with JPA', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement CRUD' },
  { topic: 'JPA Practice', description: 'Convert API to use database', taskType: 'practice', estimatedMinutes: 180, outcome: 'DB integration complete' },
  { topic: 'Week 44 Review', description: 'JPA basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JPA basics solid' },

  // Week 45: JPA Relationships (Days 36-42)
  { topic: 'One-to-Many Relationships', description: '@OneToMany, @ManyToOne, bidirectional, cascade', taskType: 'learn', estimatedMinutes: 180, outcome: 'Map one-to-many' },
  { topic: 'Many-to-Many Relationships', description: '@ManyToMany, join tables, relationship management', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map many-to-many' },
  { topic: 'Fetch Types & N+1', description: 'Lazy vs Eager, N+1 problem, fetch strategies', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize fetching' },
  { topic: 'Cascade Operations', description: 'Cascade types, orphan removal, best practices', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage cascading' },
  { topic: 'Relationships Practice', description: 'Build blog: Post, Comment, User relationships', taskType: 'practice', estimatedMinutes: 240, outcome: 'Relationships working' },
  { topic: 'JPQL Queries', description: 'JPQL, named queries, native SQL', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write custom queries' },
  { topic: 'Week 45 Review', description: 'JPA relationships review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Relationships mastered' },

  // Week 46: Advanced JPA (Days 43-49)
  { topic: 'Query Methods', description: 'Derived queries, @Query annotation, method naming', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write query methods' },
  { topic: 'Pagination & Sorting', description: 'Pageable, Sort, PageRequest, page responses', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement pagination' },
  { topic: 'Specifications', description: 'Criteria API, dynamic queries with Specifications', taskType: 'learn', estimatedMinutes: 150, outcome: 'Build dynamic queries' },
  { topic: 'Entity Auditing', description: '@CreatedDate, @LastModifiedDate, audit fields', taskType: 'learn', estimatedMinutes: 90, outcome: 'Add auditing' },
  { topic: 'JPA Advanced Practice', description: 'Add pagination, sorting, search', taskType: 'practice', estimatedMinutes: 180, outcome: 'Advanced features working' },
  { topic: 'Performance Tuning', description: 'Query optimization, indexing, connection pooling', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize performance' },
  { topic: 'Week 46 Review', description: 'Advanced JPA review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Advanced JPA mastered' },

  // Week 47: Testing - Part 1 (Days 50-56)
  { topic: 'JUnit 5 Advanced', description: 'Parameterized tests, nested tests, test lifecycle', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master JUnit 5' },
  { topic: 'Mockito Deep Dive', description: 'Mocking, stubbing, argument matchers, verify', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master Mockito' },
  { topic: 'Unit Testing Service Layer', description: 'Test services with Mockito', taskType: 'practice', estimatedMinutes: 180, outcome: 'Service tests complete' },
  { topic: 'Repository Testing', description: '@DataJpaTest, testing repositories', taskType: 'learn', estimatedMinutes: 120, outcome: 'Test repositories' },
  { topic: 'Controller Testing', description: '@WebMvcTest, MockMvc, testing endpoints', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test controllers' },
  { topic: 'Test Coverage', description: 'Code coverage, test quality, TDD intro', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write quality tests' },
  { topic: 'Week 47 Review', description: 'Testing fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Testing basics solid' },

  // Week 48: Testing - Part 2 (Days 57-63)
  { topic: 'Integration Testing', description: '@SpringBootTest, full context testing', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write integration tests' },
  { topic: 'TestContainers', description: 'Test with real databases using containers', taskType: 'learn', estimatedMinutes: 180, outcome: 'Test with real DB' },
  { topic: 'API Testing', description: 'RestAssured, testing REST endpoints', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test APIs end-to-end' },
  { topic: 'Test Fixtures', description: 'Test data builders, fixtures, setup patterns', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage test data' },
  { topic: 'Comprehensive Testing', description: 'Write full test suite for blog API', taskType: 'practice', estimatedMinutes: 240, outcome: 'Complete test coverage' },
  { topic: 'Testing Best Practices', description: 'Test naming, AAA pattern, test smells', taskType: 'learn', estimatedMinutes: 90, outcome: 'Follow best practices' },
  { topic: 'Week 48 Review', description: 'Advanced testing review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Testing mastery achieved' },

  // Week 49: Spring Security Basics (Days 64-70)
  { topic: 'Security Fundamentals', description: 'Authentication vs authorization, OWASP Top 10', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand security' },
  { topic: 'Spring Security Setup', description: 'SecurityFilterChain, basic auth', taskType: 'learn', estimatedMinutes: 150, outcome: 'Configure security' },
  { topic: 'User Authentication', description: 'UserDetails, UserDetailsService, BCrypt', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement authentication' },
  { topic: 'Authorization', description: 'RBAC, @PreAuthorize, method security', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement authorization' },
  { topic: 'Security Practice', description: 'Add auth to blog API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Auth working' },
  { topic: 'CORS Configuration', description: 'Cross-origin requests, CORS for React', taskType: 'learn', estimatedMinutes: 90, outcome: 'Configure CORS' },
  { topic: 'Week 49 Review', description: 'Security basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Security basics solid' },

  // Week 50: JWT Authentication (Days 71-77)
  { topic: 'JWT Fundamentals', description: 'JWT structure, claims, signing, tokens vs sessions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand JWT' },
  { topic: 'JWT Implementation', description: 'Token generation, validation, refresh tokens', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement JWT' },
  { topic: 'JWT Security Filter', description: 'Custom filter, security chain integration', taskType: 'learn', estimatedMinutes: 180, outcome: 'JWT filter working' },
  { topic: 'Auth Endpoints', description: 'Login, register, token refresh endpoints', taskType: 'learn', estimatedMinutes: 120, outcome: 'Auth endpoints complete' },
  { topic: 'JWT Practice', description: 'Complete JWT authentication in API', taskType: 'practice', estimatedMinutes: 240, outcome: 'Full JWT auth implemented' },
  { topic: 'Security Testing', description: 'Test authentication flows', taskType: 'practice', estimatedMinutes: 120, outcome: 'Security tests passing' },
  { topic: 'Week 50 Review', description: 'JWT and security review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Security mastered' },

  // Week 51: REST API Project - Part 1 (Days 78-84)
  { topic: 'Project Planning', description: 'Design Task Management API', taskType: 'build', estimatedMinutes: 180, outcome: 'Project designed' },
  { topic: 'Project Setup', description: 'Initialize with all dependencies', taskType: 'build', estimatedMinutes: 120, outcome: 'Project scaffolded' },
  { topic: 'Entity Layer', description: 'Create entities with relationships', taskType: 'build', estimatedMinutes: 180, outcome: 'Entities complete' },
  { topic: 'Repository Layer', description: 'Create repositories with queries', taskType: 'build', estimatedMinutes: 150, outcome: 'Repositories ready' },
  { topic: 'DTOs & Mappers', description: 'Design DTOs, implement mappers', taskType: 'build', estimatedMinutes: 150, outcome: 'DTOs done' },
  { topic: 'Service Layer', description: 'Implement business logic', taskType: 'build', estimatedMinutes: 240, outcome: 'Services working' },
  { topic: 'Week 51 Review', description: 'Project foundation review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Foundation solid' },

  // Week 52: REST API Project - Part 2 (Days 85-91)
  { topic: 'Controller Layer', description: 'Implement REST endpoints', taskType: 'build', estimatedMinutes: 180, outcome: 'Controllers complete' },
  { topic: 'Authentication Integration', description: 'Add JWT to project', taskType: 'build', estimatedMinutes: 240, outcome: 'Auth integrated' },
  { topic: 'Authorization Rules', description: 'Role-based access for endpoints', taskType: 'build', estimatedMinutes: 180, outcome: 'Authorization complete' },
  { topic: 'Advanced Features', description: 'Pagination, sorting, filtering', taskType: 'build', estimatedMinutes: 180, outcome: 'Features working' },
  { topic: 'Error Handling', description: 'Global exception handling', taskType: 'build', estimatedMinutes: 150, outcome: 'Errors handled' },
  { topic: 'API Documentation', description: 'Complete Swagger docs', taskType: 'build', estimatedMinutes: 120, outcome: 'API documented' },
  { topic: 'Week 52 Review', description: 'API features review', taskType: 'revise', estimatedMinutes: 90, outcome: 'API complete' },

  // Week 53: REST API Project - Part 3 (Days 92-98)
  { topic: 'Unit Testing', description: 'Write unit tests for all layers', taskType: 'build', estimatedMinutes: 240, outcome: 'Unit tests complete' },
  { topic: 'Integration Testing', description: 'Write integration tests', taskType: 'build', estimatedMinutes: 180, outcome: 'Integration tests done' },
  { topic: 'Performance Optimization', description: 'Optimize queries and caching', taskType: 'build', estimatedMinutes: 180, outcome: 'Performance improved' },
  { topic: 'Logging & Monitoring', description: 'Add comprehensive logging', taskType: 'build', estimatedMinutes: 120, outcome: 'Observability added' },
  { topic: 'Deployment Prep', description: 'Profiles, environment variables', taskType: 'build', estimatedMinutes: 150, outcome: 'Production-ready' },
  { topic: 'Project Polish', description: 'Code cleanup, README, testing', taskType: 'build', estimatedMinutes: 120, outcome: 'Project polished' },
  { topic: 'Week 53 Review', description: 'Complete project review', taskType: 'revise', estimatedMinutes: 120, outcome: 'REST API mastered!' },

  // Week 54: Redis & Caching (Days 99-105)
  { topic: 'Caching Fundamentals', description: 'Why cache, cache strategies, when to use', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand caching' },
  { topic: 'Redis Introduction', description: 'In-memory stores, Redis data types, use cases', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand Redis' },
  { topic: 'Redis Setup & CLI', description: 'Install Redis, CLI commands, basic operations', taskType: 'learn', estimatedMinutes: 120, outcome: 'Redis running' },
  { topic: 'Redis Data Structures', description: 'Strings, lists, sets, hashes, sorted sets, TTL', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master Redis types' },
  { topic: 'Spring Boot + Redis', description: 'Spring Data Redis, RedisTemplate', taskType: 'learn', estimatedMinutes: 150, outcome: 'Integrate Redis' },
  { topic: 'Spring Cache Abstraction', description: '@Cacheable, @CachePut, @CacheEvict, TTL config', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement caching' },
  { topic: 'Week 54 Review', description: 'Redis caching review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Caching mastered' },

  // Week 55: Redis Advanced & Practice (Days 106-112)
  { topic: 'Cache Patterns', description: 'Cache-aside, write-through, write-behind patterns', taskType: 'learn', estimatedMinutes: 150, outcome: 'Know cache patterns' },
  { topic: 'Cache Invalidation', description: 'Invalidation strategies, cache consistency', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage cache lifecycle' },
  { topic: 'Redis for Sessions', description: 'Session storage with Redis, Spring Session', taskType: 'learn', estimatedMinutes: 120, outcome: 'Store sessions in Redis' },
  { topic: 'Redis for Rate Limiting', description: 'Rate limiting with Redis, sliding window', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement rate limiting' },
  { topic: 'Redis Practice', description: 'Add Redis to Task API, measure performance', taskType: 'practice', estimatedMinutes: 240, outcome: 'Redis working, 50%+ speedup' },
  { topic: 'Redis Monitoring', description: 'Redis monitoring, memory management', taskType: 'learn', estimatedMinutes: 90, outcome: 'Monitor Redis' },
  { topic: 'Week 55 Review', description: 'Redis comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Redis expert' },

  // Week 56: Message Queues - RabbitMQ (Days 113-119)
  { topic: 'Message Queue Concepts', description: 'Async communication, pub-sub, use cases', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand messaging' },
  { topic: 'RabbitMQ Fundamentals', description: 'AMQP, exchanges, queues, bindings, routing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Understand RabbitMQ' },
  { topic: 'RabbitMQ Setup', description: 'Install RabbitMQ, management UI', taskType: 'learn', estimatedMinutes: 120, outcome: 'RabbitMQ running' },
  { topic: 'Spring AMQP', description: 'RabbitTemplate, @RabbitListener, configuration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Integrate RabbitMQ' },
  { topic: 'Message Patterns', description: 'Point-to-point, pub-sub, request-reply, DLQ', taskType: 'learn', estimatedMinutes: 150, outcome: 'Messaging patterns' },
  { topic: 'RabbitMQ Practice', description: 'Build event flow: Order → Inventory → Notification', taskType: 'practice', estimatedMinutes: 240, outcome: 'Event-driven working' },
  { topic: 'Week 56 Review', description: 'RabbitMQ review', taskType: 'revise', estimatedMinutes: 120, outcome: 'RabbitMQ mastered' },

  // Week 57: Apache Kafka (Days 120-126)
  { topic: 'Kafka Fundamentals', description: 'Kafka architecture: brokers, topics, partitions', taskType: 'learn', estimatedMinutes: 180, outcome: 'Understand Kafka' },
  { topic: 'Kafka Setup', description: 'Install Kafka with Zookeeper, CLI basics', taskType: 'learn', estimatedMinutes: 120, outcome: 'Kafka running' },
  { topic: 'Producers & Consumers', description: 'Kafka producers, consumers, consumer groups', taskType: 'learn', estimatedMinutes: 150, outcome: 'Kafka messaging' },
  { topic: 'Spring Kafka', description: 'KafkaTemplate, @KafkaListener, configuration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Integrate Kafka' },
  { topic: 'Kafka Practice', description: 'Real-time analytics: Events → Kafka → Analytics', taskType: 'practice', estimatedMinutes: 240, outcome: 'Kafka streaming working' },
  { topic: 'RabbitMQ vs Kafka', description: 'When to use which, comparison', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right tool' },
  { topic: 'Week 57 Review', description: 'Kafka and messaging review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Message queues mastered' },

  // Week 58: Microservices (Days 127-133)
  { topic: 'Microservices Introduction', description: 'Monolith vs microservices, when to use', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand microservices' },
  { topic: 'Service Design', description: 'Bounded contexts, service boundaries, DDD', taskType: 'learn', estimatedMinutes: 150, outcome: 'Design services' },
  { topic: 'Service Discovery', description: 'Eureka server, service registration', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement discovery' },
  { topic: 'API Gateway', description: 'Spring Cloud Gateway, routing, filters', taskType: 'learn', estimatedMinutes: 180, outcome: 'Set up gateway' },
  { topic: 'Circuit Breaker', description: 'Resilience4j, circuit breaker, fallbacks', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle failures' },
  { topic: 'Microservices Practice', description: 'Break monolith into 3 services', taskType: 'practice', estimatedMinutes: 240, outcome: 'Microservices running' },
  { topic: 'Backend Phase Complete!', description: 'Spring Boot to Microservices MASTERED!', taskType: 'revise', estimatedMinutes: 120, outcome: 'BACKEND EXPERT!' },
];