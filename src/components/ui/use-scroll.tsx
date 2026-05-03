'use client';

import React from 'react';

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      const currentScrollY = window.scrollY;
      const shouldBeScrolled = currentScrollY > threshold;
      
      // Only update state if it actually changed
      if (scrolled !== shouldBeScrolled) {
        setScrolled(shouldBeScrolled);
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    // Check on mount
    updateScrolled();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, scrolled]);

  return scrolled;
}
