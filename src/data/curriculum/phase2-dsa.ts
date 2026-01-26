// Phase 2: Data Structures & Algorithms (Weeks 9-20) - Mar 21 - Jun 12, 2026
// Includes revisiting sorting algorithms at intermediate level with complexity analysis

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase2DSA: CurriculumTask[] = [
  // Week 9: Complexity Analysis & Arrays Advanced
  { topic: 'Big O Notation', description: 'Time complexity, space complexity, best/worst/average cases', taskType: 'learn', estimatedMinutes: 150, outcome: 'Analyze any algorithm complexity' },
  { topic: 'Complexity Practice', description: 'Analyze complexity of 10 different algorithms', taskType: 'practice', estimatedMinutes: 120, outcome: 'Complexity analysis skills solid' },
  { topic: 'Arrays: Two Pointer Technique', description: 'Two pointer patterns, opposite direction, same direction', taskType: 'learn', estimatedMinutes: 150, outcome: 'Apply two pointers to array problems' },
  { topic: 'Two Pointer Practice', description: 'Pair sum, three sum, container problems', taskType: 'practice', estimatedMinutes: 180, outcome: '10 two pointer problems solved' },
  { topic: 'Arrays: Sliding Window', description: 'Fixed window, variable window, optimization patterns', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master sliding window technique' },
  { topic: 'Sliding Window Practice', description: 'Maximum subarray, minimum window, longest substring', taskType: 'practice', estimatedMinutes: 180, outcome: '10 sliding window problems' },
  { topic: 'Week 9 Review', description: 'DSA foundations review with LeetCode problems', taskType: 'revise', estimatedMinutes: 120, outcome: 'DSA basics solid' },

  // Week 10: Sorting Algorithms (Intermediate - revisiting basics, adding advanced)
  { topic: 'Bubble Sort Analysis', description: 'Bubble sort implementation, complexity analysis, optimizations', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand bubble sort deeply' },
  { topic: 'Selection Sort Analysis', description: 'Selection sort implementation, complexity, use cases', taskType: 'learn', estimatedMinutes: 90, outcome: 'Master selection sort' },
  { topic: 'Insertion Sort Analysis', description: 'Insertion sort implementation, when it performs well', taskType: 'learn', estimatedMinutes: 90, outcome: 'Know insertion sort strengths' },
  { topic: 'Merge Sort', description: 'Divide and conquer, merge sort implementation, O(n log n)', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement merge sort confidently' },
  { topic: 'Quick Sort', description: 'Partition scheme, pivot selection, average vs worst case', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master quick sort' },
  { topic: 'Sorting Practice', description: 'Implement all sorts, solve sorting-based problems', taskType: 'practice', estimatedMinutes: 180, outcome: '10 sorting problems solved' },
  { topic: 'Week 10 Review', description: 'Sorting algorithms comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Sorting mastery achieved' },

  // Week 11: Searching & Hashing
  { topic: 'Binary Search', description: 'Binary search implementation, variations, edge cases', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master binary search' },
  { topic: 'Binary Search Variants', description: 'Lower/upper bound, search in rotated array, peak finding', taskType: 'learn', estimatedMinutes: 150, outcome: 'Apply binary search variants' },
  { topic: 'Binary Search Practice', description: 'LeetCode binary search problems (easy to medium)', taskType: 'practice', estimatedMinutes: 180, outcome: '12 binary search problems' },
  { topic: 'Hashing Concepts', description: 'Hash functions, collision handling, hash table internals', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand hashing deeply' },
  { topic: 'HashMap Problems', description: 'Two sum variants, frequency counting, grouping anagrams', taskType: 'practice', estimatedMinutes: 180, outcome: '10 hashmap problems' },
  { topic: 'HashSet Problems', description: 'Duplicate detection, intersection, union problems', taskType: 'practice', estimatedMinutes: 150, outcome: '8 hashset problems' },
  { topic: 'Week 11 Review', description: 'Searching and hashing review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Search and hash mastery' },

  // Week 12: Linked Lists
  { topic: 'Singly Linked List', description: 'Node structure, insertion, deletion, traversal', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement singly linked list' },
  { topic: 'Linked List Operations', description: 'Reverse list, find middle, detect cycle', taskType: 'learn', estimatedMinutes: 150, outcome: 'Core linked list algorithms' },
  { topic: 'Doubly Linked List', description: 'Bidirectional traversal, insertion, deletion', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement doubly linked list' },
  { topic: 'Linked List Practice I', description: 'Reverse, merge, find intersection problems', taskType: 'practice', estimatedMinutes: 180, outcome: '10 linked list problems' },
  { topic: 'Linked List Practice II', description: 'Floyd cycle detection, palindrome check, reorder list', taskType: 'practice', estimatedMinutes: 180, outcome: '10 more problems' },
  { topic: 'Circular Linked List', description: 'Circular list implementation and use cases', taskType: 'learn', estimatedMinutes: 90, outcome: 'Understand circular lists' },
  { topic: 'Week 12 Review', description: 'Linked lists comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Linked list mastery' },

  // Week 13: Stacks & Queues
  { topic: 'Stack Fundamentals', description: 'LIFO principle, array/linked list implementation', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement stack from scratch' },
  { topic: 'Stack Applications', description: 'Valid parentheses, expression evaluation, browser history', taskType: 'practice', estimatedMinutes: 180, outcome: '10 stack problems solved' },
  { topic: 'Queue Fundamentals', description: 'FIFO principle, circular queue, deque', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement queue variations' },
  { topic: 'Queue Applications', description: 'BFS preview, task scheduling, sliding window max', taskType: 'practice', estimatedMinutes: 180, outcome: '10 queue problems' },
  { topic: 'Monotonic Stack', description: 'Next greater element, stock span, histogram area', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master monotonic stack pattern' },
  { topic: 'Priority Queue', description: 'Heap-based priority queue, Java PriorityQueue', taskType: 'learn', estimatedMinutes: 150, outcome: 'Use priority queue effectively' },
  { topic: 'Week 13 Review', description: 'Stacks and queues review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Stack/queue mastery' },

  // Week 14: Trees - Basics
  { topic: 'Binary Tree Fundamentals', description: 'Tree terminology, node structure, tree properties', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand binary tree concepts' },
  { topic: 'Tree Traversals', description: 'Inorder, preorder, postorder (recursive)', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement tree traversals' },
  { topic: 'Level Order Traversal', description: 'BFS for trees, level-wise processing', taskType: 'learn', estimatedMinutes: 120, outcome: 'Master level order traversal' },
  { topic: 'Tree Practice I', description: 'Maximum depth, same tree, invert tree', taskType: 'practice', estimatedMinutes: 180, outcome: '10 basic tree problems' },
  { topic: 'Binary Search Tree', description: 'BST property, insertion, search, deletion', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement BST operations' },
  { topic: 'BST Practice', description: 'Validate BST, kth smallest, LCA in BST', taskType: 'practice', estimatedMinutes: 180, outcome: '10 BST problems' },
  { topic: 'Week 14 Review', description: 'Trees fundamental review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Tree basics solid' },

  // Week 15: Trees - Advanced
  { topic: 'Tree Construction', description: 'Build tree from traversals, serialize/deserialize', taskType: 'learn', estimatedMinutes: 150, outcome: 'Construct trees from arrays' },
  { topic: 'Path Problems', description: 'Root to leaf paths, path sum, maximum path sum', taskType: 'practice', estimatedMinutes: 180, outcome: '8 path problems solved' },
  { topic: 'Lowest Common Ancestor', description: 'LCA in binary tree, recursive approach', taskType: 'learn', estimatedMinutes: 120, outcome: 'Find LCA efficiently' },
  { topic: 'Tree Views', description: 'Left view, right view, top view, bottom view', taskType: 'practice', estimatedMinutes: 150, outcome: 'Implement all tree views' },
  { topic: 'Balanced Trees Intro', description: 'AVL tree concepts, rotations overview', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand balancing concepts' },
  { topic: 'Tree Practice II', description: 'Mixed tree problems from LeetCode', taskType: 'practice', estimatedMinutes: 180, outcome: '10 medium tree problems' },
  { topic: 'Week 15 Review', description: 'Advanced trees review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Tree mastery achieved' },

  // Week 16: Heaps
  { topic: 'Heap Fundamentals', description: 'Min heap, max heap, heap property, array representation', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand heap structure' },
  { topic: 'Heap Operations', description: 'Insert, extract, heapify, build heap', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement heap operations' },
  { topic: 'Heap Sort', description: 'Heap sort algorithm, in-place sorting', taskType: 'learn', estimatedMinutes: 120, outcome: 'Implement heap sort' },
  { topic: 'Top K Problems', description: 'Kth largest, K most frequent, K closest points', taskType: 'practice', estimatedMinutes: 180, outcome: '8 top-k problems' },
  { topic: 'Heap Practice', description: 'Merge K sorted lists, median from stream', taskType: 'practice', estimatedMinutes: 180, outcome: '8 heap problems' },
  { topic: 'Two Heaps Pattern', description: 'Median maintenance, sliding window median', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master two heaps technique' },
  { topic: 'Week 16 Review', description: 'Heaps comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Heap mastery' },

  // Week 17: Graphs - Basics
  { topic: 'Graph Fundamentals', description: 'Graph types, representations (adjacency matrix/list)', taskType: 'learn', estimatedMinutes: 150, outcome: 'Represent graphs in code' },
  { topic: 'DFS for Graphs', description: 'Depth-first search, recursive and iterative', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement graph DFS' },
  { topic: 'BFS for Graphs', description: 'Breadth-first search, shortest path in unweighted graphs', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement graph BFS' },
  { topic: 'DFS/BFS Practice', description: 'Number of islands, flood fill, rotting oranges', taskType: 'practice', estimatedMinutes: 180, outcome: '10 graph traversal problems' },
  { topic: 'Cycle Detection', description: 'Cycle in directed/undirected graphs', taskType: 'learn', estimatedMinutes: 150, outcome: 'Detect cycles in graphs' },
  { topic: 'Connected Components', description: 'Find connected components, union-find intro', taskType: 'learn', estimatedMinutes: 150, outcome: 'Identify graph components' },
  { topic: 'Week 17 Review', description: 'Graph basics review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Graph fundamentals solid' },

  // Week 18: Graphs - Advanced
  { topic: 'Topological Sort', description: 'Kahn algorithm, DFS-based approach, course schedule', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement topological sort' },
  { topic: 'Shortest Path: Dijkstra', description: 'Dijkstra algorithm for weighted graphs', taskType: 'learn', estimatedMinutes: 180, outcome: 'Find shortest paths' },
  { topic: 'Union-Find', description: 'Disjoint set union, path compression, union by rank', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement union-find' },
  { topic: 'Graph Practice I', description: 'Clone graph, Pacific Atlantic, word ladder', taskType: 'practice', estimatedMinutes: 180, outcome: '8 medium graph problems' },
  { topic: 'Graph Practice II', description: 'Network delay, cheapest flights, alien dictionary', taskType: 'practice', estimatedMinutes: 180, outcome: '8 advanced problems' },
  { topic: 'Minimum Spanning Tree', description: 'Prim and Kruskal algorithms overview', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand MST concepts' },
  { topic: 'Week 18 Review', description: 'Advanced graphs review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Graph mastery achieved' },

  // Week 19: Dynamic Programming
  { topic: 'DP Introduction', description: 'Overlapping subproblems, optimal substructure, memoization', taskType: 'learn', estimatedMinutes: 180, outcome: 'Understand DP concepts' },
  { topic: 'DP: Fibonacci Variants', description: 'Climbing stairs, house robber, min cost climbing', taskType: 'practice', estimatedMinutes: 180, outcome: '6 1D DP problems' },
  { topic: 'DP: Grid Problems', description: 'Unique paths, minimum path sum, coin change', taskType: 'learn', estimatedMinutes: 180, outcome: 'Solve grid DP problems' },
  { topic: 'DP: Subsequence Problems', description: 'LCS, LIS, edit distance', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master subsequence DP' },
  { topic: 'DP Practice I', description: 'Medium DP problems from LeetCode', taskType: 'practice', estimatedMinutes: 180, outcome: '8 DP problems solved' },
  { topic: 'DP Practice II', description: 'Knapsack variations, partition problems', taskType: 'practice', estimatedMinutes: 180, outcome: '8 more DP problems' },
  { topic: 'Week 19 Review', description: 'Dynamic programming review', taskType: 'revise', estimatedMinutes: 120, outcome: 'DP fundamentals solid' },

  // Week 20: Backtracking & Phase Review
  { topic: 'Backtracking Introduction', description: 'Backtracking template, state space tree', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand backtracking approach' },
  { topic: 'Backtracking: Subsets & Permutations', description: 'Generate all subsets, all permutations', taskType: 'practice', estimatedMinutes: 180, outcome: '8 combination problems' },
  { topic: 'Backtracking: Constraint Problems', description: 'N-Queens, Sudoku solver, word search', taskType: 'practice', estimatedMinutes: 180, outcome: '6 constraint problems' },
  { topic: 'DSA Mock Interview', description: 'Solve 3 random problems in timed setting', taskType: 'practice', estimatedMinutes: 180, outcome: 'Interview simulation completed' },
  { topic: 'DSA Weak Areas Review', description: 'Identify and work on weak topics', taskType: 'revise', estimatedMinutes: 180, outcome: 'Weak areas strengthened' },
  { topic: 'DSA Comprehensive Review', description: 'Review all DSA topics with quick problems', taskType: 'revise', estimatedMinutes: 180, outcome: 'DSA journey reviewed' },
  { topic: 'Phase 2 Complete!', description: 'DSA mastery achieved - ready for databases', taskType: 'revise', estimatedMinutes: 120, outcome: 'DSA phase completed' },
];
