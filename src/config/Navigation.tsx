export interface NavLink {
  label: string;
  href: string;
  download?: boolean;
}

export const navLinks: NavLink[] = [
  {
    label: 'Work',
    href: '/work-experience',
  },
  {
    label: 'Blogs',
    href: '/blog',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Resume',
    href: '/rahulkumar.pdf',
    download: true,
  },
];
