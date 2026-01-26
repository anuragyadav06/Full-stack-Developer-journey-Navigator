// Phase 4: Frontend Development (Weeks 27-38) - Jul 25 - Oct 16, 2026

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase4Frontend: CurriculumTask[] = [
  // Week 27: HTML Fundamentals
  { topic: 'HTML Introduction', description: 'HTML5 structure, semantic elements, document flow', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand HTML fundamentals' },
  { topic: 'HTML Elements', description: 'Headings, paragraphs, lists, links, images', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use common HTML elements' },
  { topic: 'HTML Forms', description: 'Form elements, input types, validation attributes', taskType: 'learn', estimatedMinutes: 150, outcome: 'Create functional forms' },
  { topic: 'HTML Tables', description: 'Table structure, colspan, rowspan, accessibility', taskType: 'learn', estimatedMinutes: 90, outcome: 'Structure tabular data' },
  { topic: 'Semantic HTML', description: 'header, nav, main, article, section, footer', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write accessible markup' },
  { topic: 'HTML Practice', description: 'Build 3 static web pages', taskType: 'practice', estimatedMinutes: 180, outcome: '3 web pages created' },
  { topic: 'Week 27 Review', description: 'HTML fundamentals review', taskType: 'revise', estimatedMinutes: 90, outcome: 'HTML skills solid' },

  // Week 28: CSS Fundamentals
  { topic: 'CSS Introduction', description: 'CSS syntax, selectors, cascade, specificity', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand CSS fundamentals' },
  { topic: 'CSS Box Model', description: 'Margin, padding, border, content, box-sizing', taskType: 'learn', estimatedMinutes: 120, outcome: 'Master box model' },
  { topic: 'CSS Typography', description: 'Fonts, text properties, Google Fonts integration', taskType: 'learn', estimatedMinutes: 90, outcome: 'Style text effectively' },
  { topic: 'CSS Colors & Backgrounds', description: 'Color systems, gradients, background properties', taskType: 'learn', estimatedMinutes: 90, outcome: 'Apply colors and backgrounds' },
  { topic: 'CSS Display & Position', description: 'Display types, positioning, z-index', taskType: 'learn', estimatedMinutes: 150, outcome: 'Control element positioning' },
  { topic: 'CSS Practice', description: 'Style the 3 pages from Week 27', taskType: 'practice', estimatedMinutes: 180, outcome: 'Pages styled professionally' },
  { topic: 'Week 28 Review', description: 'CSS fundamentals review', taskType: 'revise', estimatedMinutes: 90, outcome: 'CSS basics mastered' },

  // Week 29: CSS Layout
  { topic: 'Flexbox Introduction', description: 'Flex container, flex items, main/cross axis', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand flexbox model' },
  { topic: 'Flexbox Properties', description: 'justify-content, align-items, flex-grow/shrink/basis', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use all flex properties' },
  { topic: 'Flexbox Practice', description: 'Build navigation, card layouts, holy grail layout', taskType: 'practice', estimatedMinutes: 180, outcome: 'Common layouts implemented' },
  { topic: 'CSS Grid Introduction', description: 'Grid container, tracks, grid lines', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand grid model' },
  { topic: 'CSS Grid Properties', description: 'grid-template, gap, grid-area, auto-fit/fill', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use grid effectively' },
  { topic: 'Grid Practice', description: 'Build dashboard layout, photo gallery, magazine layout', taskType: 'practice', estimatedMinutes: 180, outcome: 'Complex layouts created' },
  { topic: 'Week 29 Review', description: 'CSS layout review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Layout skills solid' },

  // Week 30: Responsive Design
  { topic: 'Responsive Concepts', description: 'Mobile-first, viewport, breakpoints', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand responsive design' },
  { topic: 'Media Queries', description: 'Breakpoint syntax, common breakpoints, mobile-first approach', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write media queries' },
  { topic: 'Responsive Images', description: 'srcset, sizes, picture element, lazy loading', taskType: 'learn', estimatedMinutes: 90, outcome: 'Optimize images for devices' },
  { topic: 'Responsive Navigation', description: 'Hamburger menu, collapsible nav, mobile patterns', taskType: 'practice', estimatedMinutes: 180, outcome: 'Responsive nav implemented' },
  { topic: 'CSS Variables', description: 'Custom properties, theming, dark mode', taskType: 'learn', estimatedMinutes: 120, outcome: 'Use CSS variables' },
  { topic: 'Responsive Project', description: 'Build fully responsive portfolio page', taskType: 'build', estimatedMinutes: 180, outcome: 'Responsive portfolio complete' },
  { topic: 'Week 30 Review', description: 'Responsive design review', taskType: 'revise', estimatedMinutes: 90, outcome: 'Responsive skills solid' },

  // Week 31: JavaScript Fundamentals
  { topic: 'JavaScript Introduction', description: 'JS in browser, console, script tag, strict mode', taskType: 'learn', estimatedMinutes: 120, outcome: 'Run JavaScript code' },
  { topic: 'Variables & Data Types', description: 'let, const, var, primitives, objects', taskType: 'learn', estimatedMinutes: 120, outcome: 'Declare and use variables' },
  { topic: 'Operators & Control Flow', description: 'Operators, if/else, switch, loops', taskType: 'learn', estimatedMinutes: 120, outcome: 'Control program flow' },
  { topic: 'Functions', description: 'Function declaration, expression, arrow functions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Write reusable functions' },
  { topic: 'Arrays', description: 'Array methods: map, filter, reduce, forEach', taskType: 'learn', estimatedMinutes: 150, outcome: 'Process arrays functionally' },
  { topic: 'Objects', description: 'Object creation, access, destructuring, spread', taskType: 'learn', estimatedMinutes: 150, outcome: 'Work with objects' },
  { topic: 'Week 31 Review', description: 'JS fundamentals review', taskType: 'revise', estimatedMinutes: 120, outcome: 'JS basics solid' },

  // Week 32: JavaScript Advanced
  { topic: 'DOM Manipulation', description: 'Selecting elements, modifying content, attributes', taskType: 'learn', estimatedMinutes: 150, outcome: 'Modify web pages with JS' },
  { topic: 'Events', description: 'Event listeners, event object, bubbling, delegation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle user interactions' },
  { topic: 'DOM Practice', description: 'Build interactive to-do list', taskType: 'practice', estimatedMinutes: 180, outcome: 'Interactive app created' },
  { topic: 'Asynchronous JavaScript', description: 'Callbacks, setTimeout, event loop', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand async concepts' },
  { topic: 'Promises', description: 'Promise creation, chaining, error handling', taskType: 'learn', estimatedMinutes: 150, outcome: 'Work with promises' },
  { topic: 'Async/Await', description: 'async functions, await, error handling', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write async code cleanly' },
  { topic: 'Week 32 Review', description: 'Advanced JS review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Advanced JS confident' },

  // Week 33: Fetch API & Modern JS
  { topic: 'Fetch API', description: 'Making HTTP requests, response handling', taskType: 'learn', estimatedMinutes: 150, outcome: 'Fetch data from APIs' },
  { topic: 'Working with JSON', description: 'Parse, stringify, API data handling', taskType: 'learn', estimatedMinutes: 90, outcome: 'Handle JSON data' },
  { topic: 'API Integration Practice', description: 'Build weather app using public API', taskType: 'practice', estimatedMinutes: 180, outcome: 'Weather app working' },
  { topic: 'ES6+ Features', description: 'Template literals, modules, classes, optional chaining', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use modern JS features' },
  { topic: 'Error Handling', description: 'try/catch, custom errors, error boundaries', taskType: 'learn', estimatedMinutes: 120, outcome: 'Handle errors gracefully' },
  { topic: 'LocalStorage', description: 'Storing data locally, JSON serialization', taskType: 'learn', estimatedMinutes: 90, outcome: 'Persist data in browser' },
  { topic: 'Week 33 Review', description: 'Modern JS review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Modern JS mastered' },

  // Week 34: React Introduction
  { topic: 'React Introduction', description: 'What is React, virtual DOM, component thinking', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand React concepts' },
  { topic: 'React Setup', description: 'Create React app with Vite, project structure', taskType: 'learn', estimatedMinutes: 90, outcome: 'React project running' },
  { topic: 'JSX', description: 'JSX syntax, expressions, conditional rendering', taskType: 'learn', estimatedMinutes: 120, outcome: 'Write JSX confidently' },
  { topic: 'Components', description: 'Functional components, component composition', taskType: 'learn', estimatedMinutes: 150, outcome: 'Create reusable components' },
  { topic: 'Props', description: 'Passing props, children, prop types', taskType: 'learn', estimatedMinutes: 120, outcome: 'Pass data between components' },
  { topic: 'Component Practice', description: 'Build card, button, and list components', taskType: 'practice', estimatedMinutes: 180, outcome: 'Component library started' },
  { topic: 'Week 34 Review', description: 'React basics review', taskType: 'revise', estimatedMinutes: 90, outcome: 'React fundamentals solid' },

  // Week 35: React State & Events
  { topic: 'useState Hook', description: 'State management, updating state, derived state', taskType: 'learn', estimatedMinutes: 150, outcome: 'Manage component state' },
  { topic: 'Handling Events', description: 'Event handlers, synthetic events, forms', taskType: 'learn', estimatedMinutes: 120, outcome: 'Handle user events' },
  { topic: 'Forms in React', description: 'Controlled components, form validation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Build React forms' },
  { topic: 'State Practice', description: 'Build counter, form, and toggle components', taskType: 'practice', estimatedMinutes: 180, outcome: 'Stateful components working' },
  { topic: 'Lifting State Up', description: 'Sharing state between components', taskType: 'learn', estimatedMinutes: 120, outcome: 'Share state properly' },
  { topic: 'useEffect Hook', description: 'Side effects, dependencies, cleanup', taskType: 'learn', estimatedMinutes: 150, outcome: 'Handle side effects' },
  { topic: 'Week 35 Review', description: 'State management review', taskType: 'revise', estimatedMinutes: 120, outcome: 'State concepts solid' },

  // Week 36: React Advanced Hooks
  { topic: 'useEffect Deep Dive', description: 'Data fetching, subscriptions, race conditions', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master useEffect patterns' },
  { topic: 'useRef Hook', description: 'DOM references, mutable values, focus management', taskType: 'learn', estimatedMinutes: 90, outcome: 'Use refs effectively' },
  { topic: 'useMemo & useCallback', description: 'Performance optimization, memoization', taskType: 'learn', estimatedMinutes: 150, outcome: 'Optimize React performance' },
  { topic: 'Custom Hooks', description: 'Extracting logic, hook patterns', taskType: 'learn', estimatedMinutes: 150, outcome: 'Create custom hooks' },
  { topic: 'useContext', description: 'Context API, avoiding prop drilling', taskType: 'learn', estimatedMinutes: 150, outcome: 'Share global state' },
  { topic: 'Hooks Practice', description: 'Build a data fetching hook, form hook', taskType: 'practice', estimatedMinutes: 180, outcome: 'Custom hooks created' },
  { topic: 'Week 36 Review', description: 'Advanced hooks review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Hooks mastered' },

  // Week 37: React Routing & State Management
  { topic: 'React Router Setup', description: 'BrowserRouter, Routes, Route, Link', taskType: 'learn', estimatedMinutes: 120, outcome: 'Add routing to React app' },
  { topic: 'Dynamic Routes', description: 'Route parameters, nested routes, outlet', taskType: 'learn', estimatedMinutes: 120, outcome: 'Create dynamic routes' },
  { topic: 'Navigation', description: 'useNavigate, useLocation, protected routes', taskType: 'learn', estimatedMinutes: 120, outcome: 'Navigate programmatically' },
  { topic: 'State Management Concepts', description: 'When to use context vs state vs external', taskType: 'learn', estimatedMinutes: 90, outcome: 'Choose right state solution' },
  { topic: 'React Query Introduction', description: 'Server state, caching, refetching', taskType: 'learn', estimatedMinutes: 150, outcome: 'Manage server state' },
  { topic: 'Routing Practice', description: 'Build multi-page app with protected routes', taskType: 'practice', estimatedMinutes: 180, outcome: 'Complete routing implemented' },
  { topic: 'Week 37 Review', description: 'Routing and state review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Routing confident' },

  // Week 38: React Project
  { topic: 'Frontend Project: Planning', description: 'Design a task management app UI', taskType: 'build', estimatedMinutes: 120, outcome: 'Project plan complete' },
  { topic: 'Frontend Project: Components', description: 'Build all UI components', taskType: 'build', estimatedMinutes: 180, outcome: 'Components created' },
  { topic: 'Frontend Project: State', description: 'Implement state management', taskType: 'build', estimatedMinutes: 180, outcome: 'State working' },
  { topic: 'Frontend Project: Routing', description: 'Add navigation and routes', taskType: 'build', estimatedMinutes: 150, outcome: 'Routing complete' },
  { topic: 'Frontend Project: Polish', description: 'Styling, responsiveness, UX improvements', taskType: 'build', estimatedMinutes: 180, outcome: 'Project polished' },
  { topic: 'Frontend Phase Review', description: 'Comprehensive frontend review', taskType: 'revise', estimatedMinutes: 150, outcome: 'Frontend skills assessed' },
  { topic: 'Phase 4 Complete!', description: 'Frontend mastery achieved - ready for backend', taskType: 'revise', estimatedMinutes: 120, outcome: 'Frontend phase completed' },
];
