import { ArrowLeft, ExternalLink, CheckCircle2, Globe, Mail, Smartphone, Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassButton } from "@/components/ui/glass-button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function GMKProject() {
  const navigate = useNavigate();

  const deliverables = [
    "Complete website makeover from legacy PHP to modern structure",
    "Preserved all existing database connections and data integrity",
    "Maintained all URL structures to prevent broken links",
    "Fully responsive design across all devices",
    "Improved code organization and maintainability",
    "Enhanced performance and loading speeds"
  ];

  const workDone = [
    { icon: Code, text: "Analyzed and restructured messy legacy PHP codebase from cPanel" },
    { icon: Globe, text: "Carefully preserved all existing URLs and routing to prevent broken links" },
    { icon: Mail, text: "Maintained database connections and ensured data integrity throughout migration" },
    { icon: Zap, text: "Refactored PHP code with better structure and modern practices" },
    { icon: Smartphone, text: "Implemented responsive design for all screen sizes" },
    { icon: CheckCircle2, text: "Successfully deployed makeover without breaking existing functionality" }
  ];

  return (
    <>
      <SEO 
        title="GMK Technologies Website Makeover — Om Shinde | Legacy PHP Modernization"
        description="Case study: GMK Technologies website makeover by Om Shinde. Transformed messy legacy PHP codebase into modern, maintainable structure while preserving database integrity and preventing broken links."
        keywords="Om Shinde GMK Technologies, PHP website makeover, legacy code refactoring, cPanel website migration, database preservation, website modernization India"
      />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects/local-business-websites/live")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4 sm:mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">Live & Active</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              GMK Technologies
            </h1>

            {/* One-liner */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Complete website makeover from legacy PHP codebase to modern, maintainable structure while preserving all functionality.
            </p>

            {/* Live Link */}
            <GlassButton
              size="lg"
              contentClassName="flex items-center gap-2 text-sm sm:text-base"
              onClick={() => window.open("https://gmktechnologies.com", "_blank", "noopener,noreferrer")}
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              Visit Live Website
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </GlassButton>
          </motion.div>
        </div>

        {/* Screenshots Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-5xl mx-auto"
          >
            {/* Website Before Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">Website Before — Old PHP Structure</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">The original website had outdated design, messy code structure, and poor organization.</p>
              
              {/* Before Screenshots Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-foreground/10"
                >
                  <img 
                    src="/assets/gmk1.png" 
                    alt="GMK Website Before - Screenshot 1" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-white">Before</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-foreground/10"
                >
                  <img 
                    src="/assets/gmk2.png" 
                    alt="GMK Website Before - Screenshot 2" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-white">Before</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-foreground/10"
                >
                  <img 
                    src="/assets/gmk3.png" 
                    alt="GMK Website Before - Screenshot 3" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-white">Before</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-foreground/10"
                >
                  <img 
                    src="/assets/gmk4.png" 
                    alt="GMK Website Before - Screenshot 4" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-white">Before</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Website After Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">Website After — Modern & Organized</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Complete makeover with improved structure, better design, and maintainable code.</p>
              
              {/* After Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border border-foreground/10"
              >
                <video 
                  src="/assets/makeoverGMK.mp4" 
                  className="w-full h-auto"
                  controls
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    After — Live Now
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Project Overview Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8"
              style={{
                background: 'var(--metallic-gradient)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
                border: '1px solid var(--metallic-border)',
              }}
            >
              {/* Brushed metal texture */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, var(--metallic-texture) 2px, var(--metallic-texture) 4px)',
                }}
              />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Project Overview</h2>
                
                {/* 24-hour deadline badge */}
                <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400">Delivered within 24 hours!</span>
                </div>
                
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                  This was a challenging website makeover project for GMK Technologies. The existing website was built with very old PHP code, had a messy file structure in cPanel, and poor organization. I had never worked with cPanel before, but I carefully analyzed the entire codebase to understand how everything worked.
                </p>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                  The biggest challenge was ensuring nothing broke during the transformation. The website had an existing database and many internal links that needed to remain functional. I meticulously refactored the PHP code, improved the file structure, and modernized the codebase while making absolutely sure that all URLs stayed intact and the database connections remained stable.
                </p>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                  Although I typically prefer working with React for its component-based architecture and clean structure, I chose to keep this project in PHP to maintain compatibility with the existing infrastructure and minimize risks. The result was a successful makeover that transformed a messy, outdated website into a well-organized, maintainable codebase — all completed within the client's 24-hour deadline.
                </p>
                
                <div className="pt-4 sm:pt-6 border-t border-foreground/10">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Impact</h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Successfully transformed a legacy website into a modern, maintainable platform without any downtime or broken functionality. The client now has a solid foundation for future growth and easier maintenance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What I Did Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8"
              style={{
                background: 'var(--metallic-gradient)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
                border: '1px solid var(--metallic-border)',
              }}
            >
              {/* Brushed metal texture */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, var(--metallic-texture) 2px, var(--metallic-texture) 4px)',
                }}
              />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">What I Did</h2>
                <div className="space-y-3 sm:space-y-4">
                  {workDone.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <div className="mt-0.5 sm:mt-1 p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                        <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed flex-1">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* What I Delivered Card - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-2 relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8"
              style={{
                background: 'var(--metallic-gradient)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
                border: '1px solid var(--metallic-border)',
              }}
            >
              {/* Brushed metal texture */}
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, var(--metallic-texture) 2px, var(--metallic-texture) 4px)',
                }}
              />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">What I Delivered</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {deliverables.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background/50 backdrop-blur-sm border border-foreground/5"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground/80">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
