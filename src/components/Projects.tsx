import { motion, useReducedMotion } from "framer-motion";
import { Code2, Search, Lightbulb, Rocket, Brain, DollarSign } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-underline-text";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const PROJECTS: BentoItem[] = [
  {
    title: "Local Business Websites",
    meta: "5+ clients",
    description:
      "Built conversion-focused websites for local businesses that improved visibility, credibility & leads.",
    icon: <Code2 className="w-4 h-4 text-blue-500" />,
    tags: ["Web Dev", "SEO", "Conversion"],
    colSpan: 2,
    hasPersistentHover: true,
    link: "/projects/local-business-websites",
  },
  {
    title: "SEO Ranking Projects",
    meta: "Page 1 results",
    description:
      "Search ranking improvements, content strategy, and online presence growth for clients.",
    icon: <Search className="w-4 h-4 text-cyan-500" />,
    tags: ["SEO", "Growth"],
    link: "/projects/seo-ranking",
  },
  {
    title: "Hackathon Builds",
    meta: "5+ events",
    description:
      "Rapid product prototypes, innovation concepts and problem-solving builds under 24-48hrs.",
    icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
    tags: ["Hackathon", "MVP"],
    colSpan: 2,
    link: "/projects/hackathon-builds",
  },
  {
    title: "Startup Concepts",
    meta: "3 ideas",
    description:
      "Marketplace, review platform, AI systems, and local business product ideas — designed to scale.",
    icon: <Rocket className="w-4 h-4 text-indigo-500" />,
    tags: ["Startup", "AI"],
    link: "/projects/startup-concepts",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden scroll-mt-20">
      {/* Voxel Dino moved from About to Projects */}
      <motion.img
        src="/assets/voxel-dino-cut.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute bottom-10 left-5 md:left-10 w-24 md:w-32 lg:w-40 h-auto opacity-20 pointer-events-none -rotate-6"
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              03 — Projects
            </span>
            <AnimatedText
              text="See the work"
              textClassName="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-foreground text-left"
              underlineClassName="text-primary"
              underlineDuration={1.0}
            />
            <p className="text-muted-foreground text-sm mt-2">Tap to see</p>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            A snapshot of things I've built across web, SEO, AI and startup execution.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <BentoGrid items={PROJECTS} />
        </motion.div>
      </div>
    </section>
  );
}
