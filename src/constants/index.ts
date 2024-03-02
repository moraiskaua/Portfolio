/* eslint-disable quotes */
import {
  web,
  javascript,
  typescript,
  reactjs,
  nextjs,
  tailwind,
  nestjs,
  nodejs,
  postgres,
  mongodb,
  prisma,
  git,
  docker,
  jestjs,
  styledComponents,
  mma,
  savingpetsLogo,
  sbm,
  deveconomy,
  snackbyte,
  chordio,
  savingpets,
  devMessage,
  biofit,
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
    name: 'React Native',
    icon: reactjs,
  },
  {
    name: 'NestJS',
    icon: nestjs,
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
    name: 'PostgreSQL',
    icon: postgres,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Jest',
    icon: jestjs,
  },
  {
    name: 'Styled Components',
    icon: styledComponents,
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
      'Developing and maintaining web applications using NextJS, NestJS, Typescript, TailwindCSS and other related technologies.',
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

const projects = [
  {
    name: 'Chord.io',
    description: `Listen and guess the chord of the day.`,
    tags: [
      {
        name: 'NextJS',
        color: 'text-gray-400',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'blue-text-gradient',
      },
    ],
    image: chordio,
    link: 'https://chord-io.netlify.app',
    source_code_link: 'https://github.com/moraiskaua/Chord.io',
  },
  {
    name: 'Saving Pets',
    description: 'Web system to contact the saving pets team.',
    tags: [
      {
        name: 'NextJS',
        color: 'text-gray-400',
      },
      {
        name: 'NestJS',
        color: 'pink-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'blue-text-gradient',
      },
    ],
    image: savingpets,
    link: 'https://saving-pets.vercel.app',
    source_code_link: 'https://github.com/moraiskaua/front-end-saving-pets',
  },
  {
    name: 'Biofit',
    description: 'Landing page for biofit gym',
    tags: [
      {
        name: 'NextJS',
        color: 'text-gray-400',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'blue-text-gradient',
      },
    ],
    image: biofit,
    link: 'https://biofit-theta.vercel.app',
    source_code_link: 'https://github.com/moraiskaua/Biofit',
  },
  {
    name: 'DevEconomy',
    description: 'Manage your personal finances.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'NestJS',
        color: 'pink-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'green-text-gradient',
      },
    ],
    image: deveconomy,
    link: 'https://dev-economy.vercel.app',
    source_code_link: 'https://github.com/moraiskaua/front-end-DevEconomy',
  },
  {
    name: 'SnackByte',
    description: 'Web system to manage a cafeteria.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'text-gray-400',
      },
    ],
    image: snackbyte,
    link: 'https://snackbyte.vercel.app',
    source_code_link: 'https://github.com/moraiskaua/front-end-SnackByte',
  },
  {
    name: 'DevMessage',
    description: 'Real-time web messenger.',
    tags: [
      {
        name: 'NextJS',
        color: 'text-gray-400',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'blue-text-gradient',
      },
    ],
    image: devMessage,
    link: 'https://dev-message.vercel.app',
    source_code_link: 'https://github.com/moraiskaua/DevMessage',
  },
];

export { services, technologies, experiences, projects };
