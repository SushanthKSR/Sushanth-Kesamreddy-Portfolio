export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'Headphones Mart - E-Commerce Platform',
    desc: 'A headphones e-commerce platform leveraging Next.js for dynamic frontend capabilities and Sanity for scalable backend content management. Focused on delivering a seamless, user-friendly shopping experience with optimized performance, responsive design, and efficient content updates, ensuring a modern and engaging platform tailored for audio enthusiasts and online shoppers',
    subdesc:
      'Designed for optimal performance and scalability.',
    href: 'https://sushanth-emart.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  
]


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Kmicro Tech',
    pos: 'Web Developer Intern',
    duration: 'May2024 - July2024',
    title: "As a Web Development Intern at Kmirco Tech, I developed a responsive dashboard using HTML, CSS, and JavaScript, integrating real-time data through APIs. I implemented data visualizations with libraries like Chart.js and D3.js, optimizing performance and ensuring usability across devices. This experience honed my full-stack development skills.",
    icon: '/assets/Screenshot 2025-01-21 at 3.50.51 AM 2.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Amity Innovation Incubator',
    pos: 'Web Developer Backend Intern',
    duration: '2022 - 2024',
    title: "At Amity Innovation Incubator, my role focused on developing the backend for robotic systems. I designed and implemented APIs to facilitate communication between robots and control systems, ensuring seamless data exchange. I also integrated databases for real-time monitoring, optimized performance, and ensured security, enhancing robotic functionality and efficiency.",
    icon: 'assets/Screenshot 2025-01-16 at 8.31.56 PM.svg',
    animation: 'clapping',
  },

];
