import { motion } from "framer-motion";
import { ArrowLeft, Search, Zap, TrendingUp, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SEORanking() {
  const navigate = useNavigate();

  const actions = [
    "Fixed core technical issues affecting speed & indexing",
    "Rebuilt on-page SEO structure (headings, meta, content flow)",
    "Optimized homepage around high-intent local keywords",
    "Strengthened internal linking & mobile performance",
    "Added strategic off-page signals to build initial authority"
  ];

  const results = [
    { icon: Zap, label: "Performance", value: "90+", description: "Jumped from low scores" },
    { icon: TrendingUp, label: "SEO Health", value: "Significantly Improved", description: "Across the site" },
    { icon: Target, label: "Keyword Rankings", value: "1st Page", description: "From 3rd-4th page" },
    { icon: Award, label: "Search Visibility", value: "Ranks & Converts", description: "Search-optimized asset" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">SEO Case Study</h1>
              <p className="text-xl text-muted-foreground mt-2">Local Healthcare Website</p>
            </div>
          </div>

          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl p-8 mb-8"
            style={{
              background: 'var(--metallic-gradient)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
              border: '1px solid var(--metallic-border)',
            }}
          >
            {/* Checkered light pattern */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
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
              <h2 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The website was originally built on a template — clean design, but poor SEO structure, weak performance, and almost no search visibility.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I stepped in, it was sitting on the <span className="font-semibold text-foreground">3rd–4th page of Google</span>, barely getting any traction.
              </p>
            </div>
          </motion.div>

          {/* The Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl p-8 mb-8"
            style={{
              background: 'var(--metallic-gradient)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
              border: '1px solid var(--metallic-border)',
            }}
          >
            {/* Checkered light pattern */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
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
              <h2 className="text-2xl font-bold mb-4 text-foreground">The Approach</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Instead of overcomplicating, I focused on what actually moves the needle:
              </p>
              <div className="space-y-3">
                {actions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-foreground/5"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    </div>
                    <span className="text-foreground/80 leading-relaxed">{action}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* The Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">The Results</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Within a short cycle, the impact was clear:
            </p>

            {/* Before/After Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">Before SEO</span>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-foreground/10">
                  <img 
                    src="/assets/before seo.png" 
                    alt="Before SEO - Poor Performance" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">After SEO</span>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-foreground/10">
                  <img 
                    src="/assets/seo after.png" 
                    alt="After SEO - Improved Performance" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Homepage SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mb-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Homepage SEO Optimization</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">Now on 1st Page 🎯</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-foreground/10 mb-4">
                <img 
                  src="/assets/hopage seo.png" 
                  alt="Homepage SEO Optimization" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Search Result Impact */}
              <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20">
                <p className="text-foreground/90 leading-relaxed">
                  Previously, when people searched for <span className="font-semibold text-foreground">"gynecologist in Yewalewadi"</span>, the website didn't show up at all. After optimization, it now ranks on the <span className="font-semibold text-green-600 dark:text-green-400">1st page</span> for this high-intent local search query.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl p-6"
                  style={{
                    background: 'var(--metallic-gradient)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
                    border: '1px solid var(--metallic-border)',
                  }}
                >
                  {/* Checkered light pattern */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
                      `,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <result.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-foreground/60 mb-1">{result.label}</h3>
                        <p className="text-2xl font-bold text-foreground mb-1">{result.value}</p>
                        <p className="text-sm text-foreground/70">{result.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative overflow-hidden rounded-2xl p-8"
            style={{
              background: 'var(--metallic-gradient)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
              border: '1px solid var(--metallic-border)',
            }}
          >
            {/* Checkered light pattern */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <span className="text-xl">🧠</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Outcome</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                What started as a template-based website with weak SEO turned into a <span className="font-semibold text-foreground">search-optimized asset that actually ranks and converts</span> — done purely by aligning execution with client requirements and practical constraints.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
