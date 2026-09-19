export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  tools: string[];
  aspectRatio: string;
  imageBgColor: string;
  gradientStyle: string;
  caseStudy: {
    heroImage: string;
    role: string;
    timeline: string;
    overview: string;
    problem: string;
    research: string[];
    designProcess: string[];
    wireframeNotes: string;
    uiHighlights: string[];
    techStackDetails: string[];
    finalResult: string;
    keyLearnings: string[];
    nextSteps: string[];
    metrics?: { label: string; value: string }[];
  };
}

export interface ToolItem {
  name: string;
  category: 'design' | 'development' | 'other';
  iconName: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "NANDELA SAI TEJA",
    taglineLine1: "I design it.",
    taglineLine2: "Then I build it.",
    role: "UI/UX Designer & Full Stack Developer",
    email: "nandelasaiteja10@gmail.com",
    phone: "+91 9392458935",
    location: "Devi Nagar, Kotturu, Anakapalli, 531001, Andhra Pradesh, India",
    shortLocation: "Anakapalli, AP, India",
    
    // Core Personal Statement
    statement: "UI/UX designer and full stack developer with an eye for detail and a bias for shipping. I handle the entire product journey — user research, interface design, front-end craft, and back-end logic — so ideas don't get lost in handoff. Good design isn't decoration; it's how a product earns trust.",
    
    // Personal Introduction (About section)
    bio: [
      "I am an engineering graduate from Vignan's Institute of Information Technology, holding a solid foundational background from Sri Chaitanya Junior College and Bhashyam High School.",
      "As an avid reader and creator at heart, I am driven by a passion for learning new ideas and transforming them into impactful, real-world solutions every single day."
    ],

    // Design Philosophy
    philosophyQuote: "True innovation does not begin with a blank canvas; it begins with deep understanding. By grounding technical engineering principles in continuous, curious study, ideas evolve from abstract concepts into reliable, functional creations.",

    // Approach section
    approachBold: "I don't believe design ends in Figma.",
    approachText: "Great digital products require both thoughtful interfaces and solid engineering. I enjoy working across the entire journey — from understanding the problem to designing the experience and building the final product."
  },

  quickStats: [
    { number: "01", label: "DESIGN + DEVELOPMENT", subtext: "Seamless end-to-end product execution" },
    { number: "04+", label: "CORE DESIGN DISCIPLINES", subtext: "UI/UX, Branding, Motion, Systems" },
    { number: "∞", label: "CURIOSITY TO LEARN", subtext: "Constant study of emerging tech & craft" },
    { number: "01", label: "PRODUCT MINDSET", subtext: "Bridging human needs & technical logic" }
  ],

  philosophyStages: [
    { step: "01", name: "UNDERSTAND", description: "Deconstruct the core problem, user needs, domain constraints, and business goals before sketching a single frame." },
    { step: "02", name: "EXPLORE", description: "Brainstorm wide visual directions, test UX architectures, and evaluate technical feasibility upfront." },
    { step: "03", name: "DESIGN", description: "Craft high-precision interfaces, establish robust design systems, and integrate fluid micro-interactions." },
    { step: "04", name: "BUILD", description: "Write clean, performant, and type-safe front-end & back-end code using modern engineering patterns." },
    { step: "05", name: "SHIP", description: "Rigorously audit accessibility, test cross-browser compatibility, optimize load times, and release to users." }
  ],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Aether OS — Spatial Desktop & UI System",
      category: "UI/UX DESIGN & CREATIVE TECH",
      shortDescription: "A conceptual next-generation desktop operating interface designed for fluid multitasking, spatial layout grouping, and tactile dark mode aesthetics.",
      tools: ["Figma", "React", "Three.js", "Tailwind CSS"],
      aspectRatio: "aspect-[16/10]",
      imageBgColor: "#12161A",
      gradientStyle: "from-blue-900/30 via-slate-900 to-black",
      caseStudy: {
        heroImage: "",
        role: "Lead UI/UX Designer & Frontend Engineer",
        timeline: "4 Weeks · Concept & Prototype",
        overview: "Aether OS explores how desktop user interfaces can evolve past rigid window grids into dynamic, fluid spatial work environments built for modern creative power users.",
        problem: "Traditional desktop environments struggle with complex multi-monitor workflows and visual noise. Users lose context switching between browser tabs, code editors, and design tools.",
        research: [
          "Analyzed 20+ power-user productivity workflows across design and engineering domains.",
          "Identified key pain points: window clutter, high cognitive load, and lack of visual grouping.",
          "Mapped out spatial canvas patterns used in modern 3D & canvas applications."
        ],
        designProcess: [
          "Created dark glassmorphic UI components with high-contrast typography hierarchy.",
          "Designed radial action menus and context-aware workspace clusters.",
          "Built interactive Figma prototypes with realistic motion micro-interactions."
        ],
        wireframeNotes: "Focused on low-friction navigation, persistent global search, and instant workspace snapshots.",
        uiHighlights: [
          "Glassmorphic visual surface system with adaptive noise layers",
          "Tactile dark palette tuned for extended low-light work sessions",
          "Custom window snap-grid powered by spring physics"
        ],
        techStackDetails: [
          "Built modular component system with React & TypeScript",
          "Used Three.js & HTML5 Canvas for real-time background particle depth",
          "Optimized animations using CSS GPU acceleration and Framer Motion"
        ],
        finalResult: "A sleek, highly cohesive spatial desktop prototype that reduces window switching friction and provides an ultra-immersive workspace experience.",
        keyLearnings: [
          "Designing for spatial UI requires balancing visual depth with strict functional clarity.",
          "Performant glassmorphism requires careful DOM layering to sustain 60 FPS."
        ],
        nextSteps: [
          "Integrate live window docking API simulation.",
          "Add customizable theme accent presets for user personalization."
        ],
        metrics: [
          { label: "Design Iterations", value: "35+" },
          { label: "Target Frame Rate", value: "60 FPS" },
          { label: "UI Components", value: "48 Cards" }
        ]
      }
    },
    {
      id: "project-02",
      number: "02",
      title: "Nexus Financial — AI Web Trading Dashboard",
      category: "FULL STACK & AI / ML",
      shortDescription: "An intelligent wealth management platform combining real-time asset tracking, predictive AI analytics, and high-density financial data visualizations.",
      tools: ["React", "TypeScript", "Node.js", "Python", "Tailwind CSS"],
      aspectRatio: "aspect-[4/3]",
      imageBgColor: "#141A14",
      gradientStyle: "from-emerald-950/40 via-zinc-900 to-black",
      caseStudy: {
        heroImage: "",
        role: "Full Stack Developer & UX Architect",
        timeline: "6 Weeks · Full Stack Build",
        overview: "Nexus Financial turns complex market telemetry into actionable insights using clean visual hierarchy, real-time data streaming, and automated portfolio risk scoring.",
        problem: "Financial dashboards are often overwhelming, overcrowded with raw tables, and lack clear visual signal hierarchy for rapid decision making.",
        research: [
          "Interviewed active retail investors and wealth advisors regarding dashboard readability.",
          "Found that 82% of users struggled to identify primary risk signals in legacy platforms.",
          "Studied high-density data visualizations in Bloomberg Terminal and modern fintech apps."
        ],
        designProcess: [
          "Structured tabular data into clear visual card modules with collapsible detail drawers.",
          "Selected electric green and amber accents for instant status feedback.",
          "Engineered dark mode charts optimized for rapid scanability."
        ],
        wireframeNotes: "Prioritized immediate asset visibility on top, followed by AI anomaly alerts and historical trends.",
        uiHighlights: [
          "High-contrast sparkline charts and candle visualization blocks",
          "Modular drag-and-drop dashboard grid layout",
          "Instant alert notifications with clear severity tags"
        ],
        techStackDetails: [
          "Front-end constructed with React, TypeScript, and Recharts",
          "Node.js & Express REST API for account management and security authentication",
          "Python backend service for real-time risk calculations and model inference"
        ],
        finalResult: "A powerful, clean financial web platform that provides immediate market clarity while maintaining enterprise-grade security and fast load times.",
        keyLearnings: [
          "High-density data requires strict typographic contrast to prevent visual fatigue.",
          "Optimizing WebSocket re-renders is critical for smooth chart animation."
        ],
        nextSteps: [
          "Add multi-currency portfolio conversion.",
          "Implement customizable chart overlay indicators."
        ],
        metrics: [
          { label: "Load Time", value: "< 0.8s" },
          { label: "Data Latency", value: "< 120ms" },
          { label: "System Views", value: "14 Pages" }
        ]
      }
    },
    {
      id: "project-03",
      number: "03",
      title: "Verve Health — Patient Care Mobile Platform",
      category: "UI/UX DESIGN",
      shortDescription: "A human-centric mobile healthcare application streamlining prescription tracking, specialist consultations, and personal health metrics.",
      tools: ["Figma", "User Research", "Prototyping", "Design Systems"],
      aspectRatio: "aspect-[16/10]",
      imageBgColor: "#19151D",
      gradientStyle: "from-purple-950/40 via-zinc-900 to-black",
      caseStudy: {
        heroImage: "",
        role: "Product & UX Designer",
        timeline: "3 Weeks · Research & UX Design",
        overview: "Verve Health bridges the gap between patient care management and clinical advice, offering a warm, intuitive interface for stress-free healthcare tracking.",
        problem: "Existing medical apps feel cold, clinical, and confusing. Elderly users and patients dealing with health stress often abandon complex onboarding flows.",
        research: [
          "Conducted usability audits across 3 mainstream healthcare applications.",
          "Identified major accessibility bottlenecks in appointment scheduling and medication reminders.",
          "Drafted user personas ranging from young professionals to elderly chronic condition managers."
        ],
        designProcess: [
          "Designed accessible typography scale (WCAG AAA contrast compliant).",
          "Crafted touch-friendly button targets (minimum 48px height).",
          "Developed step-by-step wizard flows for booking doctor appointments."
        ],
        wireframeNotes: "Eliminated nested navigation menus in favor of a clear 4-tab bottom navigation anchor.",
        uiHighlights: [
          "Soft dark theme with gentle purple and lime accents for calm visual aesthetic",
          "Visual timeline for daily prescription reminders",
          "One-tap emergency call and doctor messenger launcher"
        ],
        techStackDetails: [
          "Comprehensive design system created in Figma with auto-layout v5",
          "Interactive micro-prototypes created with component variables and state transitions",
          "Exported production-ready SVG assets and developer handoff specs"
        ],
        finalResult: "An accessible, empathetic healthcare app concept validated through user testing sessions with positive feedback on navigation speed and visual warmth.",
        keyLearnings: [
          "Empathy in UI design directly correlates with user trust and compliance in health apps.",
          "Accessibility standards improve the experience for every user demographic."
        ],
        nextSteps: [
          "Expand localized multi-language UI support.",
          "Design smartwatch companion interface."
        ],
        metrics: [
          { label: "Usability Score", value: "94/100" },
          { label: "Flow Friction", value: "-65%" },
          { label: "Screen Specs", value: "28 Views" }
        ]
      }
    },
    {
      id: "project-04",
      number: "04",
      title: "Kinetix 3D — Portfolio & Creative Showcase",
      category: "WEB DEVELOPMENT & CREATIVE TECH",
      shortDescription: "An interactive WebGL showcase featuring smooth canvas shaders, dynamic lighting controls, and interactive 3D geometry manipulation.",
      tools: ["React", "Three.js", "WebGL", "GSAP", "Tailwind CSS"],
      aspectRatio: "aspect-[4/3]",
      imageBgColor: "#181410",
      gradientStyle: "from-amber-950/40 via-zinc-900 to-black",
      caseStudy: {
        heroImage: "",
        role: "Creative Developer",
        timeline: "3 Weeks · Experimental Build",
        overview: "Kinetix 3D demonstrates how modern WebGL graphics can elevate digital brand storytelling without sacrificing performance or accessibility.",
        problem: "3D web experiences frequently suffer from high asset download sizes, choppy frame rates on mid-tier devices, and poor mobile fallback support.",
        research: [
          "Evaluated WebGL geometry optimization techniques and GLTF compression pipelines.",
          "Tested canvas resize handling across mobile, laptop, and ultra-wide displays."
        ],
        designProcess: [
          "Paired minimal dark typography with vibrant 3D reflective wireframes.",
          "Designed smooth scroll-triggered camera movements using GSAP ScrollTrigger.",
          "Integrated interactive mouse cursor hover physics onto 3D objects."
        ],
        wireframeNotes: "Constructed a seamless fixed overlay layout keeping navigation readable above the 3D canvas stage.",
        uiHighlights: [
          "Real-time glowing neon lighting shaders",
          "Smooth inertia-based drag and rotate controls",
          "Subtle noise filter post-processing pipeline"
        ],
        techStackDetails: [
          "Three.js canvas stage rendered inside React functional components",
          "Custom WebGL vertex and fragment shaders for procedural noise glow",
          "Vite bundler optimized with tree-shaking for minimal JS bundle overhead"
        ],
        finalResult: "A stunning, responsive 3D web experience running smoothly at 60 FPS across desktop and mobile browsers.",
        keyLearnings: [
          "Low-poly mesh instances combined with procedural shaders produce high visual fidelity at minimal performance cost.",
          "Progressive degradation is essential for hardware unsupported by WebGL."
        ],
        nextSteps: [
          "Add audio-reactive frequency shader controls.",
          "Implement GLTF custom model loader interface."
        ],
        metrics: [
          { label: "Frame Rate", value: "60 FPS" },
          { label: "Bundle Size", value: "< 240KB" },
          { label: "Shaders", value: "6 Custom" }
        ]
      }
    },
    {
      id: "project-05",
      number: "05",
      title: "Pulse Analytics — Real-Time API Monitor",
      category: "FULL STACK & INFRASTRUCTURE",
      shortDescription: "A developer tool monitoring API endpoint latency, error rates, and system uptime with automated email/SMS alert triggers.",
      tools: ["React", "Node.js", "Python", "MySQL", "Tailwind CSS"],
      aspectRatio: "aspect-[16/10]",
      imageBgColor: "#14151C",
      gradientStyle: "from-indigo-950/40 via-zinc-900 to-black",
      caseStudy: {
        heroImage: "",
        role: "Full Stack Engineer",
        timeline: "4 Weeks · Full Stack Application",
        overview: "Pulse Analytics gives engineering teams instant visibility into microservice health with clean uptime calendars, latency histograms, and alert rule builders.",
        problem: "DevOps monitoring tools often feature dated, hard-to-read interfaces that require excessive configuration to set up basic endpoint checks.",
        research: [
          "Studied developer feedback on existing API telemetry tools.",
          "Pinpointed the need for fast setup times and clear, actionable alert summaries."
        ],
        designProcess: [
          "Designed developer-focused dark interface with code snippet displays.",
          "Created color-coded status badges (Green = Healthy, Amber = Degraded, Red = Down).",
          "Crafted intuitive form controls for setting latency threshold alerts."
        ],
        wireframeNotes: "Structured main view around live endpoint ping cards with instant status filters.",
        uiHighlights: [
          "Live latency bar chart updating every 5 seconds",
          "Interactive API payload inspector panel",
          "Dark industrial aesthetics with electric lime status accents"
        ],
        techStackDetails: [
          "React frontend with Tailwind CSS and Lucide status icons",
          "Node.js express backend with scheduled health check cron tasks",
          "MySQL database storing historical latency telemetry and incident logs"
        ],
        finalResult: "A reliable, lightweight monitoring application that delivers immediate operational insight to developers with minimal setup overhead.",
        keyLearnings: [
          "Designing for developers requires focusing on speed, clear keyboard shortcuts, and minimal decorative noise.",
          "Efficient database indexing is essential when logging millions of ping records."
        ],
        nextSteps: [
          "Add Slack & Discord webhook integration.",
          "Build multi-region ping agent network."
        ],
        metrics: [
          { label: "Uptime Tracking", value: "99.99%" },
          { label: "Query Speed", value: "14ms" },
          { label: "API Check Interval", value: "5 Seconds" }
        ]
      }
    },
    {
      id: "project-06",
      number: "06",
      title: "Lumina — Enterprise Design System",
      category: "BRANDING & UI/UX DESIGN",
      shortDescription: "A comprehensive design system comprising 60+ dark-themed UI components, design tokens, typography rules, and React code implementations.",
      tools: ["Figma", "Design Systems", "React", "Tailwind CSS"],
      aspectRatio: "aspect-[4/3]",
      imageBgColor: "#171717",
      gradientStyle: "from-zinc-800/40 via-zinc-900 to-black",
      caseStudy: {
        heroImage: "",
        role: "Design System Lead & Frontend Engineer",
        timeline: "5 Weeks · System Architecture",
        overview: "Lumina standardizes visual design languages and frontend code across multi-team digital products, boosting development speed and brand consistency.",
        problem: "Product teams struggle with visual inconsistency, duplicate CSS code, and slow feature velocity when design tokens aren't unified across Figma and code.",
        research: [
          "Audited existing UI components across 4 web applications to map reusability requirements.",
          "Defined core token values for colors, spacing grid (8px scale), radii, and shadows."
        ],
        designProcess: [
          "Built a unified Figma component library using Auto Layout, component variants, and token variables.",
          "Defined strict typography hierarchies for headings, body text, and code blocks.",
          "Crafted accessible form controls, modal dialogs, and navigation primitives."
        ],
        wireframeNotes: "Created interactive component documentation pages with code copy-paste snippets.",
        uiHighlights: [
          "Cohesive dark theme token palette featuring electric lime primary accent",
          "Accessible color contrast combinations meeting WCAG AA requirements",
          "Consistent 8px spatial rhythm across all component variants"
        ],
        techStackDetails: [
          "Figma variable tokens mapped directly to Tailwind CSS custom theme settings",
          "TypeScript interfaces guaranteeing strict component prop safety",
          "Reusable React component package published with clean documentation"
        ],
        finalResult: "A robust design system that reduces UI bug reports, accelerates front-end development time by 40%, and establishes brand integrity.",
        keyLearnings: [
          "A design system is a living product that requires close alignment between designer intent and developer implementation.",
          "Well-structured design tokens make dark mode and theme switching effortless."
        ],
        nextSteps: [
          "Add automated Figma token sync GitHub Action pipeline.",
          "Expand accessibility documentation with keyboard shortcut specs."
        ],
        metrics: [
          { label: "UI Components", value: "60+ Tokens" },
          { label: "Dev Velocity", value: "+40%" },
          { label: "Consistency", value: "100%" }
        ]
      }
    }
  ],

  skills: {
    design: [
      "UI/UX Design",
      "User Research & Wireframing",
      "High-Fidelity Prototyping",
      "Design Systems & Token Architecture",
      "Motion Design & Micro-Interactions",
      "Editorial Typography & Visual Hierarchy",
      "Brand Identity & Visual Guidelines",
      "Mobile & Web App Architecture"
    ],
    development: [
      "Front-End Development (React, Next.js)",
      "Back-End Logic (Node.js, Express, Python)",
      "Full Stack Web Architecture",
      "Responsive & Accessible Web Design",
      "REST & GraphQL API Integration",
      "Database Design (MySQL, PostgreSQL)",
      "State Management & TypeScript",
      "Performance & Load Time Optimization"
    ]
  },

  tools: [
    { name: "Figma", category: "design", iconName: "Figma", description: "UI/UX, prototyping & design systems" },
    { name: "Adobe Photoshop", category: "design", iconName: "Image", description: "Raster manipulation & digital asset polish" },
    { name: "Adobe Illustrator", category: "design", iconName: "PenTool", description: "Vector graphics, logos & icon craft" },
    { name: "Adobe After Effects", category: "design", iconName: "Film", description: "Motion graphics & UI animation" },
    { name: "Adobe Premiere Pro", category: "design", iconName: "Video", description: "Video editing & presentation reels" },
    { name: "Blender", category: "design", iconName: "Box", description: "3D mesh modeling, lighting & rendering" },
    
    { name: "VS Code", category: "development", iconName: "Code", description: "Primary IDE & extension ecosystem" },
    { name: "Git", category: "development", iconName: "GitBranch", description: "Version control & branch management" },
    { name: "GitHub", category: "development", iconName: "Github", description: "Code hosting, CI/CD & collaboration" },
    { name: "HTML5", category: "development", iconName: "FileCode", description: "Semantic web structure & accessibility" },
    { name: "CSS3 / Tailwind", category: "development", iconName: "Palette", description: "Modern styling, layout & animations" },
    { name: "JavaScript", category: "development", iconName: "Terminal", description: "ES6+ async logic & DOM manipulation" },
    { name: "React", category: "development", iconName: "Atom", description: "Component UI architecture & state" },
    { name: "Node.js", category: "development", iconName: "Server", description: "Server-side runtime & REST endpoints" },
    { name: "Python", category: "development", iconName: "Cpu", description: "Scripting, backend API & data logic" },
    { name: "Java", category: "development", iconName: "Coffee", description: "Object-oriented software principles" },
    { name: "C", category: "development", iconName: "Binary", description: "Core programming & memory concepts" },
    { name: "MySQL", category: "development", iconName: "Database", description: "Relational database queries & schemas" }
  ] as ToolItem[],

  education: [
    {
      institution: "VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY",
      degree: "Engineering Graduate",
      period: "Engineering Degree",
      location: "Visakhapatnam, AP, India",
      description: "Advanced engineering coursework in computer science fundamentals, software architecture, programming logic, data structures, and web development technologies.",
      highlights: [
        "Solid grounding in Full Stack Software Engineering",
        "Focused study on Database Systems, Algorithms & Web Frameworks",
        "Active leader in design & tech project initiatives"
      ]
    },
    {
      institution: "SRI CHAITANYA JUNIOR COLLEGE",
      degree: "Academic Foundation (Higher Secondary)",
      period: "Intermediate Education",
      location: "Andhra Pradesh, India",
      description: "Intensive academic foundation in Mathematics, Physics, and Chemistry, cultivating strong analytical thinking, problem-solving discipline, and mathematical logic.",
      highlights: [
        "Strong quantitative & analytical problem-solving foundation",
        "Rigorous training in core science and logic discipline"
      ]
    },
    {
      institution: "BHASHYAM HIGH SCHOOL",
      degree: "Secondary School Education",
      period: "Schooling Foundation",
      location: "Andhra Pradesh, India",
      description: "Early academic education fostering creative curiosity, academic excellence, leadership activities, and foundational logic skills.",
      highlights: [
        "Fostered early passion for design, technology & reading",
        "Consistent academic performance & creative achievements"
      ]
    }
  ] as EducationItem[],

  process: [
    {
      number: "01",
      title: "DISCOVER",
      description: "Deconstruct the core problem, understand target user expectations, analyze domain benchmarks, and establish technical parameters."
    },
    {
      number: "02",
      title: "RESEARCH",
      description: "Explore user journeys, visual references, architectural patterns, and evaluate potential engineering trade-offs."
    },
    {
      number: "03",
      title: "DESIGN",
      description: "Transform insights into wireframes, high-fidelity dark mode interfaces, clear typography hierarchy, and fluid micro-interactions."
    },
    {
      number: "04",
      title: "BUILD",
      description: "Code modular, type-safe front-end and back-end logic with clean architecture, responsive layouts, and performance optimization."
    },
    {
      number: "05",
      title: "SHIP",
      description: "Rigorously test across browsers, audit accessibility, optimize loading speeds, and deploy a production-ready digital product."
    }
  ],

  socials: [
    { name: "LINKEDIN", url: "https://linkedin.com/in/nandelasaiteja", label: "LinkedIn Profile" },
    { name: "BEHANCE", url: "https://behance.net/nandelasaiteja", label: "Behance Portfolio" },
    { name: "GITHUB", url: "https://github.com/nandelasaiteja", label: "GitHub Code Repositories" },
    { name: "INSTAGRAM", url: "https://instagram.com/nandelasaiteja", label: "Instagram Design Handle" }
  ]
};
