import { motion, useReducedMotion } from "framer-motion";
import { Zap, Target, Brain, Rocket } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedText } from "@/components/ui/animated-underline-text";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { useState, useEffect } from "react";

const REASONS = [
  { icon: Brain, title: "Creative Thinking", desc: "I see patterns in design, business and behavior that most people miss." },
  { icon: Zap, title: "Execution Speed", desc: "I ship fast. Done is better than perfect. Then I iterate and improve." },
  { icon: Target, title: "Business Mindset", desc: "I understand what gets attention, what converts, and what scales." },
  { icon: Rocket, title: "Modern Skills", desc: "AI, automation, growth systems — I work with the tools shaping the future." },
];

export default function WhyMe() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 md:opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            05 — Why Me
          </span>
          <AnimatedText
            text="Why work with Om?"
            textClassName="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-foreground text-left"
            underlineClassName="text-primary"
            underlineDuration={1.2}
            className="items-start mb-6"
          />
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            <TextEffect per="word" preset="fade" delay={shouldReduceMotion ? 0 : 0.2} as="span" className="inline">
              Because I combine creativity, execution, business thinking and modern skills — in one operator.
            </TextEffect>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : i * 0.1, duration: shouldReduceMotion ? 0 : 0.6 }}
              whileHover={!isMobile ? { y: -4 } : {}}
              className="group relative rounded-2xl md:rounded-3xl p-5 md:p-7 transition-all duration-300 overflow-hidden"
              style={{
                background: 'var(--metallic-gradient)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
                border: '1px solid var(--metallic-border)',
              }}
            >
              {/* Metallic shine effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(110deg, transparent 0%, var(--metallic-shine-start) 45%, var(--metallic-shine-mid) 50%, var(--metallic-shine-start) 55%, transparent 100%)',
                  transform: 'translateX(-100%)',
                  animation: 'shine 3s infinite',
                }}
              />
              
              {/* Brushed metal texture */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, var(--metallic-texture) 2px, var(--metallic-texture) 4px)',
                }}
              />

              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 md:mb-5 shadow-lg group-hover:rotate-6 transition-transform">
                  <r.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold mb-2 text-foreground">{r.title}</h3>
                <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
              </div>

              {/* Edge highlight */}
              <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
                style={{
                  boxShadow: 'inset 0 1px 1px var(--metallic-edge-light), inset 0 -1px 1px var(--metallic-edge-dark)',
                }}
              />
            </motion.div>
          ))}
        </div>

        <style jsx>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
