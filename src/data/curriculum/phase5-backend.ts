import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase5Backend: CurriculumTask[] = [

  // Week 40: Spring Core
  { topic: 'Spring Framework Introduction', description: 'IoC, DI, Spring ecosystem overview', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand Spring concepts' },
  { topic: 'Dependency Injection', description: 'Constructor, setter, field injection, @Autowired', taskType: 'learn', estimatedMinutes: 150, outcome: 'Apply DI patterns' },
  { topic: 'Spring Beans', description: 'Bean lifecycle, scopes, @Component, @Bean', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage Spring beans' },
  { topic: 'Configuration', description: '@Configuration, @Value, property files', taskType: 'learn', estimatedMinutes: 120, outcome: 'Configure Spring apps' },
  { topic: 'Spring Profiles', description: 'Environment-specific configuration', taskType: 'learn', estimatedMinutes: 90, outcome: 'Use profiles effectively' },
  { topic: 'Spring Practice', description: 'Build simple Spring application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Spring app running' },
  { topic: 'Week 40 Review', description: 'Spring core review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Spring fundamentals solid' },

  // Week 41: Spring Boot
  { topic: 'Spring Boot Introduction', description: 'Spring Boot advantages, starters, auto-configuration', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand Spring Boot' },
  { topic: 'Spring Boot Setup', description: 'Spring Initializr, project structure, running apps', taskType: 'learn', estimatedMinutes: 90, outcome: 'Boot project running' },
  { topic: 'Spring Boot Configuration', description: 'application.properties/yml, externalized config', taskType: 'learn', estimatedMinutes: 120, outcome: 'Configure Boot apps' },
  { topic: 'Logging', description: 'SLF4J, Logback, log levels, log patterns', taskType: 'learn', estimatedMinutes: 90, outcome: 'Implement logging' },
  { topic: 'DevTools', description: 'Live reload, automatic restart, H2 console', taskType: 'learn', estimatedMinutes: 90, outcome: 'Use dev tools' },
  { topic: 'Boot Practice', description: 'Create and configure Boot application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Boot app working' },
  { topic: 'Week 41 Review', description: 'Spring Boot basics review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Boot basics solid' },

  // Week 42: REST APIs
  { topic: 'REST Principles', description: 'REST architecture, resources, HTTP methods', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand REST concepts' },
  { topic: '@RestController', description: 'Controller annotation, @RequestMapping, return types', taskType: 'learn', estimatedMinutes: 120, outcome: 'Create REST controllers' },
  { topic: 'Request Mappings', description: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping', taskType: 'learn', estimatedMinutes: 120, outcome: 'Map HTTP methods' },
  { topic: 'Request Parameters', description: '@PathVariable, @RequestParam, @RequestBody', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle request data' },
  { topic: 'Response Handling', description: 'ResponseEntity, status codes, custom responses', taskType: 'learn', estimatedMinutes: 120, outcome: 'Craft proper responses' },
  { topic: 'REST Practice', description: 'Build simple CRUD API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Basic API working' },
  { topic: 'Week 42 Review', description: 'REST fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'REST basics solid' },

  // Week 43: Validation & Errors
  { topic: 'Bean Validation', description: '@Valid, @NotNull, @Size, @Email, custom validators', taskType: 'learn', estimatedMinutes: 150, outcome: 'Validate input data' },
  { topic: 'Exception Handling', description: '@ExceptionHandler, @ControllerAdvice', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle exceptions globally' },
  { topic: 'Custom Exceptions', description: 'Creating domain exceptions, exception hierarchy', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design exception strategy' },
  { topic: 'Error Response Format', description: 'Standardized error responses, RFC 7807', taskType: 'learn', estimatedMinutes: 90, outcome: 'Format errors properly' },
  { topic: 'Validation Practice', description: 'Add validation to CRUD API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Validation implemented' },
  { topic: 'API Documentation', description: 'Swagger/OpenAPI, Springdoc', taskType: 'learn', estimatedMinutes: 120, outcome: 'Document APIs' },
  { topic: 'Week 43 Review', description: 'Validation and errors review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Error handling solid' },

  // Week 44: JPA Basics
  { topic: 'JPA Introduction', description: 'JPA concepts, entities, EntityManager', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand JPA' },
  { topic: 'Spring Data JPA Setup', description: 'Dependencies, datasource config, H2 for dev', taskType: 'learn', estimatedMinutes: 120, outcome: 'JPA configured' },
  { topic: 'Entity Mapping', description: '@Entity, @Table, @Id, @Column, @GeneratedValue', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map entities to tables' },
  { topic: 'Repository Pattern', description: 'JpaRepository, CrudRepository, method naming', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use repositories' },
  { topic: 'CRUD with JPA', description: 'Save, find, update, delete operations', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement CRUD with JPA' },
  { topic: 'JPA Practice', description: 'Convert in-memory API to database', taskType: 'practice', estimatedMinutes: 180, outcome: 'Database integration working' },
  { topic: 'Week 44 Review', description: 'Spring Data JPA basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JPA basics solid' },

  // Week 45: JPA Relationships
  { topic: 'One-to-Many', description: '@OneToMany, @ManyToOne, bidirectional relationships', taskType: 'learn', estimatedMinutes: 180, outcome: 'Map one-to-many relations' },
  { topic: 'Many-to-Many', description: '@ManyToMany, join tables, relationship management', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map many-to-many relations' },
  { topic: 'Fetch Types', description: 'Lazy vs Eager loading, N+1 problem', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize data fetching' },
  { topic: 'Cascade Types', description: 'Cascade operations, orphan removal', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage cascading' },
  { topic: 'Relationships Practice', description: 'Build blog API with Post-Comment-User relations', taskType: 'practice', estimatedMinutes: 240, outcome: 'Complex relationships working' },
  { topic: 'JPA Queries', description: 'JPQL, named queries, native queries', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write custom queries' },
  { topic: 'Week 45 Review', description: 'JPA relationships review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Relationships mastered' },

  // Week 46: Advanced JPA
  { topic: 'Query Methods', description: 'Derived query methods, @Query annotation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write complex queries' },
  { topic: 'Pagination & Sorting', description: 'Pageable, Sort, PageRequest', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement pagination' },
  { topic: 'Specifications', description: 'JPA Criteria API, dynamic queries', taskType: 'learn', estimatedMinutes: 150, outcome: 'Build dynamic queries' },
  { topic: 'Auditing', description: '@CreatedDate, @LastModifiedDate, @CreatedBy', taskType: 'learn', estimatedMinutes: 90, outcome: 'Add audit fields' },
  { topic: 'JPA Practice Advanced', description: 'Add pagination, sorting, search to blog API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Advanced features working' },
  { topic: 'Performance Tuning', description: 'Query optimization, indexing, connection pooling, caching strategies', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize JPA performance' },
  { topic: 'Week 46 Review', description: 'Advanced JPA review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Advanced JPA solid' },

  // Week 47: Testing
  { topic: 'JUnit 5 Advanced', description: 'Parameterized tests, lifecycle, nested tests, @RepeatedTest', taskType: 'learn', estimatedMinutes: 180, outcome: 'Advanced JUnit techniques' },
  { topic: 'Mockito Deep Dive', description: 'Mocking, stubbing, verify, spy vs mock', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master Mockito' },
  { topic: 'Testing Practice', description: 'Unit tests for services, @DataJpaTest, @WebMvcTest', taskType: 'practice', estimatedMinutes: 240, outcome: 'Test suite complete' },
  { topic: 'Integration Testing', description: '@SpringBootTest, TestContainers, profiles', taskType: 'learn', estimatedMinutes: 180, outcome: 'Integration tests working' },
  { topic: 'Test Coverage', description: 'JaCoCo, coverage metrics', taskType: 'learn', estimatedMinutes: 120, outcome: 'Measure test quality' },
  { topic: 'Security Testing', description: 'Test authentication and authorization flows', taskType: 'practice', estimatedMinutes: 180, outcome: 'Security tests passing' },
  { topic: 'Week 47 Review', description: 'Testing comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Testing mastered' },
  // Week 48: Security - Authentication
  { topic: 'Security Basics', description: 'Authentication vs authorization, security concepts', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand security fundamentals' },
  { topic: 'Spring Security Setup', description: 'Security configuration, SecurityFilterChain', taskType: 'learn', estimatedMinutes: 150, outcome: 'Configure Spring Security' },
  { topic: 'User Authentication', description: 'UserDetails, UserDetailsService, password encoding', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement authentication' },
  { topic: 'JWT Basics', description: 'JWT structure, tokens, claims, signing', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand JWT' },
  { topic: 'JWT Implementation', description: 'JWT token generation, validation, refresh tokens', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement JWT auth' },
  { topic: 'Security Practice I', description: 'Add login/register endpoints to blog API', taskType: 'practice', estimatedMinutes: 240, outcome: 'Auth endpoints working' },
  { topic: 'Week 48 Review', description: 'Authentication & JWT review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Authentication solid' },

  // Week 49: Security - Authorization
  { topic: 'Authorization', description: 'Role-based access, @PreAuthorize, method security', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement authorization' },
  { topic: 'JWT Filter', description: 'Custom JWT filter, security filter chain', taskType: 'learn', estimatedMinutes: 180, outcome: 'JWT filter working' },
  { topic: 'CORS Configuration', description: 'Cross-origin configuration for frontend', taskType: 'learn', estimatedMinutes: 90, outcome: 'Configure CORS' },
  { topic: 'Security Best Practices', description: 'OWASP Top 10, secure coding, input validation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Follow security guidelines' },
  { topic: 'Security Practice II', description: 'Complete JWT authentication in blog API, role-based access', taskType: 'practice', estimatedMinutes: 240, outcome: 'Full security implemented' },
  { topic: 'Security Testing', description: 'Test authentication and authorization flows', taskType: 'practice', estimatedMinutes: 180, outcome: 'Security tests passing' },
  { topic: 'Week 49 Review', description: 'Authorization & security review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Security mastered' },

  // Week 50: Project - Core Setup
  { topic: 'Project Planning', description: 'Design Task Management API - requirements, ERD, API spec', taskType: 'build', estimatedMinutes: 180, outcome: 'Project design complete' },
  { topic: 'Project Setup', description: 'Initialize project, dependencies, database setup', taskType: 'build', estimatedMinutes: 120, outcome: 'Project initialized' },
  { topic: 'Entity Layer', description: 'Create all entities with relationships', taskType: 'build', estimatedMinutes: 180, outcome: 'Entities complete' },
  { topic: 'Repository Layer', description: 'Create repositories with custom queries', taskType: 'build', estimatedMinutes: 150, outcome: 'Repositories done' },
  { topic: 'Service Layer', description: 'Implement business logic, DTOs, mappers', taskType: 'build', estimatedMinutes: 240, outcome: 'Services working' },
  { topic: 'Controller Layer', description: 'REST endpoints with proper validation', taskType: 'build', estimatedMinutes: 180, outcome: 'Controllers complete' },
  { topic: 'Week 50 Review', description: 'Core API implementation review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Core API working' },

  // Week 51: Project - Auth & Features
  { topic: 'Authentication Integration', description: 'Add JWT authentication to project', taskType: 'build', estimatedMinutes: 240, outcome: 'Auth working' },
  { topic: 'Authorization Rules', description: 'Role-based access for all endpoints', taskType: 'build', estimatedMinutes: 180, outcome: 'Authorization complete' },
  { topic: 'Advanced Features', description: 'Pagination, sorting, filtering, search', taskType: 'build', estimatedMinutes: 180, outcome: 'Advanced features added' },
  { topic: 'Error Handling', description: 'Global exception handling, custom errors', taskType: 'build', estimatedMinutes: 150, outcome: 'Errors handled properly' },
  { topic: 'API Documentation', description: 'Complete Swagger/OpenAPI documentation', taskType: 'build', estimatedMinutes: 120, outcome: 'API documented' },
  { topic: 'Testing', description: 'Write comprehensive unit and integration tests', taskType: 'build', estimatedMinutes: 240, outcome: 'Tests complete' },
  { topic: 'Week 51 Review', description: 'Feature & security integration review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Project features solid' },

  // Week 52: Project - Optimization & Finalization
  { topic: 'Performance Optimization', description: 'Query optimization, caching, connection pooling', taskType: 'build', estimatedMinutes: 180, outcome: 'Performance improved' },
  { topic: 'Logging & Monitoring', description: 'Comprehensive logging, metrics', taskType: 'build', estimatedMinutes: 120, outcome: 'Logging complete' },
  { topic: 'Deployment Prep', description: 'Profiles, environment config, packaging', taskType: 'build', estimatedMinutes: 150, outcome: 'Ready for deployment' },
  { topic: 'Project Polish', description: 'Code cleanup, README, postman collection', taskType: 'build', estimatedMinutes: 120, outcome: 'Project polished' },
  { topic: 'Project Demo', description: 'Test all endpoints, demo preparation', taskType: 'build', estimatedMinutes: 120, outcome: 'Demo ready' },
  { topic: 'Backend Project Complete!', description: 'REST API project comprehensive review', taskType: 'revise', estimatedMinutes: 180, outcome: 'Production-ready REST API!' },
  { topic: 'Week 52 Review', description: 'Backend project final review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Backend skills solid' },

  // Week 53: Redis
  { topic: 'Redis Introduction', description: 'Redis basics, CLI, data types', taskType: 'learn', estimatedMinutes: 180, outcome: 'Redis setup understood' },
  { topic: 'Redis Data Structures', description: 'GET, SET, INCR, LPUSH, SADD, HSET, ZADD, TTL', taskType: 'learn', estimatedMinutes: 180, outcome: 'Redis commands mastered' },
  { topic: 'Spring Boot + Redis', description: 'Spring Data Redis, RedisTemplate', taskType: 'learn', estimatedMinutes: 180, outcome: 'Redis integrated' },
  { topic: 'Caching with Spring', description: '@Cacheable, cache patterns, TTL config', taskType: 'learn', estimatedMinutes: 180, outcome: 'Caching annotations mastered' },
  { topic: 'Redis Practice', description: 'Add Redis caching to Task API', taskType: 'practice', estimatedMinutes: 240, outcome: 'Caching working' },
  { topic: 'Redis Advanced', description: 'Pub/Sub, cache invalidation strategies', taskType: 'learn', estimatedMinutes: 150, outcome: 'Advanced Redis patterns' },
  { topic: 'Week 53 Review', description: 'Redis comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Redis mastery achieved' },

  // Week 54: RabbitMQ
  { topic: 'RabbitMQ Fundamentals', description: 'AMQP, exchanges, queues, routing keys', taskType: 'learn', estimatedMinutes: 180, outcome: 'RabbitMQ architecture understood' },
  { topic: 'Spring Boot + RabbitMQ', description: 'Spring AMQP, RabbitTemplate, listeners', taskType: 'learn', estimatedMinutes: 180, outcome: 'RabbitMQ integrated' },
  { topic: 'RabbitMQ Practice', description: 'Event-driven user & order flow', taskType: 'practice', estimatedMinutes: 240, outcome: 'Event-driven flow working' },
  { topic: 'Dead Letter Queues', description: 'Retry logic, DLQ patterns', taskType: 'learn', estimatedMinutes: 150, outcome: 'Reliable messaging' },
  { topic: 'Message Acknowledgments', description: 'Manual vs auto acks, durability', taskType: 'learn', estimatedMinutes: 120, outcome: 'Reliable processing' },
  { topic: 'Async Architecture Practice', description: 'Integrate async messaging in Task API', taskType: 'practice', estimatedMinutes: 240, outcome: 'Async architecture working' },
  { topic: 'Week 54 Review', description: 'RabbitMQ review', taskType: 'revise', estimatedMinutes: 120, outcome: 'RabbitMQ solid' },

  // Week 55: Kafka
  { topic: 'Kafka Fundamentals', description: 'Brokers, topics, partitions, replicas', taskType: 'learn', estimatedMinutes: 180, outcome: 'Kafka concepts clear' },
  { topic: 'Spring Kafka', description: 'KafkaTemplate, @KafkaListener', taskType: 'learn', estimatedMinutes: 180, outcome: 'Kafka integrated' },
  { topic: 'Kafka Practice', description: 'Real-time analytics & order tracking', taskType: 'practice', estimatedMinutes: 240, outcome: 'Kafka streaming working' },
  { topic: 'Consumer Groups', description: 'Offset management, scaling consumers', taskType: 'learn', estimatedMinutes: 150, outcome: 'Scalable consumers' },
  { topic: 'Error Handling in Kafka', description: 'Retries, DLQ, idempotency', taskType: 'learn', estimatedMinutes: 120, outcome: 'Reliable streaming' },
  { topic: 'Event Sourcing & SAGA Intro', description: 'Distributed patterns overview', taskType: 'learn', estimatedMinutes: 150, outcome: 'Distributed architecture concepts' },
  { topic: 'Week 55 Review', description: 'Kafka comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Kafka mastered' },

  // Week 56: Microservices Core
  { topic: 'Microservices Introduction', description: 'Monolith vs microservices', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand microservices' },
  { topic: 'Service Design', description: 'Bounded contexts, service boundaries', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design services properly' },
  { topic: 'Spring Cloud Overview', description: 'Spring Cloud ecosystem', taskType: 'learn', estimatedMinutes: 90, outcome: 'Understand Spring Cloud' },
  { topic: 'Service Discovery', description: 'Eureka server setup', taskType: 'learn', estimatedMinutes: 180, outcome: 'Service discovery working' },
  { topic: 'API Gateway', description: 'Spring Cloud Gateway routing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Gateway implemented' },
  { topic: 'Config Server', description: 'Centralized configuration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Externalized config' },
  { topic: 'Week 56 Review', description: 'Microservices fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Microservices basics solid' },

  // Week 57: Microservices Advanced & Completion
  { topic: 'Circuit Breaker', description: 'Resilience4j, fallback methods', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle failures gracefully' },
  { topic: 'Distributed Tracing', description: 'Sleuth, Zipkin', taskType: 'learn', estimatedMinutes: 120, outcome: 'Trace distributed requests' },
  { topic: 'Microservices Practice', description: 'Break monolith into 3 services', taskType: 'practice', estimatedMinutes: 240, outcome: 'Microservices communicating' },
  { topic: 'Service Communication', description: 'REST vs messaging tradeoffs', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose communication style' },
  { topic: 'Microservices Testing', description: 'Contract & integration testing', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test microservices' },
  { topic: 'Microservices Project', description: 'Complete production-ready setup', taskType: 'practice', estimatedMinutes: 240, outcome: 'Production microservices ready' },
  { topic: 'Phase 5 Complete!', description: 'Backend mastery achieved - Spring Boot, Security, Microservices, Redis, Kafka!', taskType: 'revise', estimatedMinutes: 180, outcome: 'Backend phase completed - SCALABILITY EXPERT!' },

];