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
    'https://dl.dropboxusercontent.com/scl/fi/kr1f785tw2vdjdmo9bbwa/Mujtaba_Dar_Frontend_Developer_Resume.pdf?rlkey=7t2y2g3536n4mthjxrk0z6jb9&st=zeui7k4e&dl=0',
  about:
    'Full Stack Developer at Codexiom, building responsive web applications and AI-powered products with React, Angular, Next.js, TypeScript and MongoDB. I started with an Angular internship at Premier Solutions and have been coding and shipping my own projects since 2022 — from API integration, state management, real-time chat and Stripe payments to turning Figma designs into clean, production-ready code.',
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
  title: string
  subtitle: string
  description: string
  image: string
  liveLink: string
  techStack: string[]
  features: string[]
  heroText: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Guidely',
    subtitle: 'Mentorship & Booking Platform',
    description:
      'A full-stack mentorship and booking platform connecting mentees with industry mentors for scheduled one-to-one sessions.',
    image: '/projects/guidely.webp',
    liveLink: 'https://guidely-project.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.IO', 'Stripe', 'Nodemailer', 'Tailwind CSS'],
    features: [
      'Real-time chat on a custom Socket.IO server with typing indicators and permission-based message requests',
      'Stripe Checkout integration for secure session payments',
      'Nodemailer-powered transactional email notifications',
    ],
    heroText:
      'Connect with industry mentors and book one-to-one sessions with real-time chat and secure payments.',
  },
  {
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
  Tailwindcss: 'Frontend',
  MaterialUI: 'Frontend',
  Bootstrap: 'Frontend',
  'Framer Motion': 'Frontend',
  Angular: 'Frameworks',
  React: 'Frameworks',
  Nextjs: 'Frameworks',
  Vuejs: 'Frameworks',
  Firebase: 'Backend',
  Django: 'Backend',
  MongoDB: 'Backend',
  'Socket.IO': 'Backend',
  Stripe: 'Backend',
  Nodemailer: 'Backend',
  Gemini: 'AI',
  Git: 'Tools',
  Wordpress: 'Tools',
  Elementor: 'Tools',
}

// Tokens that identify a skill inside a project's tech stack (compared after
// lower-casing and stripping non-alphanumerics).
export const skillAliases: Record<string, string[]> = {
  HTML: ['html'],
  CSS: ['css'],
  JavaScript: ['javascript', 'js'],
  TypeScript: ['typescript', 'ts'],
  Angular: ['angular'],
  React: ['react'],
  Nextjs: ['nextjs', 'next'],
  Vuejs: ['vuejs', 'vue'],
  Firebase: ['firebase'],
  Django: ['django'],
  MongoDB: ['mongodb'],
  'Socket.IO': ['socketio'],
  Stripe: ['stripe'],
  Nodemailer: ['nodemailer'],
  Tailwindcss: ['tailwindcss', 'tailwind'],
  MaterialUI: ['materialui', 'mui'],
  Bootstrap: ['bootstrap'],
  Git: ['git'],
  'Framer Motion': ['framermotion'],
  Gemini: ['geminiapi', 'gemini'],
  Wordpress: ['wordpress'],
  Elementor: ['elementor'],
}

export const avatarCaptions = {
  hero: "Hi, I'm Mujtaba. I build fast, responsive web experiences. Scroll down and let me show you around.",
  skills: 'A pocketful of tools. Tap a technology to see where I use it.',
  work: "From mentorship platforms to AI tools and e-commerce, these are the projects I've built.",
  contact: "Have something in mind? Let's build a great web experience together.",
} as const

export type AvatarSection = keyof typeof avatarCaptions
