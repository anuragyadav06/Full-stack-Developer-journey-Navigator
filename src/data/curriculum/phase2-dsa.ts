// Phase 2: Data Structures & Algorithms (Weeks 9-21) - Mar 21 - Jun 18, 2026
// PERFECTLY ALIGNED: 91 days (13 weeks) - Every week review on Day 7

import { TaskType } from '../roadmapData';
import { CurriculumTask } from './phase1-java-core';

export const phase2DSA: CurriculumTask[] = [
  // Week 9: Arrays & Strings (Days 1-7)
  { topic: 'Arrays Deep Dive', description: 'Array algorithms, two pointers, sliding window introduction', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master array manipulation techniques' },
  { topic: 'Two Pointer Technique', description: 'Two pointer pattern, when to use, common patterns', taskType: 'learn', estimatedMinutes: 120, outcome: 'Identify two pointer problems' },
  { topic: 'Two Pointer Practice', description: 'Solve 8 two pointer problems: pair sum, container with most water', taskType: 'practice', estimatedMinutes: 180, outcome: '8 problems solved' },
  { topic: 'Sliding Window', description: 'Fixed and variable window, window optimization', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master sliding window technique' },
  { topic: 'Sliding Window Practice', description: 'Solve 8 sliding window problems: max sum subarray, longest substring', taskType: 'practice', estimatedMinutes: 180, outcome: '8 problems solved' },
  { topic: 'Array Practice Intensive', description: 'Solve 10 mixed array problems combining all techniques', taskType: 'practice', estimatedMinutes: 180, outcome: '10 array problems solved' },
  { topic: 'Week 9 Review', description: 'Array techniques comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Array mastery checkpoint' },

  // Week 10: Strings & Hashing (Days 8-14)
  { topic: 'String Algorithms', description: 'Pattern matching, string manipulation, KMP algorithm intro', taskType: 'learn', estimatedMinutes: 150, outcome: 'String algorithm techniques' },
  { topic: 'String Practice', description: 'Solve 10 string problems: anagrams, palindromes, substring problems', taskType: 'practice', estimatedMinutes: 180, outcome: '10 string problems solved' },
  { topic: 'Hash Maps & Sets', description: 'Hash table concepts, collision handling, use cases', taskType: 'learn', estimatedMinutes: 120, outcome: 'Understand hashing deeply' },
  { topic: 'HashMap Practice', description: 'Solve 10 hash map problems: frequency count, two sum variations', taskType: 'practice', estimatedMinutes: 180, outcome: '10 hash problems solved' },
  { topic: 'Advanced String Patterns', description: 'Rabin-Karp, longest common substring, rolling hash', taskType: 'learn', estimatedMinutes: 150, outcome: 'Advanced string techniques' },
  { topic: 'Mixed Practice', description: 'Solve 8 mixed string/hash problems', taskType: 'practice', estimatedMinutes: 180, outcome: '8 problems solved' },
  { topic: 'Week 10 Review', description: 'String and hashing comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Week 10 solid' },

  // Week 11: Sorting & Searching (Days 15-21)
  { topic: 'Sorting Algorithms', description: 'Bubble, selection, insertion, merge, quick sort with complexity analysis', taskType: 'learn', estimatedMinutes: 180, outcome: 'Understand all sorting algorithms' },
  { topic: 'Sorting Implementation', description: 'Implement merge sort and quick sort from scratch', taskType: 'practice', estimatedMinutes: 150, outcome: 'Sorting implementations complete' },
  { topic: 'Binary Search Basics', description: 'Binary search on arrays, basic template', taskType: 'learn', estimatedMinutes: 120, outcome: 'Master basic binary search' },
  { topic: 'Binary Search Advanced', description: 'Rotated arrays, search space reduction, bisection method', taskType: 'learn', estimatedMinutes: 150, outcome: 'Advanced binary search' },
  { topic: 'Binary Search Practice', description: 'Solve 10 binary search problems including variations', taskType: 'practice', estimatedMinutes: 180, outcome: '10 problems solved' },
  { topic: 'Sorting Problems Practice', description: 'Problems requiring sorting as preprocessing step', taskType: 'practice', estimatedMinutes: 150, outcome: '8 sorting problems solved' },
  { topic: 'Week 11 Review', description: 'Sorting and searching comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Sorting mastered' },

  // Week 12: Linked Lists (Days 22-28)
  { topic: 'Linked List Fundamentals', description: 'Singly, doubly, circular linked lists, implementation from scratch', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement linked lists' },
  { topic: 'Linked List Operations', description: 'Insertion, deletion, reversal, cycle detection with Floyd\'s algorithm', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master LL operations' },
  { topic: 'Fast & Slow Pointer', description: 'Two pointer technique on linked lists, finding middle, detecting cycles', taskType: 'learn', estimatedMinutes: 120, outcome: 'Two pointer mastery' },
  { topic: 'Linked List Practice I', description: 'Solve 8 basic to medium LL problems', taskType: 'practice', estimatedMinutes: 180, outcome: '8 problems solved' },
  { topic: 'Advanced LL Problems', description: 'Merge sorted lists, intersection, complex pointer manipulation', taskType: 'practice', estimatedMinutes: 180, outcome: '8 advanced problems solved' },
  { topic: 'LL Pattern Practice', description: 'Interview patterns: reversal in groups, reordering, partition', taskType: 'practice', estimatedMinutes: 150, outcome: 'LL patterns mastered' },
  { topic: 'Week 12 Review', description: 'Linked list comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'LL mastery achieved' },

  // Week 13: Stacks & Queues (Days 29-35)
  { topic: 'Stack Fundamentals', description: 'Stack implementation, applications, monotonic stack pattern', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master stack concepts' },
  { topic: 'Stack Practice', description: 'Solve 10 stack problems: balanced parentheses, next greater element, min stack', taskType: 'practice', estimatedMinutes: 180, outcome: '10 stack problems solved' },
  { topic: 'Queue Fundamentals', description: 'Queue, circular queue, deque, priority queue concepts', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master queue concepts' },
  { topic: 'Queue Practice', description: 'Solve 8 queue problems: sliding window max, task scheduler', taskType: 'practice', estimatedMinutes: 180, outcome: '8 queue problems solved' },
  { topic: 'Advanced Stack Problems', description: 'Largest rectangle in histogram, trapping rain water, stock span', taskType: 'practice', estimatedMinutes: 180, outcome: '6 advanced problems solved' },
  { topic: 'Stack/Queue Combination', description: 'Problems using both structures, queue using stacks', taskType: 'practice', estimatedMinutes: 120, outcome: '6 mixed problems solved' },
  { topic: 'Week 13 Review', description: 'Stack and queue comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Week 13 mastered' },

  // Week 14: Recursion & Backtracking (Days 36-42)
  { topic: 'Recursion Advanced', description: 'Multiple recursive calls, tree recursion, complexity analysis', taskType: 'learn', estimatedMinutes: 150, outcome: 'Advanced recursion techniques' },
  { topic: 'Recursion Practice', description: 'Solve 8 recursive problems: subset generation, permutations, combinations', taskType: 'practice', estimatedMinutes: 180, outcome: '8 recursion problems solved' },
  { topic: 'Backtracking Introduction', description: 'Backtracking paradigm, pruning, state space tree visualization', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand backtracking' },
  { topic: 'Backtracking Practice I', description: 'N-Queens, sudoku solver, rat in maze problems', taskType: 'practice', estimatedMinutes: 180, outcome: '5 backtracking problems solved' },
  { topic: 'Backtracking Practice II', description: 'Combination sum, word search, palindrome partition', taskType: 'practice', estimatedMinutes: 180, outcome: '6 more problems solved' },
  { topic: 'Recursion Optimization', description: 'Memoization, tail recursion, converting recursion to iteration', taskType: 'learn', estimatedMinutes: 120, outcome: 'Optimize recursive solutions' },
  { topic: 'Week 14 Review', description: 'Recursion and backtracking comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Backtracking mastered' },

  // Week 15: Binary Trees I (Days 43-49)
  { topic: 'Binary Tree Fundamentals', description: 'Tree terminology, binary tree properties, tree traversals overview', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand tree structures' },
  { topic: 'Tree Traversals', description: 'Inorder, preorder, postorder (recursive and iterative), level order', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master all traversals' },
  { topic: 'Binary Search Tree', description: 'BST properties, insertion, deletion, searching efficiently', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master BST operations' },
  { topic: 'BST Practice', description: 'Solve 8 BST problems: validate BST, LCA, kth smallest/largest', taskType: 'practice', estimatedMinutes: 180, outcome: '8 BST problems solved' },
  { topic: 'Tree Construction', description: 'Build tree from traversals, serialize/deserialize tree', taskType: 'learn', estimatedMinutes: 150, outcome: 'Construct trees from data' },
  { topic: 'Tree Views & Paths', description: 'Left/right/top/bottom view, root to leaf paths, path sum', taskType: 'practice', estimatedMinutes: 180, outcome: '8 view/path problems solved' },
  { topic: 'Week 15 Review', description: 'Binary tree fundamentals comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Trees week 1 solid' },

  // Week 16: Binary Trees II (Days 50-56)
  { topic: 'Advanced Tree Properties', description: 'Diameter, height, balanced tree check, symmetric tree', taskType: 'learn', estimatedMinutes: 150, outcome: 'Tree property calculations' },
  { topic: 'Advanced Tree Practice', description: 'Solve 8 problems: diameter, max path sum, flatten tree', taskType: 'practice', estimatedMinutes: 180, outcome: '8 advanced problems solved' },
  { topic: 'Lowest Common Ancestor', description: 'LCA in BST and binary tree, multiple variations and optimizations', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master LCA concept' },
  { topic: 'Balanced Trees', description: 'AVL trees, rotations, self-balancing concepts, Red-Black trees intro', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand balanced trees' },
  { topic: 'Tries', description: 'Trie data structure, implementation, prefix search, autocomplete', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement and use tries' },
  { topic: 'Trie Practice', description: 'Solve 6 trie problems: word dictionary, prefix matching, word search II', taskType: 'practice', estimatedMinutes: 180, outcome: '6 trie problems solved' },
  { topic: 'Week 16 Review', description: 'Advanced tree concepts comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Trees completely mastered' },

  // Week 17: Graphs I (Days 57-63)
  { topic: 'Graph Fundamentals', description: 'Graph representation (matrix/list), directed/undirected, weighted graphs', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand graph structures' },
  { topic: 'Graph Traversals', description: 'BFS and DFS implementation, applications, time complexity', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master graph traversals' },
  { topic: 'BFS/DFS Practice', description: 'Solve 8 problems: connected components, number of islands, clone graph', taskType: 'practice', estimatedMinutes: 180, outcome: '8 traversal problems solved' },
  { topic: 'Shortest Path: Dijkstra', description: 'Dijkstra\'s algorithm for weighted graphs, implementation with priority queue', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement Dijkstra\'s algorithm' },
  { topic: 'Shortest Path: Bellman-Ford', description: 'Bellman-Ford for negative weights, detecting negative cycles', taskType: 'learn', estimatedMinutes: 150, outcome: 'Implement Bellman-Ford' },
  { topic: 'Shortest Path Practice', description: 'Solve 6 shortest path problems with different graph types', taskType: 'practice', estimatedMinutes: 180, outcome: '6 problems solved' },
  { topic: 'Week 17 Review', description: 'Graph basics and shortest path comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Graph week 1 solid' },

  // Week 18: Graphs II (Days 64-70)
  { topic: 'Topological Sort', description: 'Topological sort using DFS and Kahn\'s algorithm, applications', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master topological sort' },
  { topic: 'Topological Sort Practice', description: 'Course schedule, alien dictionary, task scheduling problems', taskType: 'practice', estimatedMinutes: 180, outcome: '6 topo sort problems solved' },
  { topic: 'Union-Find (Disjoint Set)', description: 'Union-Find with path compression and union by rank, complexity analysis', taskType: 'learn', estimatedMinutes: 180, outcome: 'Implement efficient Union-Find' },
  { topic: 'Union-Find Practice', description: 'Solve 6 problems: cycle detection, connected components, redundant connection', taskType: 'practice', estimatedMinutes: 180, outcome: '6 union-find problems solved' },
  { topic: 'Minimum Spanning Tree', description: 'Prim\'s and Kruskal\'s algorithms, MST applications', taskType: 'learn', estimatedMinutes: 150, outcome: 'Compute MST efficiently' },
  { topic: 'Graph Mixed Practice', description: 'Comprehensive graph problem set combining all techniques', taskType: 'practice', estimatedMinutes: 180, outcome: '8 mixed graph problems' },
  { topic: 'Week 18 Review', description: 'Advanced graph algorithms comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'Graphs completely mastered' },

  // Week 19: Dynamic Programming I (Days 71-77)
  { topic: 'DP Introduction', description: 'Memoization vs tabulation, optimal substructure, overlapping subproblems', taskType: 'learn', estimatedMinutes: 180, outcome: 'Understand DP paradigm deeply' },
  { topic: 'DP: Fibonacci Patterns', description: 'Classic DP: fibonacci, climbing stairs, house robber, min cost climbing', taskType: 'practice', estimatedMinutes: 180, outcome: '6 basic DP problems solved' },
  { topic: 'DP: 0/1 Knapsack', description: 'Knapsack problem derivation, implementation, complexity', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master knapsack pattern' },
  { topic: 'Knapsack Practice', description: 'Subset sum, equal partition, target sum, count subsets', taskType: 'practice', estimatedMinutes: 180, outcome: '6 knapsack variations solved' },
  { topic: 'DP: Unbounded Knapsack', description: 'Unbounded knapsack, coin change, rod cutting problems', taskType: 'learn', estimatedMinutes: 150, outcome: 'Unbounded knapsack mastered' },
  { topic: 'Unbounded Practice', description: 'Solve 6 unbounded knapsack variations', taskType: 'practice', estimatedMinutes: 180, outcome: '6 problems solved' },
  { topic: 'Week 19 Review', description: 'DP fundamentals and knapsack comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'DP week 1 solid' },

  // Week 20: Dynamic Programming II (Days 78-84)
  { topic: 'DP: LCS Pattern', description: 'Longest common subsequence derivation and all variations', taskType: 'learn', estimatedMinutes: 180, outcome: 'Master LCS pattern' },
  { topic: 'LCS Practice', description: 'LCS, longest palindromic subsequence, edit distance, shortest common supersequence', taskType: 'practice', estimatedMinutes: 180, outcome: '6 LCS problems solved' },
  { topic: 'DP: Matrix DP', description: 'Matrix chain multiplication, unique paths in grid, minimum path sum', taskType: 'learn', estimatedMinutes: 150, outcome: 'Matrix DP understood' },
  { topic: 'Matrix DP Practice', description: 'Solve 6 matrix DP problems with different constraints', taskType: 'practice', estimatedMinutes: 180, outcome: '6 problems solved' },
  { topic: 'DP: String DP', description: 'Advanced string DP: regex matching, wildcard matching, interleaving strings', taskType: 'learn', estimatedMinutes: 150, outcome: 'String DP mastered' },
  { topic: 'DP Comprehensive Practice', description: 'Mixed DP problem set from all patterns learned', taskType: 'practice', estimatedMinutes: 180, outcome: '10 mixed DP problems solved' },
  { topic: 'Week 20 Review', description: 'All DP patterns comprehensive review', taskType: 'revise', estimatedMinutes: 120, outcome: 'DP completely mastered' },

  // Week 21: Advanced Topics (Days 85-91)
  { topic: 'Greedy Algorithms', description: 'Greedy paradigm, when to use greedy vs DP, proof techniques', taskType: 'learn', estimatedMinutes: 150, outcome: 'Understand greedy approach' },
  { topic: 'Greedy Practice', description: 'Activity selection, fractional knapsack, huffman coding, job scheduling', taskType: 'practice', estimatedMinutes: 180, outcome: '8 greedy problems solved' },
  { topic: 'Bit Manipulation', description: 'Bitwise operators, common bit tricks, XOR properties, bit masks', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master bit manipulation' },
  { topic: 'Bit Manipulation Practice', description: 'Single number, power of two, subset generation, counting bits', taskType: 'practice', estimatedMinutes: 180, outcome: '8 bit problems solved' },
  { topic: 'Heaps Deep Dive', description: 'Min/max heap, heap operations, priority queue, heap sort', taskType: 'learn', estimatedMinutes: 150, outcome: 'Master heaps' },
  { topic: 'Heap Practice', description: 'Kth largest, merge k sorted arrays, median from stream, top K frequent', taskType: 'practice', estimatedMinutes: 180, outcome: '8 heap problems solved' },
  { topic: 'DSA Phase Complete!', description: 'Comprehensive DSA review - Target: 150+ LeetCode problems solved total', taskType: 'revise', estimatedMinutes: 180, outcome: 'DSA MASTERY - Ready for technical interviews!' },
];