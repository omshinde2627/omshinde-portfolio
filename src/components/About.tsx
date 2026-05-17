import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, memo } from "react";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedText } from "@/components/ui/animated-underline-text";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

const STATS = [
  { label: "Projects Built", value: 7, suffix: "+" },
  { label: "Businesses Helped", value: 2, suffix: "" },
  { label: "Hackathons Joined", value: 3, suffix: "" },
  { label: "Skills Stack", value: 8, suffix: "+" },
];

const Counter = memo(function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setN(to);
      return;
    }
    let start = 0;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setN(Math.floor(start + (to - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, shouldReduceMotion]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
});

const PILLS = ["AI Tools", "Web Dev", "SEO Growth", "Branding", "Product Thinking", "Startup Execution", "Automation"];

function About() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px]" />

      {/* Voxel1 Sticker */}
      <motion.img
        src="/assets/voxel1.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute top-20 right-5 md:right-10 w-20 md:w-28 lg:w-36 h-auto opacity-20 pointer-events-none rotate-[15deg]"
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8, rotate: 22 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: 15 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* V1 Sticker */}
      <motion.img
        src="/assets/v1.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute bottom-10 left-5 md:left-10 w-20 md:w-24 lg:w-32 h-auto opacity-20 pointer-events-none -rotate-[8deg]"
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8, rotate: -15 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              01 — About
            </span>
            <AnimatedText
              text="Young builder. Real execution."
              textClassName="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground text-left"
              underlineClassName="text-primary"
              underlineDuration={1.2}
              className="items-start mb-6"
            />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              I'm Om Shinde — a young ambitious builder from India focused on creating businesses,
              products, and digital systems that solve real problems.
            </p>
            <TextEffect per="word" preset={shouldReduceMotion ? "fade" : "blur"} delay={shouldReduceMotion ? 0 : 0.3} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              I don't just learn trends. I build with them.
            </TextEffect>

            <div className="flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="px-2.5 md:px-3 py-1 md:py-1.5 text-xs font-mono rounded-full glass border-primary/20 text-foreground/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: shouldReduceMotion ? 0 : i * 0.1, 
                  duration: shouldReduceMotion ? 0 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative glass glow-border rounded-2xl p-4 md:p-6 hover:shadow-glow transition-all duration-500 group"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-flame mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
                <div className="absolute top-2 md:top-3 right-2 md:right-3 w-2 h-2 rounded-full bg-primary group-hover:animate-pulse" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(About);
