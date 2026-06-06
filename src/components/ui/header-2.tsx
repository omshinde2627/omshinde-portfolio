'use client';

import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import SkyToggle from '@/components/ui/sky-toggle';
import FloatingContact from '@/components/FloatingContact';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    {
      label: 'Home',
      href: '#home',
    },
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

  // Prevent scrolling when menu is open
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

  // ESC key closes menu
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  return (
    <>
      {/* Fixed Corner SkyToggle - Hidden on mobile/tablet to prevent overlap */}
      <div className="hidden lg:block fixed -top-2 right-0 z-[60] scale-[0.35]">
        <SkyToggle />
      </div>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full will-change-transform',
          {
            'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm':
              scrolled && !open,
            'bg-background backdrop-blur-xl': open,
          },
        )}
        style={{ transition: 'background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease' }}
      >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg z-[70]">
          <img src="/assets/logo.png" alt="Om Shinde" className="w-8 h-8 rounded-full object-cover" />
          <span className="hidden sm:inline">Om Shinde</span>
        </a>

        {/* Desktop Menu */}
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

        {/* Mobile Hamburger - Custom Image */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden z-[70] p-2 hover:opacity-80 active:scale-95 transition-all"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {!open ? (
            <img 
              src="/assets/hamburger.png" 
              alt="Menu" 
              className="w-8 h-8 object-contain"
            />
          ) : (
            <X className="w-7 h-7 text-foreground" />
          )}
        </button>
      </nav>
      </header>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Full-screen overlay with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[60] md:hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Floating Premium Navigation Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] md:hidden"
              style={{ width: 'min(85vw, 400px)' }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="h-full bg-white dark:bg-zinc-950 shadow-2xl flex flex-col"
                style={{
                  borderRadius: '24px 0 0 24px',
                  boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <img src="/assets/logo.png" alt="Om Shinde" className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-bold text-lg">Om Shinde</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="space-y-2">
                    {links.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="block px-4 py-3 text-base font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Footer CTA */}
                <div className="p-6 border-t border-zinc-200 dark:border-zinc-800">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Button 
                      className="w-full h-12 text-base rounded-xl" 
                      onClick={() => { 
                        setOpen(false); 
                        setContactOpen(true); 
                      }}
                    >
                      Let's Talk
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
