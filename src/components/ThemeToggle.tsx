import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(actualTheme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-glow transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: actualTheme === "dark" ? 1 : 0,
          opacity: actualTheme === "dark" ? 1 : 0,
          rotate: actualTheme === "dark" ? 0 : 180,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
      >
        <Moon className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: actualTheme === "light" ? 1 : 0,
          opacity: actualTheme === "light" ? 1 : 0,
          rotate: actualTheme === "light" ? 0 : -180,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
      >
        <Sun className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}
