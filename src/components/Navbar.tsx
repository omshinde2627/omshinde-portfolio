import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-card" : ""
          }`}
        >
          <a href="#home" className="font-display font-bold text-lg flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center text-sm">
              OS
            </span>
            <span className="hidden sm:inline">Om Shinde</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-primary after:transition-all"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all hover:scale-105"
            >
              Let's Talk
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass"
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-px bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block w-5 h-px bg-foreground transition ${open ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-px bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-4 space-y-2"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-card text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
