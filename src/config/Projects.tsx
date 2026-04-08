import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Fuzzy Logic',
    description:
      'Exploring the concepts of fuzzy logic in real-world applications.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743584495/portfolio/fuzzy_pgmhzf.png',
    link: 'https://rahulkumarpahwa.tech/projects/fuzzy-logic',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa',
    live: 'https://rahulkumarpahwa.tech/projects/fuzzy-logic',
    details: true,
    projectDetailsPageSlug: '/projects/fuzzy-logic',
    isWorking: true,
  },
  {
    title: 'ਸਵਿਗੀ - Food Ordering App',
    description:
      'A React-based food ordering app created as part of learning modern frontend development.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743575795/portfolio/swiggy_nxlph5.png',
    link: 'https://the-swiggy-app.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa',
    live: 'https://the-swiggy-app.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/swiggy-app',
    isWorking: true,
  },
  {
    title: 'React-Redux Projects',
    description:
      'An app that contains multiple React and Redux based applications.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743575794/portfolio/reactreduxapp_catzu4.png',
    link: 'https://react-redux-projects-rahul.netlify.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa',
    live: 'https://react-redux-projects-rahul.netlify.app/',
    details: true,
    projectDetailsPageSlug: '/projects/react-redux-projects',
    isWorking: true,
  },
  {
    title: 'WanderLust - A Full Stack Airbnb Clone',
    description:
      'Wanderlust: Airbnb clone for property listings, map, images, and user comments.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743575796/portfolio/wanderlust_ysgibd.png',
    link: 'https://thewanderlust.onrender.com/listings',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa',
    live: 'https://thewanderlust.onrender.com/listings',
    details: true,
    projectDetailsPageSlug: '/projects/wanderlust',
    isWorking: true,
  },
  {
    title: 'Homely.org',
    description:
      'A full-stack website that facilitates free housing for people affected by natural disasters and emergencies.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743575795/portfolio/homely_taak1h.png',
    link: 'https://homely-org.onrender.com/homely',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa',
    live: 'https://homely-org.onrender.com/homely',
    details: true,
    projectDetailsPageSlug: '/projects/homely',
    isWorking: true,
  },
  {
    title: 'Portfolio - rahulkumarpahwa.tech',
    description:
      'A personal portfolio project showing my journey and projects.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743575795/portfolio/portfolio_to0dvb.png',
    link: 'https://rahulkumarpahwa.tech',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa',
    live: 'https://rahulkumarpahwa.tech',
    details: true,
    projectDetailsPageSlug: '/projects/portfolio',
    isWorking: true,
  },
  {
    title: 'Typing Speed Master',
    description: 'A terminal based typing test.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743582854/portfolio/typing_kucf3d.png',
    link: 'https://github.com/rahulkumarpahwa/java-projects',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa/java-projects',
    live: 'https://github.com/rahulkumarpahwa/java-projects',
    details: true,
    projectDetailsPageSlug: '/projects/typing-speed-master',
    isWorking: true,
  },
  {
    title: 'HangMan - Word Guessing Game',
    description: 'A C++ based word guessing game played in terminal.',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743582856/portfolio/hangman_rptlb1.png',
    link: 'https://github.com/rahulkumarpahwa/cpp/tree/main/Hangman',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/rahulkumarpahwa/cpp/tree/main/Hangman',
    live: 'https://github.com/rahulkumarpahwa/cpp/tree/main/Hangman',
    details: true,
    projectDetailsPageSlug: '/projects/hangman',
    isWorking: true,
  },
];
