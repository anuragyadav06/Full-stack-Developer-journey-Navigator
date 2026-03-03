import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase3Database: CurriculumTask[] = [

  // Week 22: SQL Fundamentals
  { topic: 'Database Concepts', description: 'RDBMS concepts, tables, relationships, keys', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand relational database fundamentals' },
  { topic: 'MySQL Setup', description: 'Install MySQL, MySQL Workbench, connect to database', taskType: 'learn', estimatedMinutes: 90, outcome: 'Working MySQL environment' },
  { topic: 'SQL Basics: SELECT', description: 'SELECT statements, WHERE clause, ORDER BY', taskType: 'learn', estimatedMinutes: 120, outcome: 'Query data from tables' },
  { topic: 'SQL: Filtering & Sorting', description: 'LIKE, IN, BETWEEN, NULL handling, LIMIT', taskType: 'learn', estimatedMinutes: 120, outcome: 'Filter data effectively' },
  { topic: 'SQL Practice I', description: 'Solve 15 basic SELECT problems', taskType: 'practice', estimatedMinutes: 180, outcome: '15 query problems solved' },
  { topic: 'SQL: Aggregate Functions', description: 'COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use aggregates confidently' },
  { topic: 'Week 22 Review', description: 'SQL fundamentals review with practice', taskType: 'revise', estimatedMinutes: 120, outcome: 'SQL basics solid' },

  // Week 23: Joins & Advanced Queries
  { topic: 'SQL: INNER JOIN', description: 'Inner join syntax, joining multiple tables', taskType: 'learn', estimatedMinutes: 150, outcome: 'Join tables effectively' },
  { topic: 'SQL: LEFT/RIGHT JOIN', description: 'Outer joins, handling NULL results', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use outer joins correctly' },
  { topic: 'SQL: Self Join & Cross Join', description: 'Self join patterns, cross join use cases', taskType: 'learn', estimatedMinutes: 120, outcome: 'Apply advanced join types' },
  { topic: 'Join Practice', description: 'Solve 15 join problems of varying complexity', taskType: 'practice', estimatedMinutes: 180, outcome: '15 join problems completed' },
  { topic: 'SQL: Subqueries', description: 'Scalar subqueries, correlated subqueries, EXISTS', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write complex subqueries' },
  { topic: 'Advanced Query Practice', description: 'Complex queries combining joins and subqueries', taskType: 'practice', estimatedMinutes: 180, outcome: '10 advanced queries written' },
  { topic: 'Week 23 Review', description: 'Joins and advanced queries review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Query writing confident' },

  // Week 24: Database Design
  { topic: 'Database Design Principles', description: 'ER diagrams, entities, relationships, cardinality', taskType: 'learn', estimatedMinutes: 150, outcome: 'Design databases visually' },
  { topic: 'Normalization', description: '1NF, 2NF, 3NF, when to denormalize', taskType: 'learn', estimatedMinutes: 150, outcome: 'Normalize databases properly' },
  { topic: 'Primary & Foreign Keys', description: 'Key constraints, referential integrity', taskType: 'learn', estimatedMinutes: 120, outcome: 'Define proper relationships' },
  { topic: 'Data Types & Constraints', description: 'Choosing data types, NOT NULL, UNIQUE, CHECK', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design robust schemas' },
  { topic: 'Design Practice', description: 'Design schema for e-commerce system', taskType: 'practice', estimatedMinutes: 180, outcome: 'Complete schema designed' },
  { topic: 'Indexes', description: 'Index types, when to index, query optimization', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimize with indexes' },
  { topic: 'Week 24 Review', description: 'Database design review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Design skills solid' },

  // Week 25: DML & DCL
  { topic: 'INSERT Statements', description: 'Single row, bulk insert, INSERT...SELECT', taskType: 'learn', estimatedMinutes: 90, outcome: 'Insert data efficiently' },
  { topic: 'UPDATE & DELETE', description: 'Update patterns, safe delete, transactions preview', taskType: 'learn', estimatedMinutes: 120, outcome: 'Modify data safely' },
  { topic: 'DDL: CREATE & ALTER', description: 'Create tables, modify schema, drop objects', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage database schema' },
  { topic: 'Transactions', description: 'ACID properties, COMMIT, ROLLBACK, isolation levels', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle transactions' },
  { topic: 'Views & Stored Procedures', description: 'Creating views, basic stored procedures', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use database objects' },
  { topic: 'SQL Comprehensive Practice', description: 'Full database project: design, create, populate, query', taskType: 'practice', estimatedMinutes: 180, outcome: 'Complete database project' },
  { topic: 'Week 25 Review', description: 'DML and DDL review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Database manipulation confident' },

  // Week 26: JDBC
  { topic: 'JDBC Introduction', description: 'JDBC API, drivers, connection architecture', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand JDBC concepts' },
  { topic: 'JDBC Connection', description: 'DriverManager, Connection, connection pooling basics', taskType: 'learn', estimatedMinutes: 120, outcome: 'Connect Java to MySQL' },
  { topic: 'JDBC Statements', description: 'Statement, PreparedStatement, SQL injection prevention', taskType: 'learn', estimatedMinutes: 150, outcome: 'Execute queries from Java' },
  { topic: 'JDBC ResultSet', description: 'Processing results, cursor movement, data extraction', taskType: 'learn', estimatedMinutes: 120, outcome: 'Handle query results' },
  { topic: 'JDBC CRUD Operations', description: 'Implement full CRUD with JDBC', taskType: 'practice', estimatedMinutes: 180, outcome: 'CRUD application working' },
  { topic: 'JDBC Transactions', description: 'Transaction handling in JDBC, batch processing', taskType: 'learn', estimatedMinutes: 120, outcome: 'Manage transactions in code' },
  { topic: 'Week 26 Review', description: 'JDBC comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JDBC skills solid' },

  // Week 27: Database Project & Review
  { topic: 'Project: Library Database', description: 'Design complete library management database', taskType: 'build', estimatedMinutes: 180, outcome: 'Database schema complete' },
  { topic: 'Project: JDBC Integration', description: 'Connect Java application to library database', taskType: 'build', estimatedMinutes: 180, outcome: 'Java-DB connection working' },
  { topic: 'Project: CRUD Implementation', description: 'Implement all CRUD operations for library', taskType: 'build', estimatedMinutes: 180, outcome: 'CRUD operations complete' },
  { topic: 'Project: Advanced Queries', description: 'Add reporting queries, search functionality', taskType: 'build', estimatedMinutes: 180, outcome: 'Advanced features added' },
  { topic: 'Project: Testing & Polish', description: 'Test all functionality, handle edge cases', taskType: 'build', estimatedMinutes: 150, outcome: 'Project tested and working' },
  { topic: 'Database Phase Review', description: 'Comprehensive database skills review', taskType: 'revise', estimatedMinutes: 150, outcome: 'Database skills assessed' },
  { topic: 'Phase 3 Complete!', description: 'Database mastery achieved - ready for frontend', taskType: 'revise', estimatedMinutes: 120, outcome: 'Database phase completed' },

];