// Phase 5: Backend Development with Spring Boot (Weeks 39-56) - Oct 17, 2026 - Feb 12, 2027
// UPDATED: 126 days (was 112) - Added Redis (5 days), Kafka (7 days), Enhanced Testing (2 days)

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase5Backend: CurriculumTask[] = [
  // Week 39: Spring Core
  { topic: 'Spring Framework Introduction', description: 'IoC, DI, Spring ecosystem overview', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand Spring concepts' },
  { topic: 'Dependency Injection', description: 'Constructor, setter, field injection, @Autowired', taskType: 'learn', estimatedMinutes: 150, outcome: 'Apply DI patterns' },
  { topic: 'Spring Beans', description: 'Bean lifecycle, scopes, @Component, @Bean', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage Spring beans' },
  { topic: 'Configuration', description: '@Configuration, @Value, property files', taskType: 'learn', estimatedMinutes: 120, outcome: 'Configure Spring apps' },
  { topic: 'Spring Profiles', description: 'Environment-specific configuration', taskType: 'learn', estimatedMinutes: 90, outcome: 'Use profiles effectively' },
  { topic: 'Spring Practice', description: 'Build simple Spring application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Spring app running' },
  { topic: 'Week 39 Review', description: 'Spring core review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Spring fundamentals solid' },

  // Week 40: Spring Boot Basics
  { topic: 'Spring Boot Introduction', description: 'Spring Boot advantages, starters, auto-configuration', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand Spring Boot' },
  { topic: 'Spring Boot Setup', description: 'Spring Initializr, project structure, running apps', taskType: 'learn', estimatedMinutes: 90, outcome: 'Boot project running' },
  { topic: 'Spring Boot Configuration', description: 'application.properties/yml, externalized config', taskType: 'learn', estimatedMinutes: 120, outcome: 'Configure Boot apps' },
  { topic: 'Logging', description: 'SLF4J, Logback, log levels, log patterns', taskType: 'learn', estimatedMinutes: 90, outcome: 'Implement logging' },
  { topic: 'DevTools', description: 'Live reload, automatic restart, H2 console', taskType: 'learn', estimatedMinutes: 90, outcome: 'Use dev tools' },
  { topic: 'Boot Practice', description: 'Create and configure Boot application', taskType: 'practice', estimatedMinutes: 180, outcome: 'Boot app working' },
  { topic: 'Week 40 Review', description: 'Spring Boot basics review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Boot basics solid' },

  // Week 41: REST API Fundamentals
  { topic: 'REST Principles', description: 'REST architecture, resources, HTTP methods', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand REST concepts' },
  { topic: '@RestController', description: 'Controller annotation, @RequestMapping, return types', taskType: 'learn', estimatedMinutes: 120, outcome: 'Create REST controllers' },
  { topic: 'Request Mappings', description: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping', taskType: 'learn', estimatedMinutes: 120, outcome: 'Map HTTP methods' },
  { topic: 'Request Parameters', description: '@PathVariable, @RequestParam, @RequestBody', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle request data' },
  { topic: 'Response Handling', description: 'ResponseEntity, status codes, custom responses', taskType: 'learn', estimatedMinutes: 120, outcome: 'Craft proper responses' },
  { topic: 'REST Practice', description: 'Build simple CRUD API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Basic API working' },
  { topic: 'Week 41 Review', description: 'REST fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'REST basics solid' },

  // Week 42: Data Validation & Error Handling
  { topic: 'Bean Validation', description: '@Valid, @NotNull, @Size, @Email, custom validators', taskType: 'learn', estimatedMinutes: 150, outcome: 'Validate input data' },
  { topic: 'Exception Handling', description: '@ExceptionHandler, @ControllerAdvice', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle exceptions globally' },
  { topic: 'Custom Exceptions', description: 'Creating domain exceptions, exception hierarchy', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design exception strategy' },
  { topic: 'Error Response Format', description: 'Standardized error responses, RFC 7807', taskType: 'learn', estimatedMinutes: 90, outcome: 'Format errors properly' },
  { topic: 'Validation Practice', description: 'Add validation to CRUD API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Validation implemented' },
  { topic: 'API Documentation', description: 'Swagger/OpenAPI, Springdoc', taskType: 'learn', estimatedMinutes: 120, outcome: 'Document APIs' },
  { topic: 'Week 42 Review', description: 'Validation and errors review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Error handling solid' },

  // Week 43: Spring Data JPA Basics
  { topic: 'JPA Introduction', description: 'JPA concepts, entities, EntityManager', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand JPA' },
  { topic: 'Spring Data JPA Setup', description: 'Dependencies, datasource config, H2 for dev', taskType: 'learn', estimatedMinutes: 120, outcome: 'JPA configured' },
  { topic: 'Entity Mapping', description: '@Entity, @Table, @Id, @Column, @GeneratedValue', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map entities to tables' },
  { topic: 'Repository Pattern', description: 'JpaRepository, CrudRepository, method naming', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use repositories' },
  { topic: 'CRUD with JPA', description: 'Save, find, update, delete operations', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement CRUD with JPA' },
  { topic: 'JPA Practice', description: 'Convert in-memory API to database', taskType: 'practice', estimatedMinutes: 180, outcome: 'Database integration working' },
  { topic: 'Week 43 Review', description: 'Spring Data JPA basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JPA basics solid' },

  // Week 44: JPA Relationships
  { topic: 'One-to-Many', description: '@OneToMany, @ManyToOne, bidirectional relationships', taskType: 'learn', estimatedMinutes: 180, outcome: 'Map one-to-many relations' },
  { topic: 'Many-to-Many', description: '@ManyToMany, join tables, relationship management', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map many-to-many relations' },
  { topic: 'Fetch Types', description: 'Lazy vs Eager loading, N+1 problem', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize data fetching' },
  { topic: 'Cascade Types', description: 'Cascade operations, orphan removal', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage cascading' },
  { topic: 'Relationships Practice', description: 'Build blog API with Post-Comment-User relations', taskType: 'practice', estimatedMinutes: 240, outcome: 'Complex relationships working' },
  { topic: 'JPA Queries', description: 'JPQL, named queries, native queries', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write custom queries' },
  { topic: 'Week 44 Review', description: 'JPA relationships review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Relationships mastered' },

  // Week 45-46: Advanced JPA & Testing (14 days with enhanced testing)
  { topic: 'Query Methods', description: 'Derived query methods, @Query annotation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write complex queries' },
  { topic: 'Pagination & Sorting', description: 'Pageable, Sort, PageRequest', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement pagination' },
  { topic: 'Specifications', description: 'JPA Criteria API, dynamic queries', taskType: 'learn', estimatedMinutes: 150, outcome: 'Build dynamic queries' },
  { topic: 'Auditing', description: '@CreatedDate, @LastModifiedDate, @CreatedBy', taskType: 'learn', estimatedMinutes: 90, outcome: 'Add audit fields' },
  { topic: 'JPA Practice Advanced', description: 'Add pagination, sorting, search to blog API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Advanced features working' },
  
  // 🔥 NEW: Enhanced Testing (2 days)
  { topic: 'JUnit 5 Advanced', description: 'Parameterized tests, test lifecycle, nested tests, @RepeatedTest, test ordering', taskType: 'learn', estimatedMinutes: 180, outcome: 'Advanced JUnit techniques' },
  { topic: 'Mockito Deep Dive', description: 'Mock creation, stubbing, argument matchers, verify interactions, @InjectMocks, @Mock, spy vs mock', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master Mockito' },
  
  { topic: 'Testing Practice', description: 'Write unit tests for service layer, repository tests with @DataJpaTest, controller tests with @WebMvcTest, MockMvc', taskType: 'practice', estimatedMinutes: 240, outcome: 'Test suite complete' },
  { topic: 'Integration Testing', description: '@SpringBootTest, TestContainers for real database, test profiles, H2 in-memory testing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Integration tests working' },
  { topic: 'Test Coverage', description: 'JaCoCo, code coverage metrics, testing best practices', taskType: 'learn', estimatedMinutes: 120, outcome: 'Measure test quality' },
  { topic: 'Performance Tuning', description: 'Query optimization, indexing, connection pooling, caching strategies', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize JPA performance' },
  { topic: 'Week 45-46 Review', description: 'Advanced JPA and testing comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JPA mastery achieved' },

  // Week 47-48: Spring Security & JWT (14 days)
  { topic: 'Security Basics', description: 'Authentication vs authorization, security concepts', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand security fundamentals' },
  { topic: 'Spring Security Setup', description: 'Security configuration, SecurityFilterChain', taskType: 'learn', estimatedMinutes: 150, outcome: 'Configure Spring Security' },
  { topic: 'User Authentication', description: 'UserDetails, UserDetailsService, password encoding', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement authentication' },
  { topic: 'JWT Basics', description: 'JWT structure, tokens, claims, signing', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand JWT' },
  { topic: 'JWT Implementation', description: 'JWT token generation, validation, refresh tokens', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement JWT auth' },
  { topic: 'Security Practice I', description: 'Add login/register endpoints to blog API', taskType: 'practice', estimatedMinutes: 240, outcome: 'Auth endpoints working' },
  { topic: 'Week 47 Security Review', description: 'Security and JWT week 1 review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Auth basics solid' },

  { topic: 'Authorization', description: 'Role-based access, @PreAuthorize, method security', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement authorization' },
  { topic: 'JWT Filter', description: 'Custom JWT filter, security filter chain', taskType: 'learn', estimatedMinutes: 180, outcome: 'JWT filter working' },
  { topic: 'CORS Configuration', description: 'Cross-origin configuration for frontend', taskType: 'learn', estimatedMinutes: 90, outcome: 'Configure CORS' },
  { topic: 'Security Best Practices', description: 'OWASP Top 10, secure coding, input validation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Follow security guidelines' },
  { topic: 'Security Practice II', description: 'Complete JWT authentication in blog API, role-based access', taskType: 'practice', estimatedMinutes: 240, outcome: 'Full security implemented' },
  { topic: 'Security Testing', description: 'Test authentication and authorization flows', taskType: 'practice', estimatedMinutes: 180, outcome: 'Security tests passing' },
  { topic: 'Week 48 Review', description: 'Complete security review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Security mastered' },

  // Week 49-51: Complete REST API Project (21 days)
  { topic: 'Project Planning', description: 'Design Task Management API - requirements, ERD, API spec', taskType: 'build', estimatedMinutes: 180, outcome: 'Project design complete' },
  { topic: 'Project Setup', description: 'Initialize project, dependencies, database setup', taskType: 'build', estimatedMinutes: 120, outcome: 'Project initialized' },
  { topic: 'Entity Layer', description: 'Create all entities with relationships', taskType: 'build', estimatedMinutes: 180, outcome: 'Entities complete' },
  { topic: 'Repository Layer', description: 'Create repositories with custom queries', taskType: 'build', estimatedMinutes: 150, outcome: 'Repositories done' },
  { topic: 'Service Layer', description: 'Implement business logic, DTOs, mappers', taskType: 'build', estimatedMinutes: 240, outcome: 'Services working' },
  { topic: 'Controller Layer', description: 'REST endpoints with proper validation', taskType: 'build', estimatedMinutes: 180, outcome: 'Controllers complete' },
  { topic: 'Week 49 Project Review', description: 'Review API implementation', taskType: 'revise', estimatedMinutes: 120, outcome: 'Core API working' },

  { topic: 'Authentication Integration', description: 'Add JWT authentication to project', taskType: 'build', estimatedMinutes: 240, outcome: 'Auth working' },
  { topic: 'Authorization Rules', description: 'Role-based access for all endpoints', taskType: 'build', estimatedMinutes: 180, outcome: 'Authorization complete' },
  { topic: 'Advanced Features', description: 'Pagination, sorting, filtering, search', taskType: 'build', estimatedMinutes: 180, outcome: 'Advanced features added' },
  { topic: 'Error Handling', description: 'Global exception handling, custom errors', taskType: 'build', estimatedMinutes: 150, outcome: 'Errors handled properly' },
  { topic: 'API Documentation', description: 'Complete Swagger/OpenAPI documentation', taskType: 'build', estimatedMinutes: 120, outcome: 'API documented' },
  { topic: 'Testing', description: 'Write comprehensive unit and integration tests', taskType: 'build', estimatedMinutes: 240, outcome: 'Tests complete' },
  { topic: 'Week 50 Review', description: 'API features review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Features complete' },

  { topic: 'Performance Optimization', description: 'Query optimization, caching, connection pooling', taskType: 'build', estimatedMinutes: 180, outcome: 'Performance improved' },
  { topic: 'Logging & Monitoring', description: 'Comprehensive logging, metrics', taskType: 'build', estimatedMinutes: 120, outcome: 'Logging complete' },
  { topic: 'Deployment Prep', description: 'Profiles, environment config, packaging', taskType: 'build', estimatedMinutes: 150, outcome: 'Ready for deployment' },
  { topic: 'Project Polish', description: 'Code cleanup, README, postman collection', taskType: 'build', estimatedMinutes: 120, outcome: 'Project polished' },
  { topic: 'Project Demo', description: 'Test all endpoints, demo preparation', taskType: 'build', estimatedMinutes: 120, outcome: 'Demo ready' },
  { topic: 'Backend Project Complete!', description: 'REST API project comprehensive review', taskType: 'revise', estimatedMinutes: 180, outcome: 'Production-ready REST API!' },
  { topic: 'Week 51 Review', description: 'Complete backend phase review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Backend skills solid' },

  // 🔥 NEW: Week 52 - Redis & Caching (5 days + 2 days practice)
  { topic: 'Redis Introduction', description: 'What is Redis, in-memory data store, install Redis, Redis CLI, data types (strings, lists, sets, hashes, sorted sets)', taskType: 'learn', estimatedMinutes: 180, outcome: 'Redis setup and basics understood' },
  { topic: 'Redis Data Structures', description: 'Master all Redis commands: GET, SET, INCR, LPUSH, SADD, HSET, ZADD. TTL and expiration.', taskType: 'learn', estimatedMinutes: 180, outcome: 'Redis commands mastered' },
  { topic: 'Spring Boot + Redis', description: 'Spring Data Redis, RedisTemplate, connection pooling (Lettuce), repository pattern', taskType: 'learn', estimatedMinutes: 180, outcome: 'Redis integrated with Spring' },
  { topic: 'Caching with Spring', description: '@Cacheable, @CachePut, @CacheEvict, cache-aside pattern, TTL config, cache key generation', taskType: 'learn', estimatedMinutes: 180, outcome: 'Caching annotations mastered' },
  { topic: 'Redis Practice', description: 'Add Redis caching to Task API: cache task list, single task. Measure performance (before/after logs). Session storage. Rate limiting with Redis.', taskType: 'practice', estimatedMinutes: 240, outcome: 'Caching working, 50%+ speedup' },
  { topic: 'Redis Advanced', description: 'Pub/Sub basics, Redis as message broker, cache invalidation strategies', taskType: 'learn', estimatedMinutes: 150, outcome: 'Advanced Redis patterns' },
  { topic: 'Week 52 Redis Review', description: 'Redis and caching comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Redis mastery achieved' },

  // 🔥 NEW: Week 53-54 - Message Queues: RabbitMQ & Kafka (7 days + 7 days)
  
  // RabbitMQ (3.5 days)
  { topic: 'RabbitMQ Fundamentals', description: 'Message queue concepts, AMQP, install RabbitMQ, management UI. Producers, consumers, queues, exchanges (direct, fanout, topic). Routing keys, bindings, acknowledgments.', taskType: 'learn', estimatedMinutes: 180, outcome: 'RabbitMQ architecture understood' },
  { topic: 'Spring Boot + RabbitMQ', description: 'Spring AMQP, RabbitTemplate, @RabbitListener. Configure exchanges, queues, bindings. JSON message converters. Dead letter queues.', taskType: 'learn', estimatedMinutes: 180, outcome: 'RabbitMQ integrated' },
  { topic: 'RabbitMQ Practice', description: 'Build: User service publishes "user registered" event → Email service consumes. Order service → Inventory service (async). Retry logic + DLQ.', taskType: 'practice', estimatedMinutes: 240, outcome: 'Event-driven flow working' },
  
  // Kafka (3.5 days)
  { topic: 'Kafka Fundamentals', description: 'Kafka architecture: brokers, topics, partitions, replicas. Producers, consumers, consumer groups. Offset management. Install Kafka + Zookeeper.', taskType: 'learn', estimatedMinutes: 180, outcome: 'Kafka concepts clear' },
  { topic: 'Spring Kafka', description: 'Spring Kafka, KafkaTemplate, @KafkaListener. Topic config, serialization (JSON). Consumer groups. Error handling.', taskType: 'learn', estimatedMinutes: 180, outcome: 'Kafka integrated with Spring' },
  { topic: 'Kafka Practice', description: 'Real-time analytics: User activity → Kafka → Analytics service. Order tracking: create/shipped/delivered events. Multiple consumers: notification, analytics, audit.', taskType: 'practice', estimatedMinutes: 240, outcome: 'Kafka streaming working' },
  
  // Comparison & Best Practices (7 days total wrap-up)
  { topic: 'Message Queues Best Practices', description: 'RabbitMQ vs Kafka: when to use. Message ordering. Idempotency. Event sourcing intro. SAGA pattern. Monitoring queues.', taskType: 'learn', estimatedMinutes: 180, outcome: 'Choose right message broker' },
  { topic: 'Async Architecture Practice', description: 'Add to Task API: Send email when task assigned (RabbitMQ). Publish task events to Kafka for analytics. Build notification service.', taskType: 'practice', estimatedMinutes: 240, outcome: 'Full async architecture' },
  { topic: 'Message Queues Review', description: 'RabbitMQ vs Kafka comparison, patterns review', taskType: 'revise', estimatedMinutes: 150, outcome: 'Message queues mastered' },
  { topic: 'Week 53-54 Complete!', description: 'Redis, RabbitMQ, Kafka - all async/caching skills achieved', taskType: 'revise', estimatedMinutes: 120, outcome: 'Scalability skills complete' },

  // Week 55-56: Microservices & Spring Cloud (14 days) - continues as before
  { topic: 'Microservices Introduction', description: 'Monolith vs microservices, benefits, challenges, when to use', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand microservices' },
  { topic: 'Service Design', description: 'Bounded contexts, service boundaries, domain-driven design', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design services properly' },
  { topic: 'Spring Cloud Overview', description: 'Spring Cloud ecosystem, Netflix OSS', taskType: 'learn', estimatedMinutes: 90, outcome: 'Understand Spring Cloud' },
  { topic: 'Service Discovery', description: 'Eureka server, service registration, discovery client', taskType: 'learn', estimatedMinutes: 180, outcome: 'Set up service discovery' },
  { topic: 'API Gateway', description: 'Spring Cloud Gateway, routing, filters, load balancing', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement API gateway' },
  { topic: 'Config Server', description: 'Centralized configuration, Spring Cloud Config', taskType: 'learn', estimatedMinutes: 150, outcome: 'Externalize config' },
  { topic: 'Week 55 Review', description: 'Microservices fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Microservices basics solid' },

  { topic: 'Circuit Breaker', description: 'Resilience4j, circuit breaker pattern, fallback methods', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle failures gracefully' },
  { topic: 'Distributed Tracing', description: 'Sleuth, Zipkin, correlation IDs', taskType: 'learn', estimatedMinutes: 120, outcome: 'Trace distributed requests' },
  { topic: 'Microservices Practice', description: 'Break monolith into 3 microservices with gateway', taskType: 'practice', estimatedMinutes: 240, outcome: 'Microservices communicating' },
  { topic: 'Service Communication', description: 'REST vs messaging, synchronous vs asynchronous', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose communication style' },
  { topic: 'Microservices Testing', description: 'Contract testing, integration testing in microservices', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test microservices' },
  { topic: 'Microservices Project', description: 'Complete microservices setup with all patterns', taskType: 'practice', estimatedMinutes: 240, outcome: 'Production microservices ready' },
  { topic: 'Phase 5 Complete!', description: 'Backend mastery achieved - Spring Boot, Security, Microservices, Redis, Kafka!', taskType: 'revise', estimatedMinutes: 180, outcome: 'Backend phase completed - SCALABILITY EXPERT!' },
];