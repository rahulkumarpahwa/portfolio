'use client';

import { navLinks } from '@/config/Navigation';
import { Download, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.download ? (
              <a
                key={link.label}
                href={link.href}
                download
                className="text-foreground hover:text-accent flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                <Download className="h-4 w-4" />
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-accent text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />

          <button
            onClick={toggleMenu}
            className="bg-muted text-muted-foreground hover:bg-primary/10 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            ref={dropdownRef}
            className="bg-background border-border animate-in fade-in slide-in-from-top-2 absolute top-16 right-0 left-0 border-b duration-200 md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) =>
                link.download ? (
                  <a
                    key={link.label}
                    href={link.href}
                    download
                    onClick={closeMenu}
                    className="text-foreground hover:text-accent hover:bg-muted flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    <Download className="h-4 w-4" />
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-foreground hover:text-accent hover:bg-muted rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
