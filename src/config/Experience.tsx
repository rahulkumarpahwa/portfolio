import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: true,
    company: 'Panjab University, Chandigarh',
    position: 'MCA Student',
    location: 'Chandigarh, India',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743647690/portfolio/pu-gandhi-bhawan_qhij5d.jpg',
    description: [
      'Accepted into the MCA 2024 program at the Department of Computer Science and Applications.',
      'Focused on strengthening foundations in software engineering, systems, and problem solving.',
    ],
    startDate: 'September 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
    ],
    website: '#',
    github: '#',
  },
  {
    isCurrent: false,
    company: 'Salesine',
    position: 'Software Engineer Intern',
    location: 'Remote',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743588056/portfolio/salesine_lyp3tz.png',
    description: [
      'Worked on web applications using modern frontend technologies.',
      'Designed and implemented scalable solutions, optimized performance, and collaborated across teams to improve user experience.',
    ],
    startDate: 'July 2024',
    endDate: 'January 2025',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
    ],
    website: 'https://salesine.com',
    github: 'https://github.com/rahulkumarpahwa',
  },
  {
    isCurrent: false,
    company: 'The Sparks Foundation',
    position: 'Web Developer and Designer',
    location: 'Remote',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743588060/portfolio/sparks_x4ufzp.png',
    description: [
      'Focused on UI/UX and frontend development.',
      'Built interactive web pages, improved accessibility, and made interfaces more responsive for better engagement.',
    ],
    startDate: 'July 2024',
    endDate: 'August 2024',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      {
        name: 'JavaScript',
        href: 'https://www.javascript.com/',
        icon: <JavaScript />,
      },
      { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
    ],
    website: 'https://thesparksfoundationsingapore.org/',
    github: 'https://github.com/rahulkumarpahwa',
  },
  {
    isCurrent: false,
    company: 'TECH-A-INTERN',
    position: 'Web Development and Designing Intern',
    location: 'Remote',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743588056/portfolio/techaintern_pmfqx4.png',
    description: [
      'Enhanced skills in front-end and responsive web design.',
      'Developed user-friendly interfaces and optimized website performance across devices.',
    ],
    startDate: 'April 2024',
    endDate: 'May 2024',
    technologies: [
      {
        name: 'HTML',
        href: 'https://developer.mozilla.org/docs/Web/HTML',
        icon: <JavaScript />,
      },
      {
        name: 'CSS',
        href: 'https://developer.mozilla.org/docs/Web/CSS',
        icon: <TailwindCss />,
      },
      {
        name: 'JavaScript',
        href: 'https://www.javascript.com/',
        icon: <JavaScript />,
      },
    ],
    website: 'https://techaintern.com/',
    github: 'https://github.com/rahulkumarpahwa',
  },
  {
    isCurrent: false,
    company: 'Bharat Intern',
    position: 'Full Stack Developer Intern',
    location: 'Remote',
    image:
      'https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743588061/portfolio/bharatintern_ktx1or.png',
    description: [
      'Worked on back-end and database management using the MERN stack.',
      'Created RESTful APIs, managed cloud-based databases, and integrated frontend and backend components.',
    ],
    startDate: 'March 2024',
    endDate: 'April 2024',
    technologies: [
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'Postman', href: 'https://postman.com/', icon: <Postman /> },
    ],
    website: '#',
    github: 'https://github.com/rahulkumarpahwa',
  },
];
