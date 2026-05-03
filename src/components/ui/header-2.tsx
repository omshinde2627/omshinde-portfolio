'use client';

import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import SkyToggle from '@/components/ui/sky-toggle';
import FloatingContact from '@/components/FloatingContact';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Fixed Corner SkyToggle */}
      <div className="fixed -top-2 right-0 z-[60] scale-[0.35]">
        <SkyToggle />
      </div>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full will-change-transform',
          {
            'bg-background/95 border-b border-border shadow-sm':
              scrolled && !open,
            'bg-background': open,
          },
        )}
        style={{ transition: 'background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease' }}
      >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <img src="/assets/logo.png" alt="Om Shinde" className="w-8 h-8 rounded-full object-cover" />
          <span className="hidden sm:inline">Om Shinde</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <a key={i} className={buttonVariants({ variant: 'ghost', size: 'sm' })} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button size="sm" onClick={() => setContactOpen(true)}>
            Let's Talk
          </Button>
        </div>

        <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden">
          <MenuToggleIcon open={open} className="size-5" duration={200} />
        </Button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="space-y-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  className={buttonVariants({
                    variant: 'ghost',
                    className: 'w-full justify-start',
                  })}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <Button className="w-full" onClick={() => { setOpen(false); setContactOpen(true); }}>
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
      </header>

      <FloatingContact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

export const WordmarkIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <path d="M20 80 Q50 20 80 80 Q50 60 20 80Z M50 25 L50 55" />
    <text x="50" y="90" fontSize="12" textAnchor="middle" fill="currentColor">
      Om Shinde
    </text>
  </svg>
);
