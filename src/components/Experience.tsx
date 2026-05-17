import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-underline-text";

const TIMELINE = [
  { year: "Early Days", title: "Started Building", desc: "Began learning web, design and digital systems independently while studying." },
  { year: "Growth", title: "Hackathons & Startups", desc: "Joined hackathons, built startup concepts, and self-learned AI + growth." },
  { year: "Momentum", title: "First Real Builds", desc: "Shipped websites and digital projects for real businesses and clubs." },
  { year: "Present", title: "Earned Through Skills", desc: "Started monetizing freelance work, SEO services and digital execution." },
  { year: "Future", title: "Build & Scale", desc: "Launching products, scaling systems, and operating with founder mindset." },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Component 2 Sticker */}
      <motion.img
        src="/assets/component2.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute top-20 left-5 w-28 md:w-36 h-auto opacity-20 pointer-events-none -rotate-12"
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: -12 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Voxel Astronaut Sticker */}
      <motion.img
        src="/assets/voxel-astronaut-cut.png"
        alt=""
        loading="lazy"
        className="hidden md:block absolute bottom-10 right-10 w-32 md:w-40 h-auto opacity-20 pointer-events-none rotate-6"
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: 6 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            04 — Journey
          </span>
          <AnimatedText
            text="From learner to operator."
            textClassName="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            underlineClassName="text-primary"
            underlineDuration={1.3}
          />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glow line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background z-10 mt-2" />

                <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div 
                    className="rounded-2xl p-6 transition-all duration-300 inline-block w-full overflow-hidden relative group"
                    whileHover={{ y: -3 }}
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
                      <span className="font-mono text-xs text-primary uppercase tracking-widest">{t.year}</span>
                      <h3 className="font-display text-xl font-semibold mt-1 mb-2 text-foreground">{t.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{t.desc}</p>
                    </div>

                    {/* Edge highlight */}
                    <div 
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 1px 1px var(--metallic-edge-light), inset 0 -1px 1px var(--metallic-edge-dark)',
                      }}
                    />
                  </motion.div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>

          <style>{`
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
      </div>
    </section>
  );
}
