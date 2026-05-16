import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const previousPath = prevPathname.current;
    const currentPath = pathname;

    // Check if we're navigating back to homepage from a project page
    const isComingFromProjectPage = previousPath.startsWith("/projects/");
    const isGoingToHomepage = currentPath === "/";

    if (isGoingToHomepage && isComingFromProjectPage) {
      // Scroll to projects section on homepage with mobile-optimized behavior
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          // Check if user prefers reduced motion
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          
          // Get navbar height for offset (if exists)
          const navbar = document.querySelector('nav') || document.querySelector('header');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const offset = navbarHeight + 20; // Add 20px extra padding
          
          // Calculate position
          const elementPosition = projectsSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          // Smooth scroll with mobile optimization
          window.scrollTo({
            top: offsetPosition,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
          });
        }
      }, 150); // Slightly longer delay for mobile rendering
    } else {
      // Default behavior: instant scroll to top for all other navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Instant scroll for better performance
      });
    }

    // Update previous pathname
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
