import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  vuejs,
  redux,
  jest,
  tailwind,
  git,
  digitalchamber,
  digitalroom,
  casie,
  home,
  profile,
  finalyst,
  tethermart,
  tethermartApp,
  workmap,
  workmapApp,
  workmapApp2,
  pushx,
  himart,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const profileTitle = 'Senior Front-End Engineer';

const services = [
  {
    title: 'Front-End Architecture',
    icon: web,
  },
  {
    title: 'React / Next.js',
    icon: backend,
  },
  {
    title: 'React Native',
    icon: mobile,
  },
  {
    title: 'PWA & Micro-frontends',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Jest',
    icon: jest,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Tehran Chamber of Commerce',
    icon: digitalchamber,
    iconBg: '#FFFFFF',
    date: 'Jun 2024 - Present',
    project: 'Digital Room, Home, Casie, Profile',
    projectUrl: '',
    points: [
      'Digital Room — Built a Vue 3 PWA shell hosting independently deployed micro-frontends through sandboxed iframe architecture, with postMessage for navigation, authentication, and host integration.',
      'Digital Room — Implemented gateway-based authentication with cookie sessions, JWT synchronization, and secure logout; optimized iframe lifecycle, lazy loading, and Safari mobile edge cases.',
      'Home — Developed a configurable CMS-driven homepage platform using Next.js, React, TypeScript, and Tailwind CSS with an admin page builder for dynamic sections, banners, services, and content management.',
      'Casie — Built a workflow management platform using Next.js 16, React 19, and TypeScript with feature-based architecture, dynamic BPM forms (React Hook Form + Zod), and AI-assisted reporting dashboards.',
      'Casie — Integrated Gateway authentication and RBAC; built reusable UI with shadcn/ui and Radix UI; scaled API integration with TanStack Query and Axios.',
      'Profile — Architected a feature-based profile and workspace app with Next.js App Router, schema-driven forms from backend metadata, TanStack Query, and Zustand.',
      'Profile — Integrated interactive maps with geolocation and reverse geocoding, file management, and dynamic field rendering.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Teanab',
    icon: finalyst,
    iconBg: '#0099ad',
    date: 'Dec 2023 - Jun 2024',
    project: 'Finalyst',
    projectUrl: 'https://app.finalyst.co',
    points: [
      'Developed cross-platform mobile applications using React Native and Expo.',
      'Shared business logic between mobile and web using React Native Web.',
      'Implemented real-time notifications and optimized application performance.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'Teanab',
    icon: tethermart,
    iconBg: '#0099ad',
    date: 'May 2023 - Dec 2023',
    project: 'TetherMart',
    projectUrl: 'https://TetherMart.co',
    points: [
      'Developed customer-facing platform and administration panel using Next.js.',
      'Built reusable UI components with Material UI.',
      'Improved scalability using SSR and modular architecture.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'Teanab',
    icon: pushx,
    iconBg: '#383E56',
    date: 'Dec 2022 - Dec 2023',
    project: 'PushX',
    projectUrl: 'https://PushX.com',
    points: [
      'Developed administration features using React and Ant Design, improving event, venue, and brand management workflows.',
      'Refactored reusable UI components for better maintainability.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'Hyperoffice | Remote, US',
    icon: workmap,
    iconBg: '#ffffff',
    date: 'Jan 2021 - Aug 2022',
    project: 'WorkMap',
    projectUrl: 'https://WorkMap.ai',
    points: [
      'Developed key features for a web-based relational database system using React.js, ag-Grid, Ant Design, and Redux, improving data management.',
      'Led multiple successful releases, introducing new features and resolving critical issues.',
      'Refactored a significant portion of the legacy codebase into clean, modular components, improving maintainability.',
      'Optimized large ag-Grid tables with server-side pagination and lazy loading, enhancing loading performance.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'HiMart | Tehran, Iran',
    icon: himart,
    iconBg: '#ffffff',
    date: 'May 2020 - Jan 2021',
    project: 'Himart.ir',
    projectUrl: 'https://Himart.ir',
    points: [
      'Developed and optimized the Admin Panel using Vue.js and CoreUI, enhancing functionality and user experience.',
      'Designed an intuitive dashboard, improving efficiency in platform management for administrators.',
      'Implemented security best practices to strengthen platform protection and compliance.',
    ],
  },
];

const projects = [
  {
    name: 'Digital Room',
    description:
      'Vue 3 PWA app container hosting independently deployed micro-frontends through sandboxed iframes, with gateway authentication, postMessage integration, lazy loading, and Safari mobile optimizations.',
    tags: [
      { name: 'vue3', color: 'blue-text-gradient' },
      { name: 'pwa', color: 'green-text-gradient' },
      { name: 'micro-frontends', color: 'pink-text-gradient' },
      { name: 'tailwind', color: 'blue-text-gradient' },
      { name: 'gateway-sso', color: 'green-text-gradient' },
    ],
    images: [digitalroom],
    project_link: 'https://app.digitalchamber.ir',
    source_code_link: '',
  },
  {
    name: 'Casie',
    description:
      'Workflow management platform built with Next.js 16, React 19, and TypeScript — feature-based architecture, schema-driven BPM forms, reporting dashboards, AI-assisted chart analysis, and real-time collaboration with Gateway RBAC.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'react19', color: 'green-text-gradient' },
      { name: 'typescript', color: 'pink-text-gradient' },
      { name: 'shadcn/ui', color: 'blue-text-gradient' },
      { name: 'tanstack-query', color: 'green-text-gradient' },
      { name: 'signalr', color: 'pink-text-gradient' },
    ],
    images: [casie],
    project_link: 'https://casie.digitalchamber.ir',
    source_code_link: '',
  },
  {
    name: 'Home',
    description:
      'Configurable CMS-driven homepage platform using Next.js, React, TypeScript, and Tailwind CSS — admin page builder, dynamic sections and banners, PWA support, and embedded app integration via postMessage.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'typescript', color: 'green-text-gradient' },
      { name: 'shadcn/ui', color: 'pink-text-gradient' },
      { name: 'zustand', color: 'blue-text-gradient' },
      { name: 'tanstack-query', color: 'green-text-gradient' },
      { name: 'pwa', color: 'pink-text-gradient' },
    ],
    images: [home],
    project_link: 'https://home.digitalchamber.ir',
    source_code_link: '',
  },
  {
    name: 'Profile',
    description:
      'Feature-based profile and workspace management app with Next.js App Router — schema-driven forms from backend metadata, interactive maps with geolocation, file management, TanStack Query, and Zustand.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'typescript', color: 'green-text-gradient' },
      { name: 'react-hook-form', color: 'pink-text-gradient' },
      { name: 'zod', color: 'blue-text-gradient' },
      { name: 'tanstack-query', color: 'green-text-gradient' },
      { name: 'next-intl', color: 'pink-text-gradient' },
    ],
    images: [profile],
    project_link: 'https://profile.digitalchamber.ir',
    source_code_link: '',
  },
  {
    name: 'TetherMart',
    description:
      'Customer-facing platform and admin panel built with Next.js, Material UI reusable components, SSR, and modular architecture.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'material-ui', color: 'green-text-gradient' },
      { name: 'ssr', color: 'pink-text-gradient' },
      { name: 'typescript', color: 'blue-text-gradient' },
    ],
    images: [tethermartApp],
    project_link: 'https://tethermart.co',
    source_code_link: '',
  },
  {
    name: 'WorkMap',
    description:
      'Web-based relational database platform with React, ag-Grid, Ant Design, and Redux — server-side pagination, lazy loading, and large-scale legacy refactors.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'ag-grid', color: 'green-text-gradient' },
      { name: 'antd', color: 'pink-text-gradient' },
      { name: 'redux', color: 'blue-text-gradient' },
    ],
    images: [workmapApp, workmapApp2],
    project_link: 'https://app.workmap.ai',
    source_code_link: '',
  },
];

const contactInfo = {
  email: 'maryamabdi9776@gmail.com',
  phone: '+98-9912013220',
  location: 'Tehran, Iran',
  linkedin: 'https://ir.linkedin.com/in/maryam-abdi-1b3a29140',
  github: 'https://github.com/maryamabdi76',
  resume: `${import.meta.env.BASE_URL}Maryam_Abdi_Resume.pdf`,
};

export { services, technologies, experiences, projects, contactInfo };
