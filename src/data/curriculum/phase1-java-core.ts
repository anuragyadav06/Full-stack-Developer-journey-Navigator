// Phase 1: Java Core Mastery (Weeks 1-8) - Jan 24 - Mar 20, 2026
// Includes revisiting arrays, strings, recursion at intermediate level

import { TaskType } from '../roadmapData';

export interface CurriculumTask {
  topic: string;
  description: string;
  taskType: TaskType;
  estimatedMinutes: number;
  outcome: string;
}

export const phase1JavaCore: CurriculumTask[] = [
  // Week 1: Java Setup & Basics
  { topic: 'Java Environment Setup', description: 'Install JDK 17+, set up IntelliJ IDEA, understand Java ecosystem and build tools', taskType: 'learn', estimatedMinutes: 120, outcome: 'Working Java development environment with IntelliJ' },
  { topic: 'Hello World & Basic Syntax', description: 'Write your first Java program, understand compilation process, JVM architecture basics', taskType: 'learn', estimatedMinutes: 90, outcome: 'Understand Java program structure and execution' },
  { topic: 'Variables & Data Types', description: 'Primitive types (int, double, boolean, char), type casting, variable naming conventions', taskType: 'learn', estimatedMinutes: 120, outcome: 'Master Java data types and memory concepts' },
  { topic: 'Operators & Expressions', description: 'Arithmetic, logical, comparison, bitwise operators, operator precedence', taskType: 'learn', estimatedMinutes: 90, outcome: 'Write complex expressions confidently' },
  { topic: 'Practice: Basic Programs', description: 'Solve 10 basic Java problems: temperature converter, area calculator, simple interest', taskType: 'practice', estimatedMinutes: 150, outcome: '10 problems solved with clean code' },
  { topic: 'Control Flow: if-else', description: 'Conditional statements, nested conditions, ternary operator', taskType: 'learn', estimatedMinutes: 90, outcome: 'Write branching logic for any scenario' },
  { topic: 'Week 1 Review', description: 'Review all concepts, solve 5 mixed problems, identify weak areas', taskType: 'revise', estimatedMinutes: 120, outcome: 'Solidify week 1 concepts' },

  // Week 2: Control Flow & Loops
  { topic: 'Switch Statements', description: 'Switch-case, enhanced switch (Java 14+), pattern matching preview', taskType: 'learn', estimatedMinutes: 90, outcome: 'Use switch effectively for multiple conditions' },
  { topic: 'For Loops', description: 'For loop syntax, loop control (break, continue), nested loops', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write efficient iteration logic' },
  { topic: 'While & Do-While Loops', description: 'While loops, do-while, choosing the right loop, avoiding infinite loops', taskType: 'learn', estimatedMinutes: 90, outcome: 'Choose right loop type for each situation' },
  { topic: 'Loop Practice Intensive', description: 'Pattern printing (pyramid, diamond), number series, loop optimization', taskType: 'practice', estimatedMinutes: 180, outcome: '15 loop problems solved with optimal solutions' },
  { topic: 'Arrays Fundamentals (Intermediate)', description: 'Array declaration, initialization, traversal, common pitfalls, memory layout', taskType: 'learn', estimatedMinutes: 150, outcome: 'Deep understanding of array mechanics' },
  { topic: 'Array Operations', description: 'Linear search, finding min/max, reversing arrays, copying arrays', taskType: 'practice', estimatedMinutes: 150, outcome: 'Perform core array operations efficiently' },
  { topic: 'Week 2 Project: Grade Calculator', description: 'Build a student grade calculator with arrays and loops', taskType: 'build', estimatedMinutes: 180, outcome: 'Working grade calculator application' },

  // Week 3: Methods & Recursion (Intermediate)
  { topic: 'Methods in Java', description: 'Method syntax, parameters (by value), return types, method stack', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write reusable, well-structured methods' },
  { topic: 'Method Overloading', description: 'Overloading rules, varargs, method resolution', taskType: 'learn', estimatedMinutes: 90, outcome: 'Implement method overloading correctly' },
  { topic: 'Recursion Fundamentals (Intermediate)', description: 'Recursive thinking, call stack visualization, base case importance', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand recursion mechanics deeply' },
  { topic: 'Recursion Practice I', description: 'Factorial, Fibonacci, sum of digits, power function', taskType: 'practice', estimatedMinutes: 180, outcome: '8 recursive problems with complexity analysis' },
  { topic: 'Recursion Practice II', description: 'Array recursion, string recursion, backtracking intro', taskType: 'practice', estimatedMinutes: 180, outcome: '8 more recursive problems solved' },
  { topic: 'Recursion vs Iteration', description: 'When to use recursion, tail recursion, converting between approaches', taskType: 'learn', estimatedMinutes: 120, outcome: 'Choose right approach for each problem' },
  { topic: 'Week 3 Review', description: 'Methods and recursion comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Solidify week 3 concepts' },

  // Week 4: OOP Foundations
  { topic: 'Introduction to OOP', description: 'OOP paradigm, classes vs objects, real-world modeling', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand OOP mindset' },
  { topic: 'Classes & Objects', description: 'Class definition, constructors, this keyword, object lifecycle', taskType: 'learn', estimatedMinutes: 150, outcome: 'Create and use custom classes' },
  { topic: 'Encapsulation', description: 'Access modifiers (private, public, protected), getters/setters, data hiding', taskType: 'learn', estimatedMinutes: 120, outcome: 'Apply encapsulation principles' },
  { topic: 'Inheritance', description: 'extends keyword, super keyword, constructor chaining, IS-A relationship', taskType: 'learn', estimatedMinutes: 150, outcome: 'Build inheritance hierarchies' },
  { topic: 'Polymorphism', description: 'Method overriding, dynamic dispatch, runtime polymorphism', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use polymorphism effectively' },
  { topic: 'OOP Practice', description: 'Design a Vehicle hierarchy, implement shape classes', taskType: 'practice', estimatedMinutes: 180, outcome: 'OOP design skills demonstrated' },
  { topic: 'Week 4 Review', description: 'OOP fundamentals comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'OOP foundation solid' },

  // Week 5: Advanced OOP
  { topic: 'Abstraction', description: 'Abstract classes, abstract methods, when to use abstraction', taskType: 'learn', estimatedMinutes: 120, outcome: 'Design with abstraction' },
  { topic: 'Interfaces', description: 'Interface definition, multiple inheritance, default methods', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use interfaces for contracts' },
  { topic: 'Abstract vs Interface', description: 'When to use which, design decisions, real-world examples', taskType: 'learn', estimatedMinutes: 90, outcome: 'Choose right abstraction mechanism' },
  { topic: 'Static & Final Keywords', description: 'Static members, static blocks, final variables/methods/classes, constants', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use static and final correctly' },
  { topic: 'Inner Classes', description: 'Nested classes, anonymous classes, lambda preview', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand inner class use cases' },
  { topic: 'OOP Design Practice', description: 'Design and implement a Library Management System (console)', taskType: 'build', estimatedMinutes: 240, outcome: 'Complete OOP system implemented' },
  { topic: 'Week 5 Review', description: 'Advanced OOP review, SOLID principles intro', taskType: 'revise', estimatedMinutes: 150, outcome: 'Advanced OOP mastery' },

  // Week 6: Exception Handling & Strings (Intermediate)
  { topic: 'Exception Handling Basics', description: 'try-catch, finally, exception hierarchy, checked vs unchecked', taskType: 'learn', estimatedMinutes: 120, outcome: 'Handle exceptions properly' },
  { topic: 'Exception Best Practices', description: 'Custom exceptions, exception chaining, when to throw vs catch', taskType: 'learn', estimatedMinutes: 90, outcome: 'Apply exception handling best practices' },
  { topic: 'String Class Deep Dive (Intermediate)', description: 'String immutability, String pool, string methods, performance', taskType: 'learn', estimatedMinutes: 150, outcome: 'Deep understanding of String class' },
  { topic: 'StringBuilder & StringBuffer', description: 'Mutable strings, when to use which, performance comparison', taskType: 'learn', estimatedMinutes: 90, outcome: 'Choose right string class' },
  { topic: 'String Problems Practice', description: 'Palindrome, anagram, string manipulation, pattern matching basics', taskType: 'practice', estimatedMinutes: 180, outcome: '12 string problems with edge cases' },
  { topic: 'String Algorithm Practice', description: 'Reverse words, longest substring, character frequency', taskType: 'practice', estimatedMinutes: 180, outcome: '10 algorithm problems on strings' },
  { topic: 'Week 6 Review', description: 'Exceptions and Strings comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Week 6 concepts solid' },

  // Week 7: Collections Framework
  { topic: 'Collections Overview', description: 'Collection interface, List/Set/Map hierarchy, choosing collections', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand collections framework' },
  { topic: 'ArrayList Deep Dive', description: 'ArrayList internals, resizing, performance characteristics', taskType: 'learn', estimatedMinutes: 120, outcome: 'Master ArrayList usage' },
  { topic: 'LinkedList', description: 'LinkedList implementation, when to use, comparison with ArrayList', taskType: 'learn', estimatedMinutes: 120, outcome: 'Know when to use LinkedList' },
  { topic: 'HashSet & TreeSet', description: 'Set implementations, hashing concepts, ordering', taskType: 'learn', estimatedMinutes: 120, outcome: 'Work with Set effectively' },
  { topic: 'HashMap & TreeMap', description: 'Map implementations, key-value pairs, hash collisions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master Map operations' },
  { topic: 'Collections Practice', description: 'Solve 15 problems using various collections', taskType: 'practice', estimatedMinutes: 180, outcome: '15 collection problems solved' },
  { topic: 'Week 7 Review', description: 'Collections comprehensive review with performance analysis', taskType: 'revise', estimatedMinutes: 120, outcome: 'Collections mastery' },

  // Week 8: Advanced Java Features
  { topic: 'Generics', description: 'Generic classes, generic methods, bounded types, wildcards', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write type-safe generic code' },
  { topic: 'Lambda Expressions', description: 'Functional interfaces, lambda syntax, method references', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use lambdas effectively' },
  { topic: 'Streams API Basics', description: 'Creating streams, intermediate operations, terminal operations', taskType: 'learn', estimatedMinutes: 150, outcome: 'Process collections with streams' },
  { topic: 'Streams Practice', description: 'Filter, map, reduce, collect patterns with real problems', taskType: 'practice', estimatedMinutes: 180, outcome: 'Stream operations mastery' },
  { topic: 'File I/O', description: 'Reading/writing files, BufferedReader/Writer, try-with-resources', taskType: 'learn', estimatedMinutes: 120, outcome: 'Handle file operations confidently' },
  { topic: 'Java 8+ Features', description: 'Optional, Date/Time API, var keyword, records preview', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use modern Java features' },
  { topic: 'Phase 1 Complete!', description: 'Java Core comprehensive review and assessment', taskType: 'revise', estimatedMinutes: 180, outcome: 'Java Core mastered - ready for DSA' },
];
