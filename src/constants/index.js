/* eslint-disable quotes */
import {
  web,
  javascript,
  typescript,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  postgres,
  git,
  docker,
  mma,
  savingpetsLogo,
  sbm,
  devlanchar,
  admintemplate,
  quiznext,
  clonenetflix,
  savingpets,
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
    title: 'Front-end Developer',
    icon: nextjs,
  },
  {
    title: 'Back-end Developer',
    icon: nodejs,
  },
  {
    title: 'Mobile Developer',
    icon: reactjs,
  },
  {
    title: 'Full-stack Developer',
    icon: web,
  },
];

const technologies = [
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Postgres SQL',
    icon: postgres,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full-stack Developer',
    company_name: 'Ministério do Meio Ambiente',
    icon: mma,
    iconBg: 'linear-gradient(128deg , #24A474, #015D08)',
    date: 'September 2023 - At the moment',
    points: [
      'Developing and maintaining the geprod web system using Angular, Spring and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Full-stack Developer',
    company_name: 'Saving Pets',
    icon: savingpetsLogo,
    iconBg: '#000',
    date: 'July 2023 - At the moment',
    points: [
      'Developing and maintaining web applications using NextJS, NodeJS, Typescript, TailwindCSS and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Full-stack Developer',
    company_name: 'Small Business Management',
    icon: sbm,
    iconBg: '#CE7A1B',
    date: 'July 2022 - June 2023',
    points: [
      'Developing and maintaining web applications using NextJS, Typescript, Firebase, TailwindCSS and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Saving Pets',
    description: 'Web system to help report animal abuse.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: savingpets,
    source_code_link: 'https://github.com/moraiskaua/front-end-saving-pets',
  },
  {
    name: 'Dev Lanchar',
    description: 'Web system to manage a cafeteria.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: devlanchar,
    source_code_link: 'https://github.com/moraiskaua/front-end-devLanchar',
  },
  {
    name: 'Admin Template',
    description: 'Admin panel example web system.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: admintemplate,
    source_code_link: 'https://github.com/moraiskaua/next-adminTemplate',
  },
  {
    name: 'Quiz NextJS',
    description: 'Quiz about NextJS.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
    ],
    image: quiznext,
    source_code_link: 'https://github.com/moraiskaua/next-quiz',
  },
  {
    name: 'Netflix Clone',
    description: 'Netflix home page clone.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
    ],
    image: clonenetflix,
    source_code_link: 'https://github.com/moraiskaua/react-netflixClone',
  },
];

export { services, technologies, experiences, testimonials, projects };
