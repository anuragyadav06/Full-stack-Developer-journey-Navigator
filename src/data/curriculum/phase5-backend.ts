// Phase 5: Backend Development with Spring Boot (Weeks 39-54) - Oct 17, 2026 - Jan 29, 2027

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
  { topic: 'One-to-One Mapping', description: '@OneToOne, join columns, cascading', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map one-to-one relations' },
  { topic: 'One-to-Many & Many-to-One', description: '@OneToMany, @ManyToOne, bidirectional', taskType: 'learn', estimatedMinutes: 180, outcome: 'Map parent-child relations' },
  { topic: 'Many-to-Many', description: '@ManyToMany, join tables, managing both sides', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map many-to-many' },
  { topic: 'Fetch Types', description: 'Lazy vs Eager loading, N+1 problem', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize fetching' },
  { topic: 'Cascade Operations', description: 'Cascade types, orphan removal', taskType: 'learn', estimatedMinutes: 120, outcome: 'Handle cascading' },
  { topic: 'Relationships Practice', description: 'Build blog API with relationships', taskType: 'practice', estimatedMinutes: 180, outcome: 'Complex relations working' },
  { topic: 'Week 44 Review', description: 'JPA relationships review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Relationships solid' },

  // Week 45: Advanced JPA
  { topic: 'Query Methods', description: 'Derived queries, complex method names', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write query methods' },
  { topic: '@Query Annotation', description: 'JPQL queries, native queries, parameters', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write custom queries' },
  { topic: 'Pagination & Sorting', description: 'Pageable, Sort, Page object', taskType: 'learn', estimatedMinutes: 120, outcome: 'Paginate results' },
  { topic: 'Specifications', description: 'Dynamic queries with Specifications', taskType: 'learn', estimatedMinutes: 150, outcome: 'Build dynamic queries' },
  { topic: 'Auditing', description: '@CreatedDate, @LastModifiedDate, auditor', taskType: 'learn', estimatedMinutes: 90, outcome: 'Add audit fields' },
  { topic: 'Advanced JPA Practice', description: 'Add pagination, search to blog API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Advanced features working' },
  { topic: 'Week 45 Review', description: 'Advanced JPA review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JPA mastered' },

  // Week 46: Service Layer & DTOs
  { topic: 'Service Layer Pattern', description: '@Service, business logic separation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement service layer' },
  { topic: 'DTO Pattern', description: 'Request/Response DTOs, why not expose entities', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use DTOs properly' },
  { topic: 'ModelMapper/MapStruct', description: 'Object mapping libraries, reducing boilerplate', taskType: 'learn', estimatedMinutes: 150, outcome: 'Map objects automatically' },
  { topic: 'Transaction Management', description: '@Transactional, propagation, isolation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Manage transactions' },
  { topic: 'Layer Practice', description: 'Refactor API with proper layering', taskType: 'practice', estimatedMinutes: 180, outcome: 'Clean architecture applied' },
  { topic: 'Best Practices', description: 'API design, naming, versioning', taskType: 'learn', estimatedMinutes: 120, outcome: 'Follow best practices' },
  { topic: 'Week 46 Review', description: 'Service layer review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Architecture solid' },

  // Week 47: Spring Security Basics
  { topic: 'Security Introduction', description: 'Authentication vs Authorization, Spring Security', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand security concepts' },
  { topic: 'Security Configuration', description: 'SecurityFilterChain, default security', taskType: 'learn', estimatedMinutes: 150, outcome: 'Configure security' },
  { topic: 'Authentication', description: 'UserDetailsService, password encoding', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement authentication' },
  { topic: 'Authorization', description: 'Roles, authorities, method security', taskType: 'learn', estimatedMinutes: 150, outcome: 'Control access' },
  { topic: 'Security Practice', description: 'Add basic auth to API', taskType: 'practice', estimatedMinutes: 180, outcome: 'API secured' },
  { topic: 'CORS Configuration', description: 'Cross-origin requests, CORS config', taskType: 'learn', estimatedMinutes: 90, outcome: 'Handle CORS' },
  { topic: 'Week 47 Review', description: 'Security basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Security basics solid' },

  // Week 48: JWT Authentication
  { topic: 'JWT Concepts', description: 'JWT structure, claims, signing', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand JWT' },
  { topic: 'JWT Implementation', description: 'Generate, validate, parse tokens', taskType: 'learn', estimatedMinutes: 180, outcome: 'Create JWT tokens' },
  { topic: 'JWT Filter', description: 'Custom security filter, token extraction', taskType: 'learn', estimatedMinutes: 180, outcome: 'Filter requests' },
  { topic: 'Login/Register Endpoints', description: 'Auth controller, user registration', taskType: 'learn', estimatedMinutes: 150, outcome: 'Auth endpoints working' },
  { topic: 'Refresh Tokens', description: 'Token refresh flow, security considerations', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement refresh tokens' },
  { topic: 'JWT Practice', description: 'Complete JWT auth implementation', taskType: 'practice', estimatedMinutes: 180, outcome: 'JWT auth complete' },
  { topic: 'Week 48 Review', description: 'JWT authentication review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JWT mastered' },

  // Week 49: Testing
  { topic: 'Testing Introduction', description: 'Unit vs Integration, JUnit 5, testing pyramid', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand testing concepts' },
  { topic: 'Unit Testing', description: 'Testing services, Mockito, mocking dependencies', taskType: 'learn', estimatedMinutes: 180, outcome: 'Write unit tests' },
  { topic: 'Repository Testing', description: '@DataJpaTest, embedded database', taskType: 'learn', estimatedMinutes: 150, outcome: 'Test repositories' },
  { topic: 'Controller Testing', description: '@WebMvcTest, MockMvc, testing endpoints', taskType: 'learn', estimatedMinutes: 180, outcome: 'Test controllers' },
  { topic: 'Integration Testing', description: '@SpringBootTest, test containers', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write integration tests' },
  { topic: 'Testing Practice', description: 'Add comprehensive tests to API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Test suite complete' },
  { topic: 'Week 49 Review', description: 'Testing review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Testing skills solid' },

  // Week 50-54: REST API Project
  { topic: 'API Project: Planning', description: 'Design Task Management API, requirements', taskType: 'build', estimatedMinutes: 120, outcome: 'Project plan complete' },
  { topic: 'API Project: Entity Design', description: 'Design and implement entities', taskType: 'build', estimatedMinutes: 180, outcome: 'Entities created' },
  { topic: 'API Project: Repository Layer', description: 'Implement repositories with custom queries', taskType: 'build', estimatedMinutes: 180, outcome: 'Repositories complete' },
  { topic: 'API Project: Service Layer', description: 'Implement business logic', taskType: 'build', estimatedMinutes: 180, outcome: 'Services working' },
  { topic: 'API Project: Controllers', description: 'Create REST endpoints', taskType: 'build', estimatedMinutes: 180, outcome: 'Endpoints created' },
  { topic: 'API Project: Validation', description: 'Add validation and error handling', taskType: 'build', estimatedMinutes: 150, outcome: 'Validation complete' },
  { topic: 'API Project: Week Review', description: 'Review progress, plan next steps', taskType: 'revise', estimatedMinutes: 90, outcome: 'Week reviewed' },

  { topic: 'API Project: Security Setup', description: 'Add Spring Security configuration', taskType: 'build', estimatedMinutes: 180, outcome: 'Security configured' },
  { topic: 'API Project: JWT Implementation', description: 'Implement JWT authentication', taskType: 'build', estimatedMinutes: 180, outcome: 'JWT working' },
  { topic: 'API Project: Auth Endpoints', description: 'Login, register, refresh token', taskType: 'build', estimatedMinutes: 180, outcome: 'Auth complete' },
  { topic: 'API Project: Authorization', description: 'Role-based access control', taskType: 'build', estimatedMinutes: 150, outcome: 'RBAC implemented' },
  { topic: 'API Project: Testing I', description: 'Unit tests for services', taskType: 'build', estimatedMinutes: 180, outcome: 'Service tests written' },
  { topic: 'API Project: Testing II', description: 'Controller and integration tests', taskType: 'build', estimatedMinutes: 180, outcome: 'All tests passing' },
  { topic: 'API Project: Week Review', description: 'Review security implementation', taskType: 'revise', estimatedMinutes: 90, outcome: 'Security reviewed' },

  { topic: 'API Project: Documentation', description: 'Add Swagger documentation', taskType: 'build', estimatedMinutes: 120, outcome: 'API documented' },
  { topic: 'API Project: Pagination', description: 'Add pagination to list endpoints', taskType: 'build', estimatedMinutes: 120, outcome: 'Pagination working' },
  { topic: 'API Project: Search', description: 'Add search and filter capabilities', taskType: 'build', estimatedMinutes: 180, outcome: 'Search implemented' },
  { topic: 'API Project: Polish', description: 'Code cleanup, refactoring', taskType: 'build', estimatedMinutes: 150, outcome: 'Code polished' },
  { topic: 'API Project: Final Testing', description: 'Comprehensive testing, bug fixes', taskType: 'build', estimatedMinutes: 180, outcome: 'Project tested' },
  { topic: 'Backend Phase Review', description: 'Comprehensive backend review', taskType: 'revise', estimatedMinutes: 180, outcome: 'Backend skills assessed' },
  { topic: 'Phase 5 Complete!', description: 'Backend mastery achieved - ready for full stack', taskType: 'revise', estimatedMinutes: 120, outcome: 'Backend phase completed' },
];
