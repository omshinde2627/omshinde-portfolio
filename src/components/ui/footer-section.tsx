'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Github } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Quick Links',
    links: [
      { title: 'About', href: '#about' },
      { title: 'Skills', href: '#skills' },
      { title: 'Projects', href: '#projects' },
      { title: 'Experience', href: '#experience' },
    ],
  },
  {
    label: 'Contact',
    links: [
      { title: 'Email', href: 'mailto:omshinde27614@gmail.com' },
      { title: 'Phone', href: 'tel:9579074332' },
      { title: 'Location', href: '#contact' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Resume', href: '#' },
      { title: 'Portfolio', href: '#' },
      { title: 'Blog', href: '#' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'GitHub', href: 'https://github.com/omshinde2627', icon: Github },
      { title: 'Instagram', href: 'https://www.instagram.com/_.omshinde/', icon: InstagramIcon },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/in/om-shinde-48900b370/', icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16" style={{ willChange: 'auto' }}>
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Om Shinde" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold text-lg">Om Shinde</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Young builder from India — turning ideas into products through web development, AI, and growth systems.
          </p>
          <p className="text-muted-foreground mt-8 text-sm md:mt-4">
            © {new Date().getFullYear()} Om Shinde. All rights reserved.
          </p>
        </AnimatedContainer>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold uppercase tracking-wider">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ translateY: 10, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
