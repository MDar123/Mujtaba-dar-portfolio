// All portfolio content lives here. The experience, project and skill entries
// are carried over unchanged from the previous multi-page site.

export const profile = {
  name: 'Mujtaba Sohail Dar',
  shortName: 'Mujtaba Dar',
  firstName: 'Mujtaba',
  role: 'Full Stack Web Developer',
  email: 'mujtabadar98@gmail.com',
  photo:
    'https://dl.dropboxusercontent.com/scl/fi/9bhv3n0zw928878pd5ms1/pic002.jpg?rlkey=1gzlc15vc8h0mkns8g7ddhbu1&st=of81t2r8&dl=0',
  resume:
    'https://dl.dropboxusercontent.com/scl/fi/ma2gousvinj1enpmdhfqx/Mujtaba_dar_Full_Stack_Resume.pdf?rlkey=6a96u0msl1zbazr4nq16fgcll&st=i0mg3zis&dl=0',
  about:
    'Full Stack Developer with 2 years of experience building and maintaining web applications using React.js, Next.js, TypeScript, Supabase and Firebase. I work on LLM integrations and RAG-based AI solutions, and ship faster with AI-powered tools like Claude Code, Lovable and Replit. Day to day that means Stripe subscription billing, third-party API integrations, white-label systems and pixel-perfect UI.',
  whatsapp: {
    phone: '+923248458533',
    message: 'Hi! I saw your portfolio and would like to discuss a project.',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/MDar123' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mujtaba-sohail-dar-27937b280' },
    { label: 'Facebook', href: 'https://www.facebook.com/mujtaba.dar.129' },
  ],
}

export interface ExperienceItem {
  period: string
  title: string
  company?: string
  description?: string
}

export const experiences: ExperienceItem[] = [
  {
    period: 'October 2025 - Present',
    title: 'Full Stack Developer',
    company: 'Codexiom',
  },
  {
    period: 'June 2024 - September 2024',
    title: 'Intern as an Angular Developer',
    company: 'Premier Solutions',
  },
  {
    period: 'October 2022 - Present',
    title: 'Self Employed',
    description: 'Code and build something in everyday',
  },
]

export interface ProjectItem {
  slug: string
  title: string
  subtitle: string
  description: string
  image: string
  thumb: string
  liveLink: string
  techStack: string[]
  features: string[]
  heroText: string
}

export const projects: ProjectItem[] = [
  {
    slug: 'goaltrack',
    thumb: '/projects/thumb-goaltrack.jpg',
    title: 'GoalTrack',
    subtitle: 'Performance Management Platform',
    description:
      'A performance management platform used by 20+ employees, helping company leaders make informed decisions based on team performance and progress.',
    image: '/projects/goaltrack.jpg',
    liveLink: 'https://app.goaltrack.ai/',
    techStack: ['React', 'Vite', 'TypeScript', 'Supabase', 'PostgreSQL', 'React Query', 'Mailgun'],
    features: [
      'Goal-setting and tracking with Rocks and OKRs aligned to organizational objectives',
      'Structured one-on-one meetings with agendas, task tracking and follow-up actions',
      'Leadership reporting and employee progress monitoring across goals and evaluations',
    ],
    heroText:
      'Align every employee with company goals through OKRs, one-on-ones and leadership reporting.',
  },
  {
    slug: 'tradient',
    thumb: '/projects/thumb-tradient.jpg',
    title: 'Tradient',
    subtitle: 'AI-Powered Trading Platform',
    description:
      'A production, revenue-generating trading platform with a visual block-based strategy builder, templates, a strategy vault, AI-assisted creation and sharing.',
    image: '/projects/tradient.jpg',
    liveLink: 'https://tradient.app/',
    techStack: ['React', 'Vite', 'Hume.ai', 'LLM Integration', 'Supabase', 'Stripe', 'Replit'],
    features: [
      'Backtesting with performance analytics, live trading terminals and real-time strategy monitoring',
      'Referral and affiliate features for growing the user base',
      'Admin tools for users, analytics, billing, CRM and operations',
    ],
    heroText: 'Turn a trading idea into a running strategy with a visual, AI-assisted builder.',
  },
  {
    slug: 'hosting-analytics-dashboard',
    thumb: '/projects/thumb-hosting-dashboard.jpg',
    title: 'Hosting Analytics Dashboard',
    subtitle: 'Centralized Hosting Dashboard',
    description:
      'A centralized hosting dashboard integrating third-party APIs to give visibility into 50+ hosted websites, including security incidents, backups, updates, uptime history and performance.',
    image: '/projects/hosting-dashboard.jpg',
    liveLink: 'https://clients.planleft.com/',
    techStack: ['React', 'Supabase', 'Cloudways API', 'Amazon SES', 'Cron Jobs'],
    features: [
      'Trigger server and application actions like security scans and backups directly from the dashboard',
      'Automated email alerts for website downtime and server- or application-level events',
      'Built end-to-end, from authentication and API integration to backend workflows and deployment',
    ],
    heroText: 'One dashboard to monitor and manage 50+ hosted websites.',
  },
  {
    slug: 'guidely',
    thumb: '/projects/thumb-guidely.jpg',
    title: 'Guidely',
    subtitle: 'Mentorship & Booking Platform',
    description:
      'A full-stack mentorship platform with mentor verification, session booking and role-based dashboards for mentees, mentors and admins.',
    image: '/projects/guidely.webp',
    liveLink: 'https://guidely-project.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.IO', 'Stripe', 'Nodemailer', 'Tailwind CSS'],
    features: [
      'Real-time chat on a custom Socket.IO server with booking-based messaging permissions and message requests',
      'Stripe Checkout integration with payment-flow testing for secure session payments',
      'In-app notifications for messages, booking requests and booking approvals or rejections',
    ],
    heroText:
      'Connect with industry mentors and book one-to-one sessions with real-time chat and secure payments.',
  },
  {
    slug: 'resumify',
    thumb: '/projects/thumb-resumify.jpg',
    title: 'Resumify',
    subtitle: 'AI-Powered Resume Enhancement Platform',
    description:
      'A comprehensive platform designed for job seekers to create compelling, ATS-optimized resumes. It leverages artificial intelligence to match resume content with job requirements, ensuring maximum compatibility and success rates.',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/vih2bz6far7u8ef7326p6/Resumify.png?rlkey=gnwd1k2lrsevg8i85t4khrpmk&st=0oanmcm6&dl=0',
    liveLink: 'https://resumify-ashen.vercel.app/',
    techStack: ['React', 'Tailwind CSS', 'Gemini API', 'Framer Motion'],
    features: [
      'AI-powered resume analysis and optimization',
      'Real-time job description matching algorithm',
      'Professional template library with ATS compatibility',
      'Smart keyword extraction and integration',
    ],
    heroText:
      'Transform your resume with AI-powered optimization that matches job requirements perfectly.',
  },
  {
    slug: 'ai-assistant',
    thumb: '/projects/thumb-ai-assistant.jpg',
    title: 'AI Assistant',
    subtitle: 'Intelligent Task Management System',
    description:
      'A smart, interactive AI assistant designed to streamline daily tasks and answer queries with precision. This project highlights proficiency in AI integrations and intuitive user experience design.',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/inyajcsb6pz1k20jaw99h/project-002.png?rlkey=7eprjyb6wpgp41zimlnx0na8l&st=ourukh8i&dl=0',
    liveLink: 'https://ai-assistant-eight-gules.vercel.app/',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    features: [
      'Natural language processing for task interpretation',
      'Contextual conversation memory and learning',
      'Integration with popular productivity tools',
      'Multi-modal input support (text, voice, images)',
    ],
    heroText:
      'Intelligent AI assistant that understands context and streamlines your daily workflow efficiently.',
  },
  {
    slug: 'husky-wears',
    thumb: '/projects/thumb-husky-wears.jpg',
    title: 'Husky Wears',
    subtitle: 'Custom Apparel Manufacturing Platform',
    description:
      'A comprehensive WordPress-based custom apparel website featuring on-demand design capabilities, mobile responsiveness, secure order processing, and brand-focused design for scalable business growth.',
    image:
      'https://dl.dropboxusercontent.com/scl/fi/o4kpwledp6jk9w7raek4y/Huskywears-1.png?rlkey=rxqzi0udi4l40qy6cjpihfoba&st=d0zu32p9&dl=0',
    liveLink: 'https://huskywears.com/',
    techStack: ['WordPress', 'HTML', 'CSS', 'Elementor'],
    features: [
      'Custom design tool with real-time preview',
      'Automated order processing and inventory management',
      'Mobile-responsive e-commerce experience',
      'Scalable architecture for business growth',
    ],
    heroText:
      'Custom apparel platform with intuitive design tools and seamless e-commerce integration.',
  },
]

export interface ServiceItem {
  title: string
  description: string
}

export const services: ServiceItem[] = [
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions built to meet your unique business requirements and scale with your growth.',
  },
  {
    title: 'Website and App Development',
    description:
      'Modern, responsive websites and mobile applications designed for optimal user experience and performance.',
  },
  {
    title: 'SAAS Development',
    description:
      'Scalable Software-as-a-Service platforms with robust architecture and seamless user management.',
  },
  {
    title: 'Figma to Code',
    description:
      'Pixel-perfect conversion of your Figma designs into clean, maintainable, and responsive code.',
  },
]

// Filter groups for the skills "phone" — one category per skill in utils/Constants.ts
export const skillCategories = ['All', 'Frontend', 'Frameworks', 'Backend', 'AI', 'Tools'] as const
export type SkillCategory = Exclude<(typeof skillCategories)[number], 'All'>

export const skillCategoryByName: Record<string, SkillCategory> = {
  HTML: 'Frontend',
  CSS: 'Frontend',
  JavaScript: 'Frontend',
  TypeScript: 'Frontend',
  'Tailwind CSS': 'Frontend',
  'Shadcn UI': 'Frontend',
  'Radix UI': 'Frontend',
  Bootstrap: 'Frontend',
  React: 'Frameworks',
  'Next.js': 'Frameworks',
  Angular: 'Frameworks',
  Redux: 'Frameworks',
  Supabase: 'Backend',
  Firebase: 'Backend',
  MongoDB: 'Backend',
  'Socket.IO': 'Backend',
  Stripe: 'Backend',
  'Amazon SES': 'Backend',
  Nodemailer: 'Backend',
  'Claude Code': 'AI',
  'OpenAI Codex': 'AI',
  Antigravity: 'AI',
  Lovable: 'AI',
  Replit: 'AI',
  n8n: 'Tools',
  Zapier: 'Tools',
  Make: 'Tools',
  Git: 'Tools',
  GitHub: 'Tools',
  'VS Code': 'Tools',
}

// Tokens that identify a skill inside a project's tech stack (compared after
// lower-casing and stripping non-alphanumerics).
export const skillAliases: Record<string, string[]> = {
  HTML: ['html'],
  CSS: ['css'],
  JavaScript: ['javascript', 'js'],
  TypeScript: ['typescript', 'ts'],
  React: ['react'],
  'Next.js': ['nextjs', 'next'],
  Angular: ['angular'],
  Redux: ['redux'],
  'Tailwind CSS': ['tailwindcss', 'tailwind'],
  'Shadcn UI': ['shadcnui', 'shadcn'],
  'Radix UI': ['radixui', 'radix'],
  Bootstrap: ['bootstrap'],
  Supabase: ['supabase'],
  Firebase: ['firebase'],
  MongoDB: ['mongodb'],
  'Socket.IO': ['socketio'],
  Stripe: ['stripe'],
  'Amazon SES': ['amazonses', 'ses'],
  Nodemailer: ['nodemailer'],
  'Claude Code': ['claudecode'],
  'OpenAI Codex': ['openaicodex', 'codex'],
  Antigravity: ['antigravity', 'googleantigravity'],
  Lovable: ['lovable'],
  Replit: ['replit'],
  n8n: ['n8n'],
  Zapier: ['zapier'],
  Make: ['make'],
  Git: ['git'],
  GitHub: ['github'],
  'VS Code': ['vscode'],
}

export const avatarCaptions = {
  hero: "Hi, I'm Mujtaba. I build fast, responsive web experiences. Scroll down and let me show you around.",
  skills: 'A pocketful of tools. Tap a technology to see where I use it.',
  work: "From performance management and trading platforms to AI tools and e-commerce, these are the projects I've built.",
  contact: "Have something in mind? Let's build a great web experience together.",
} as const

export type AvatarSection = keyof typeof avatarCaptions
