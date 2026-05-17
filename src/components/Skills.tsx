import { motion, useReducedMotion } from "framer-motion";
import { Code2, Search, Bot, Palette, Brain, Rocket, Sparkles, TrendingUp, Megaphone, BarChart3 } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-underline-text";
import { FeatureCard } from "@/components/ui/grid-feature-cards";

const SKILLS = [
  { 
    icon: Code2, 
    title: "Web Development", 
    description: "Building modern, responsive websites with React, TypeScript, and cutting-edge frameworks." 
  },
  { 
    icon: Search, 
    title: "SEO Ranking", 
    description: "Optimizing content and technical SEO to achieve top search engine rankings and visibility." 
  },
  { 
    icon: Bot, 
    title: "AI Automation", 
    description: "Creating intelligent automation systems using AI tools to streamline business operations." 
  },
  { 
    icon: Palette, 
    title: "UI/UX Thinking", 
    description: "Designing intuitive user interfaces with focus on user experience and visual appeal." 
  },
  { 
    icon: Brain, 
    title: "Marketing Psychology", 
    description: "Understanding consumer behavior and applying psychological principles to marketing strategies." 
  },
  { 
    icon: Rocket, 
    title: "Startup Strategy", 
    description: "Developing growth strategies and execution plans for early-stage startups and ventures." 
  },
  { 
    icon: Sparkles, 
    title: "Prompt Engineering", 
    description: "Crafting effective AI prompts to maximize output quality and achieve desired results." 
  },
  { 
    icon: Megaphone, 
    title: "Branding", 
    description: "Building strong brand identities that resonate with target audiences and stand out." 
  },
  { 
    icon: TrendingUp, 
    title: "Growth Systems", 
    description: "Implementing scalable growth frameworks and systems for sustainable business expansion." 
  },
  { 
    icon: BarChart3, 
    title: "Sales Understanding", 
    description: "Analyzing sales funnels and customer journeys to optimize conversion and revenue." 
  },
];

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
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

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[140px]" />

      {/* Component 1 Sticker */}
      <motion.img
        src="/assets/component1.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute top-10 right-5 w-24 md:w-32 h-auto opacity-20 pointer-events-none rotate-12"
        initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: 12 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container relative z-10">
        <AnimatedContainer className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            02 — Skills
          </span>
          <AnimatedText
            text="The full stack of an operator."
            textClassName="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            underlineClassName="text-primary"
            underlineDuration={1.2}
          />
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base max-w-2xl mx-auto">
            Everything you need to build fast, secure, scalable products and grow businesses.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {SKILLS.map((skill, i) => (
            <FeatureCard key={i} feature={skill} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
