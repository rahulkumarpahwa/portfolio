'use client';

import { footerConfig } from '@/config/Footer';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:example@example.com', label: 'Email' },
  ];

  return (
    <footer className="border-border/40 bg-background w-full border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          <div className="col-span-2 space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/favicon.ico"
                alt="Portfolio Logo"
                className="dark:invert"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold">
                {footerConfig.companyName}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {footerConfig.description}
            </p>
          </div>

          {footerConfig.sections.slice(0, 2).map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-foreground font-semibold">{section.title}</h3>
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="space-y-3">
            <h3 className="text-foreground font-semibold">Follow</h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-border/40 border-t" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-muted-foreground text-center text-sm md:text-left">
            © {currentYear} {footerConfig.companyName}. All rights reserved.
          </p>
          <div className="text-muted-foreground flex gap-4 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <span className="text-border">•</span>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
