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
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

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
    name: 'git',
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
      'Digital Room — Built a Vue 3 Progressive Web App as a unified container for multi-team web applications, with iframe-based micro-frontend hosting and a dynamic tab system.',
      'Digital Room — Implemented Gateway SSO authentication and secure postMessage communication; engineered URL state compression and browser history sync for deep linking; handled iOS Safari BFCache, safe-area, and PWA edge cases with a mobile-first RTL Tailwind UI.',
      'Home — Built with Next.js 16, React 19, TypeScript, and Tailwind CSS; Gateway SSO; configurable homepage sections (service cards, carousels, banners, partners) driven by API data; admin drag-and-drop homepage builder.',
      'Casie — Built a service and case management platform with Next.js 16, TypeScript, and React 19; Gateway SSO, SignalR real-time updates, internationalization, and admin features with shadcn/ui, TanStack Query, and React Hook Form.',
      'Profile — Built a multilingual profile and workspace management app (Persian, English, Arabic) with Gateway SSO and a dynamic facet system for schema-driven forms using Radix UI and Tailwind CSS.',
    ],
  },
  {
    title: 'Mobile And Web React Native',
    company_name: 'Teanab',
    icon: finalyst,
    iconBg: '#0099ad',
    date: 'Dec 2023 - Jun 2024',
    project: 'Finalyst',
    projectUrl: 'https://app.finalyst.co',
    points: [
      'Developed an optimized codebase to streamline interaction between native code and web-based chart files, ensuring seamless performance.',
      'Implemented a real-time notification system using Expo Notifications, improving user engagement.',
      'Exported web and PWA builds with React Native Web, significantly reducing development time and effort.',
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
      'Developed both the web platform and Admin Panel, enabling efficient management of users, transactions, and platform settings.',
      'Enhanced user experience with Material-UI, improving engagement and usability.',
      'Optimized performance and scalability using Next.js and server-side rendering (SSR).',
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
      'Enhanced the Admin Panel using React.js and Ant Design, improving the user interface and experience for administrators.',
      'Streamlined venue, event, and brand management, enhancing platform performance and scalability.',
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
      'Web PWA (Vue 3) app shell for Tehran Digital Chamber — hosts multi-team micro-frontends in sandboxed iframes with gateway SSO, postMessage bridge, lazy iframe tabs, and mobile-first RTL chrome.',
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
      'Service and case management platform (Next.js 16 / React 19) with Gateway auth, Camunda BPM forms, SignalR chat, Chart.js + AI analysis, Workbox PWA, and trilingual i18n.',
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
      'Feature-based Next.js 16 homepage portal with Gateway SSO, drag-and-drop admin CMS builder, nested services, MinIO files, Workbox PWA, and MizBunny iframe embedding.',
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
      'Multilingual profile & workspace app with schema-driven facet forms (RHF + Zod), Neshan maps, file pipeline, Gateway cookie SSO, and Workbox offline PWA.',
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
      'Crypto trading web platform and Admin Panel with Next.js SSR, Material-UI, and modular architecture for users, transactions, and settings.',
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
};

export { services, technologies, experiences, projects, contactInfo };
