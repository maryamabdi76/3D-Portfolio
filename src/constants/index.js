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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  company,
  finalyst,
  tethermart,
  workmap,
  pushx,
  himart,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile And Web React Native",
    company_name: "Teanab(Tehran)",
    icon: finalyst,
    iconBg: "#0099ad",
    date: "Dec 2023 - Present",
    project: "Finalyst.co",
    projectUrl: "https://app.finalyst.co",
    points: [
      "Designed an efficient codebase to make interaction between native code of app and Web-Based files of the chart performant and seamless. (Memory usage improved by 60%.)",
      "Implemented Notifications using Expo Notifications service. Exported Web and PWA Builds using React-Native-Web. Saving up to 4 months of additional programming.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Teanab(Tehran)",
    icon: tethermart,
    iconBg: "#0099ad",
    date: "May 2023 - Present",
    project: "TetherMart.co",
    projectUrl: "https://TetherMart.co",
    points: [
      "Enhanced user experience at TetherMart by implementing over 20 design elements using Material-UI (MUI), leading to a 15% increase in user engagement. Leveraged proficiency in Next.js for efficient server-side rendering, achieving a 50%",
      "improvement in page load times and a 20% increase in user satisfaction scores. Integrated advanced web technologies, achieving a 40% reduction in load times and enhancing responsiveness across devices, significantly improving the scalability and performance of applications.",
      "Built TetherPal, a mobile project focused on Tether to Iranian Rial (IRT) trading, utilizing Next.js for fast loading speeds, achieving a 30% faster load time compared to previous versions, though not currently live.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Teanab(Tehran)",
    icon: pushx,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    project: "PushX.com",
    projectUrl: "https://PushX.com",
    points: [
      "Optimized the PushX Admin Panel by leveraging React.js and Ant Design, significantly boosting UI and UX for administrators by 20%.",
      "This strategic integration not only streamlined the management of venues, events, and brands but also enhanced the platform's overall performance and scalability, achieving a 30% improvement.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Hyperoffice(US)",
    icon: workmap,
    iconBg: "#ffffff",
    date: "Jan 2021 - Aug 2022",
    project: "WorkMap.ai",
    projectUrl: "https://WorkMap.ai",
    points: [
      "Developed on WorkMap.ai's web-based relational database management system by implementing ag-Grid and Ant Design in React.js, significantly optimizing data management capabilities.",
      "Managed the team through more than 10 successful releases, introducing approximately 10 innovative features and resolving over 350 critical bugs.",
      "Worked closely with the backend team and the marketing team in the US to introduce new advanced features, ensuring seamless integration and functionality.",
      "Restructured large portions of the old codebase into new, clean, and readable code, achieving file size reductions of up to 90% in some instances.",
      "Boosted the loading performance of large Ag-Grid database tables by 200% through the implementation of server-side pagination and data lazy loading techniques, significantly improving user experience and system efficiency.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Himart(Tehran)",
    icon: himart,
    iconBg: "#ffffff",
    date: "May 2020 - Jan 2021",
    project: "Himart.ir",
    projectUrl: "https://Himart.ir",
    points: [
      "Optimized the Himart Admin Panel by leveraging Vue.js and CoreUI, significantly improving its functionality and user interface by 40%.",
      "Designed and implemented a user-friendly dashboard, enhancing user experience and efficiency in managing platform features by 35%.",
      "Focused on implementing secure and compliant design practices, ensuring the protection of the platform's data and user information, with a 50% increase in security measures.",
      "Supported Himart's growth by providing administrators with a powerful and intuitive tool for effective platform management, boosting productivity by 25%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
