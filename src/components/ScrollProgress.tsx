import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const h = document.documentElement;
          const total = h.scrollHeight - h.clientHeight;
          setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-primary z-[60] origin-left shadow-glow transition-transform duration-100"
      style={{ transform: `scaleX(${p / 100})` }}
    />
  );
}
