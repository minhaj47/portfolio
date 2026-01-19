// Types
export interface Skill {
  name: string;
  icon: string;
  category: string;
  color: string;
  glow: string;
}

export interface CategoryColor {
  bg: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  semester: string;
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  mobileAppUrl?: string;
  gradient: string;
  impact: string;
  isHackathon?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineItem {
  semester: string;
  period: string;
  title: string;
  highlights: string[];
  color: string;
  isHackathon?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  items: string[];
}

export interface Stat {
  label: string;
  value: string;
  iconName: string;
}

// Hexagonal Skills Data - Unified Beehive with Material Design Colors
export const skillsHoneycomb: Skill[] = [
  // Backend - Blue Tones
  {
    name: "Node.js",
    icon: "Hexagon",
    category: "Backend",
    color: "#42A5F5",
    glow: "rgba(66, 165, 245, 0.4)",
  },
  {
    name: "Express",
    icon: "Zap",
    category: "Backend",
    color: "#1E88E5",
    glow: "rgba(30, 136, 229, 0.4)",
  },
  {
    name: "FastAPI",
    icon: "Rocket",
    category: "Backend",
    color: "#1976D2",
    glow: "rgba(25, 118, 210, 0.4)",
  },
  {
    name: "REST API",
    icon: "Plug",
    category: "Backend",
    color: "#1565C0",
    glow: "rgba(21, 101, 192, 0.4)",
  },
  {
    name: "Microservices",
    icon: "Server",
    category: "Backend",
    color: "#0D47A1",
    glow: "rgba(13, 71, 161, 0.4)",
  },

  // Frontend - Purple/Pink Tones
  {
    name: "React",
    icon: "Atom",
    category: "Frontend",
    color: "#AB47BC",
    glow: "rgba(171, 71, 188, 0.4)",
  },
  {
    name: "Next.js",
    icon: "Triangle",
    category: "Frontend",
    color: "#9C27B0",
    glow: "rgba(156, 39, 176, 0.4)",
  },
  {
    name: "TypeScript",
    icon: "FileCode2",
    category: "Frontend",
    color: "#8E24AA",
    glow: "rgba(142, 36, 170, 0.4)",
  },
  {
    name: "Tailwind",
    icon: "Wind",
    category: "Frontend",
    color: "#7B1FA2",
    glow: "rgba(123, 31, 162, 0.4)",
  },
  {
    name: "Socket.IO",
    icon: "Radio",
    category: "Frontend",
    color: "#1565C0",
    glow: "rgba(21, 101, 192, 0.4)",
  },

  // Database - Green Tones
  {
    name: "PostgreSQL",
    icon: "Database",
    category: "Database",
    color: "#66BB6A",
    glow: "rgba(102, 187, 106, 0.4)",
  },
  {
    name: "MySQL",
    icon: "Cylinder",
    category: "Database",
    color: "#4CAF50",
    glow: "rgba(76, 175, 80, 0.4)",
  },
  {
    name: "MongoDB",
    icon: "Leaf",
    category: "Database",
    color: "#43A047",
    glow: "rgba(67, 160, 71, 0.4)",
  },
  {
    name: "Redis",
    icon: "Layers",
    category: "Database",
    color: "#388E3C",
    glow: "rgba(56, 142, 60, 0.4)",
  },
  {
    name: "Prisma",
    icon: "Triangle",
    category: "Database",
    color: "#2E7D32",
    glow: "rgba(46, 125, 50, 0.4)",
  },

  // AI/ML - Deep Orange/Red Tones
  {
    name: "LangChain",
    icon: "Link",
    category: "AI/ML",
    color: "#FF7043",
    glow: "rgba(255, 112, 67, 0.4)",
  },
  {
    name: "RAG",
    icon: "Search",
    category: "AI/ML",
    color: "#FF5722",
    glow: "rgba(255, 87, 34, 0.4)",
  },
  {
    name: "Qdrant",
    icon: "CircleDot",
    category: "AI/ML",
    color: "#F4511E",
    glow: "rgba(244, 81, 30, 0.4)",
  },
  {
    name: "Gemini API",
    icon: "Sparkles",
    category: "AI/ML",
    color: "#E64A19",
    glow: "rgba(230, 74, 25, 0.4)",
  },
  {
    name: "TensorFlow",
    icon: "Brain",
    category: "Mobile",
    color: "#FF7043",
    glow: "rgba(255, 112, 67, 0.4)",
  },
  // DevOps - Amber/Orange Tones
  {
    name: "Docker",
    icon: "Container",
    category: "DevOps",
    color: "#FFCA28",
    glow: "rgba(255, 202, 40, 0.4)",
  },
  {
    name: "Git",
    icon: "GitBranch",
    category: "DevOps",
    color: "#FFC107",
    glow: "rgba(255, 193, 7, 0.4)",
  },
  {
    name: "AWS",
    icon: "Cloud",
    category: "DevOps",
    color: "#FFB300",
    glow: "rgba(255, 179, 0, 0.4)",
  },
  {
    name: "Jira",
    icon: "Layers",
    category: "DevOps",
    color: "#FFA000",
    glow: "rgba(255, 160, 0, 0.4)",
  },
  {
    name: "n8n",
    icon: "Share2",
    category: "DevOps",
    color: "#FF8F00",
    glow: "rgba(255, 143, 0, 0.4)",
  },
  // Mobile - Indigo Tones
  {
    name: "Kotlin",
    icon: "Code",
    category: "Mobile",
    color: "#5C6BC0",
    glow: "rgba(92, 107, 192, 0.4)",
  },
  {
    name: "Jetpack",
    icon: "Rocket",
    category: "Mobile",
    color: "#3F51B5",
    glow: "rgba(63, 81, 181, 0.4)",
  },
  {
    name: "Firebase",
    icon: "Flame",
    category: "Mobile",
    color: "#3949AB",
    glow: "rgba(57, 73, 171, 0.4)",
  },
  {
    name: "Flutter",
    icon: "Smartphone",
    category: "Mobile",
    color: "#303F9F",
    glow: "rgba(48, 63, 159, 0.4)",
  },
];

export const categoryColors: Record<string, CategoryColor> = {
  Backend: { bg: "#42A5F5", name: "Backend Development" },
  Frontend: { bg: "#AB47BC", name: "Frontend Development" },
  Database: { bg: "#66BB6A", name: "Database & Storage" },
  "AI/ML": { bg: "#FF7043", name: "AI & Machine Learning" },
  Mobile: { bg: "#5C6BC0", name: "Mobile Development" },
  DevOps: { bg: "#FFCA28", name: "DevOps & Tools" },
};

// Project Data with details from GitHub READMEs
export const projects: Project[] = [
  {
    id: 1,
    title: "TickEasy",
    subtitle: "Event Ticketing & Management Platform",
    description:
      "A comprehensive event ticketing and management platform designed to handle real-world events with enterprise-level performance. Successfully processed 2-3K+ attendees with 100% success rate across multiple live events.",
    tech: [
      "Node.js",
      "Express",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Flutter",
      "JWT",
    ],
    features: [
      "Instant ticket booking without registration",
      "Real-time QR verification via Flutter app (300-400/hour)",
      "JWT-based authentication with BCrypt hashing",
      "Multi-payment support (bKash, Nagad, Rocket, Cellfin)",
      "Production-tested: 100% success rate, 2+ major events",
      "Connection pooling for high performance",
    ],
    semester: "7th Semester",
    category: "production",
    liveUrl: "https://event-grid-2-0.vercel.app",
    githubUrl: "https://github.com/minhaj47/TickEasy_2.0",
    demoUrl:
      "https://www.linkedin.com/posts/minhaj47_tickabreasyabrcheckabreasy-activity-7356356844602171392-4ixD",
    mobileAppUrl: "https://github.com/minhaj47/tick_easy_check_easy_2_0",
    gradient: "from-blue-600 to-cyan-500",
    impact: "2-3K+ users, 100% success rate",
  },
  {
    id: 2,
    title: "EduVerse",
    subtitle: "AI-Enhanced Learning Platform",
    description:
      "A modern, microservices-based education platform that combines AI technologies with traditional learning methods. Features 5 microservices, 150+ API endpoints, and AI-powered content generation.",
    tech: [
      "Node.js",
      "Express",
      "Next.js",
      "MySQL",
      "Prisma",
      "Stripe",
      "Gemini API",
      "Socket.IO",
      "MinIO",
    ],
    features: [
      "AI-Powered Content Generation (notes, quizzes, Q&A)",
      "Microservice architecture with 5 services",
      "50+ REST APIs with JWT auth",
      "Stripe payment gateway integration",
      "MinIO video storage (S3 compatible)",
      "Real-time Q&A forums with Socket.IO",
    ],
    semester: "6th Semester",
    category: "production",
    githubUrl: "https://github.com/md-abdullah-92/Eduverse",
    gradient: "from-purple-600 to-pink-500",
    impact: "~100K lines of code, 150+ APIs",
  },
  {
    id: 3,
    title: "Research Assistant RAG App",
    subtitle: "AI-Powered Research Tool",
    description:
      "A RAG (Retrieval-Augmented Generation) application for research assistance with diverse embedding and chunking strategies for optimal document parsing.",
    tech: ["FastAPI", "RAG", "Qdrant", "LangChain", "PostgreSQL"],
    features: [
      "Diverse embedding strategies",
      "Optimized chunking for documents",
      "Vector database integration",
      "Research paper analysis",
    ],
    semester: "7th Semester",
    category: "ai",
    demoUrl:
      "https://www.linkedin.com/posts/minhaj47_rag-research-nlp-ugcPost-7393984168889847808-VISV",
    gradient: "from-indigo-500 to-purple-500",
    impact: "Research productivity tool",
  },
  {
    id: 4,
    title: "Eventure",
    subtitle: "Event Handling AI Tools Orchestrator",
    description:
      "An AI-powered event management tool orchestrator that helps streamline event planning and execution with intelligent automation.",
    tech: ["Next.js", "AI/ML", "TypeScript"],
    features: [
      "AI-powered event tools",
      "Event planning automation",
      "Intelligent recommendations",
    ],
    semester: "Hackathon",
    category: "ai",
    demoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7379563963539271680/",
    liveUrl: "https://frontend-dusky-nine-35.vercel.app/",
    gradient: "from-emerald-500 to-teal-500",
    impact: "Live AI orchestrator",
  },
  {
    id: 5,
    title: "Crisis Communication App",
    subtitle: "🏆 1st Runner Up @ GreenCon Hackathon 2025",
    description:
      "A Flutter-based mobile application for crisis communication using mesh networking technology. Enables reliable communication when traditional infrastructure fails, inspired by Hong Kong protests and Iraq crisis situations.",
    tech: ["Flutter", "Bridgefy SDK", "Mesh Networking", "SQLite", "Provider"],
    features: [
      "Mesh networking without internet (Bluetooth + WiFi)",
      "SOS alerts & emergency broadcasting",
      "Real-time location sharing with maps",
      "Encrypted communication",
      "Super power-saving mode",
      "Cross-platform (Android & iOS)",
    ],
    semester: "Hackathon",
    category: "hackathon",
    githubUrl: "https://github.com/minhaj47/crisis_communication_app_flutter",
    gradient: "from-amber-500 to-red-500",
    impact: "1st Runner Up - GreenCon 2025",
    isHackathon: true,
  },
  {
    id: 6,
    title: "IKSS Blood Bot",
    subtitle: "Blood Donation Automation System",
    description:
      "A Telegram bot that automates blood donation requests and donor management for the IKSS community. Built using n8n workflow automation and JavaScript for real-time emergency responses.",
    tech: ["n8n", "JavaScript", "Telegram Bot API", "Google Sheets", "Docker"],
    features: [
      "Blood request handling via inline keyboard",
      "Emergency broadcast with available donors",
      "Donor registration & management",
      "Last donation time tracking",
      "Production ready on Render + Docker",
    ],
    semester: "7th Semester",
    category: "automation",
    liveUrl: "https://t.me/ikss_blood_bot",
    githubUrl:
      "https://github.com/minhaj47/ikss_blood_bot_n8n_javaScript_sheet_2.0",
    demoUrl:
      "https://www.linkedin.com/posts/minhaj47_automation-aiagents-n8n-activity-7368266477197488128-hCHe",
    gradient: "from-red-500 to-orange-500",
    impact: "Live automation for university community",
  },
  {
    id: 7,
    title: "IKSS Website",
    subtitle: "Islamic Knowledge Seekers Platform",
    description:
      "A comprehensive website for Islamic Knowledge Seekers of SUST (IKSS), a student-led dawah organization at Shahjalal University. The platform serves as a central hub for spreading Islamic knowledge, managing events, and building community among Muslim students.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Lucide Icons",
      "Vercel",
    ],
    features: [
      "Dynamic home page with daily Quranic verses",
      "Event management system with filtering",
      "Islamic resources library (videos, articles, PDFs)",
      "Photo gallery with category filtering",
      "Contact form and volunteer registration",
      "Responsive design for all devices",
      "20+ active volunteers, 1000+ students reached",
      "7+ partner organizations integration",
    ],
    semester: "8th Semester",
    category: "production",
    liveUrl: "https://ikss-website.vercel.app/",
    githubUrl: "https://github.com/minhaj47/IKSS-website",
    gradient: "from-emerald-600 to-teal-500",
    impact: "1000+ students reached, multiple events",
  },
  {
    id: 8,
    title: "Full-Stack E-Commerce App",
    subtitle: "Amazon-like Learning Project",
    description:
      "A complete e-commerce application replicating Amazon core features. Built to learn best practices in REST API design, error handling, and frontend modularity.",
    tech: ["Flutter", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "User authentication with JWT",
      "Product catalog with search & filters",
      "Shopping cart with real-time updates",
      "Admin panel for product management",
      "Secure checkout process",
    ],
    semester: "5th Semester",
    category: "learning",
    githubUrl: "https://github.com/minhaj47/e-commerce_flutter_nodejs",
    gradient: "from-yellow-500 to-orange-500",
    impact: "Learning project - Best practices",
  },
  {
    id: 9,
    title: "Doctors Appointment App",
    subtitle: "First Large-Scale Mobile Application",
    description:
      "End-to-end Android application for doctors and patients to manage appointments and health records. First major mobile project built independently from scratch.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Node.js",
      "Firebase",
      "MongoDB",
      "Realm",
    ],
    features: [
      "Doctor & patient profiles",
      "Appointment scheduling & management",
      "Personal health records",
      "Firebase authentication",
      "Real-time notifications",
    ],
    semester: "4th Semester",
    category: "learning",
    githubUrl: "https://github.com/minhaj47/Doctors_Appointment",
    demoUrl:
      "https://www.linkedin.com/posts/minhaj47_last-year-i-developed-my-first-fully-functional-activity-7210659851637506049-cDad",
    gradient: "from-cyan-500 to-blue-500",
    impact: "First large-scale mobile project",
  },
  {
    id: 10,
    title: "Multiplayer TicTacToe",
    subtitle: "Real-time Communication Learning",
    description:
      "A completely responsive online multiplayer TicTacToe game that works on Android, iOS, Web, and Desktop. Built to learn real-time communication with Socket.IO.",
    tech: ["Flutter", "Socket.IO", "Node.js", "MongoDB", "Provider"],
    features: [
      "Phone number login with OTP",
      "Real-time multiplayer gameplay",
      "Create/join game rooms",
      "Points tracking system",
      "Cross-platform support",
      "Responsive glow-themed UI",
    ],
    semester: "5th Semester",
    category: "learning",
    githubUrl: "https://github.com/minhaj47/tictactoe_flutter_multiplayer_game",
    gradient: "from-pink-500 to-rose-500",
    impact: "Socket.IO learning project",
  },
];

export const skills: Record<string, SkillCategory> = {
  backend: {
    title: "Backend",
    iconName: "Terminal",
    items: ["Node.js", "Express", "REST APIs", "FastAPI", "Microservices"],
  },
  frontend: {
    title: "Frontend",
    iconName: "Globe",
    items: ["React", "Next.js", "TypeScript", "Flutter", "Socket.IO"],
  },
  database: {
    title: "Database",
    iconName: "Database",
    items: ["MySQL", "PostgreSQL", "Prisma ORM", "Query Optimization", "Redis"],
  },
  aiml: {
    title: "AI/ML",
    iconName: "Bot",
    items: ["LangChain", "RAG", "Qdrant", "ChromaDB", "Gemini API"],
  },
  production: {
    title: "Production",
    iconName: "Zap",
    items: ["JWT Auth", "Stripe", "Real-time Systems", "Caching", "Docker"],
  },
  tools: {
    title: "Tools",
    iconName: "Code",
    items: ["Git", "Jira", "n8n", "AWS", "Postman"],
  },
  javascript: {
    title: "JavaScript Deep",
    iconName: "Code",
    items: [
      "Execution Context",
      "Event Loop",
      "Debouncing",
      "Throttling",
      "LRU Cache",
      "Prototypes",
    ],
  },
};

export const achievements: Achievement[] = [
  {
    title: "1st Runner Up - GreenCon Hackathon",
    description: "Built crisis communication app with mesh networking",
    iconName: "Trophy",
  },
  {
    title: "Production Systems",
    description: "3K+ users across web and mobile platforms",
    iconName: "Users",
  },
  {
    title: "1000+ Problems Solved",
    description: "Codeforces, Vjudge, Leetcode, etc.",
    iconName: "Code",
  },
];

export const certifications = [
  "Supervised ML: Regression & Classification - Andrew Ng (DeepLearning.AI)",
  "Docker Training Course for Absolute Beginner - KodeKloud",
  "AWS Academy Graduate - Cloud Foundations",
];

// Experience Timeline Data
export const timeline: TimelineItem[] = [
  {
    semester: "1st & 2nd Semester",
    period: "2021-2022",
    title: "Foundation: Computer Science Fundamentals",
    highlights: [
      "Explored CS basics: Discrete Math, C, C++ programming",
      "Mastered problem solving from basic to complex",
      "Learned data structures: Arrays, Stacks, Queues, Trees, Graphs",
      "Advanced DS: Deque, Segment Tree, Fenwick Tree, Trie",
      "Participated in online/offline programming contests",
      "Practiced on: Codeforces, Vjudge, LightOJ, CodeChef",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    semester: "3rd & 4th Semester",
    period: "2022-2023",
    title: "Algorithms & Mobile Development Journey",
    highlights: [
      "Continued competitive programming journey",
      "Deep dive into algorithms: DP, Greedy, Graph algorithms",
      "Mastered OOP concepts and design patterns",
      "Started Android development with Kotlin",
      "Built Doctors Appointment App - First major project",
      "Transitioned to Flutter for cross-platform development",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    semester: "4th Semester",
    period: "2023",
    title: "First Large-Scale Mobile Application",
    highlights: [
      "Doctors Appointment App - End-to-end development",
      "Kotlin & Jetpack Compose mastery",
      "Firebase authentication & real-time database",
      "MongoDB integration for backend",
      "Patient & doctor profile management",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    semester: "5th & 6th Semester",
    period: "2023-2024",
    title: "Core CSE Courses & Full-Stack Development",
    highlights: [
      "Core courses: Operating Systems, Database, Networking",
      "Continued problem solving and development",
      "E-Commerce App - Amazon-like full-stack project",
      "Multiplayer TicTacToe - Socket.IO real-time learning",
      "REST API design & best practices",
      "Cross-platform development expertise",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    semester: "6th Semester",
    period: "2024",
    title: "Microservices Architecture & AI Integration",
    highlights: [
      "EduVerse - AI learning platform with 5 microservices",
      "~100K lines of code, 150+ API endpoints",
      "Stripe payment gateway integration",
      "Real-time features with Socket.IO",
      "AI-powered content generation (Gemini API)",
      "Research Assistant RAG application",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    semester: "7th Semester",
    period: "2024-2025",
    title: "Production Systems & AI at Scale",
    highlights: [
      "TickEasy - Event ticketing serving 2-3K+ users",
      "IKSS Blood Bot - Live automation with n8n",
      "Eventure - AI event management orchestrator",
      "Research on LLMs for Islamic Q&A (ICCIT 2025)",
      "100% success rate on production events",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    semester: "Hackathon 2025",
    period: "June 2025",
    title: "🏆 1st Runner Up - GreenCon Hackathon",
    highlights: [
      "Crisis Communication App with mesh networking",
      "Offline messaging without internet (Bridgefy SDK)",
      "SOS alerts & real-time location sharing",
      "Cross-platform Flutter app (Android & iOS)",
      "Inspired by Hong Kong protests & Iraq crisis",
    ],
    color: "from-yellow-500 to-orange-500",
    isHackathon: true,
  },
  {
    semester: "7th & 8th Semester",
    period: "2024-2025",
    title: "Machine Learning & LeetCode Mastery",
    highlights: [
      "Deep dive into Machine Learning & AI/ML",
      "LeetCode problem solving (Medium to Hard)",
      "Advanced algorithm implementations",
      "Production system development",
      "Focus on scalability and performance",
    ],
    color: "from-blue-500 to-purple-500",
  },
  {
    semester: "8th Semester",
    period: "2025",
    title: "Community Impact & Advanced Development",
    highlights: [
      "IKSS Website - Serving 1000+ students",
      "20+ volunteers, 7+ partner organizations",
      "Advanced ML implementations with TensorFlow",
      "Continued LeetCode & system design practice",
      "Focus on scalable production systems",
    ],
    color: "from-emerald-600 to-teal-500",
  },
];

// Stats data
export const stats: Stat[] = [
  { label: "Users Served", value: "3K+", iconName: "Users" },
  {
    label: "Problems Solved",
    value: "1000+",
    iconName: "Code",
  },
  {
    label: "Projects Built",
    value: "9+",
    iconName: "Rocket",
  },
  {
    label: "APIs Shipped",
    value: "200+",
    iconName: "Server",
  },
];

// JavaScript concepts for the JavaScript section
export const jsConcepts = [
  {
    title: "Execution Context & Call Stack",
    description:
      "Deep understanding of how JS executes code - creation phase, execution phase, scope chain, and variable hoisting",
    example:
      "Optimized nested function calls in TickEasy for 300-400 QR scans/hour",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Event Loop & Asynchronous JS",
    description:
      "Master of the event loop, microtasks, macrotasks, and non-blocking code execution",
    example: "Real-time Socket.IO implementations in EduVerse & TicTacToe",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Debouncing & Throttling",
    description:
      "Performance optimization techniques to control function execution frequency",
    example:
      "Implemented search debouncing and scroll throttling across web apps",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Closures & Scope",
    description:
      "Leveraging closures for data privacy, function factories, and module patterns",
    example:
      "Built reusable middleware factories with closure-based state management",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Prototypes & Inheritance",
    description:
      "Understanding prototypal inheritance, prototype chain, and object creation patterns",
    example:
      "Created custom data structures and OOP patterns in backend services",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "LRU Cache Implementation",
    description:
      "Built efficient caching mechanisms with Least Recently Used eviction policy",
    example:
      "Implemented API response caching to reduce database queries by 60%",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Task Scheduler & Queues",
    description:
      "Custom task scheduling with priority queues and job processing for background operations",
    example:
      "Built job queue system for async email notifications and data processing",
    color: "from-amber-500 to-yellow-500",
  },
];

export const performanceMetrics = [
  {
    metric: "API Response Time",
    before: "850 ms",
    after: "340 ms",
    improvement: "60% faster",
    technique: "LRU Cache + Query Optimization",
  },
  {
    metric: "Search Performance",
    before: "API call on every keystroke",
    after: "Debounced by 300ms",
    improvement: "90% fewer calls",
    technique: "Debouncing Implementation",
  },
  {
    metric: "Scroll Handler",
    before: "Fired 1000+ times/scroll",
    after: "Throttled to 10/scroll",
    improvement: "99% reduction",
    technique: "Throttling Pattern",
  },
];

// FAQ data
export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack development (Node.js, React, Next.js, Flutter), AI/ML integration, microservices architecture, and database optimization. I can build web and mobile applications from scratch or integrate AI features into existing systems.",
  },
  {
    question: "What is your development process?",
    answer:
      "I follow an iterative approach: understanding requirements, designing the database schema, building APIs, implementing frontend, testing thoroughly, and deploying with proper monitoring. I prioritize clean code, performance, and scalability.",
  },
  {
    question: "How do you handle project timelines?",
    answer:
      "I break projects into milestones with realistic deadlines. I communicate regularly about progress and any blockers. For reference, I've successfully delivered production systems serving 3K+ users with 100% success rates.",
  },
  {
    question: "Can you work with existing teams?",
    answer:
      "Absolutely! I have experience collaborating in team environments. I'm comfortable with Git workflows, code reviews, and agile methodologies. I've worked on projects with multiple developers and microservice architectures.",
  },
  {
    question: "What tools and technologies do you use?",
    answer:
      "Backend: Node.js, Express, FastAPI. Frontend: React, Next.js, Flutter. Databases: MySQL, PostgreSQL, MongoDB. AI/ML: LangChain, RAG, Gemini API. Tools: Git, Docker, Postman, Jira. I'm always learning new technologies as needed.",
  },
];
