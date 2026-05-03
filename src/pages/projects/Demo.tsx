import { ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Demo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/projects/local-business-websites")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Demo Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Showcase websites built to demonstrate design capabilities and modern web development techniques.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Cafe Core Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-2xl overflow-hidden"
            style={{
              background: 'var(--metallic-gradient)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
              border: '1px solid var(--metallic-border)',
            }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cafe Core</h3>
                  <p className="text-sm text-muted-foreground">Coffee Shop Website</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                >
                  <source src="/assets/cafecore.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Modern coffee shop website with elegant design, menu showcase, and smooth animations.
              </p>
            </div>

            {/* Metallic shine effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 0%, var(--metallic-shine-start) 45%, var(--metallic-shine-mid) 50%, var(--metallic-shine-start) 55%, transparent 100%)',
                transform: 'translateX(-100%)',
                animation: 'shine 3s infinite',
              }}
            />
          </motion.div>

          {/* Gym Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-2xl overflow-hidden"
            style={{
              background: 'var(--metallic-gradient)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
              border: '1px solid var(--metallic-border)',
            }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Gym Website</h3>
                  <p className="text-sm text-muted-foreground">Fitness Center Demo</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                >
                  <source src="/assets/gym.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Dynamic fitness website featuring membership plans, class schedules, and trainer profiles.
              </p>
            </div>

            {/* Metallic shine effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 0%, var(--metallic-shine-start) 45%, var(--metallic-shine-mid) 50%, var(--metallic-shine-start) 55%, transparent 100%)',
                transform: 'translateX(-100%)',
                animation: 'shine 3s infinite',
              }}
            />
          </motion.div>

          {/* Kanade Honda Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative rounded-2xl overflow-hidden"
            style={{
              background: 'var(--metallic-gradient)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
              border: '1px solid var(--metallic-border)',
            }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Kanade Honda</h3>
                  <p className="text-sm text-muted-foreground">Automotive Website</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                >
                  <source src="/assets/kanade honda.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Professional automotive dealership website with vehicle showcase and service information.
              </p>
            </div>

            {/* Metallic shine effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 0%, var(--metallic-shine-start) 45%, var(--metallic-shine-mid) 50%, var(--metallic-shine-start) 55%, transparent 100%)',
                transform: 'translateX(-100%)',
                animation: 'shine 3s infinite',
              }}
            />
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-2xl p-8 mb-8"
          style={{
            background: 'var(--metallic-gradient)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
            border: '1px solid var(--metallic-border)',
          }}
        >
          <h2 className="text-2xl font-bold mb-4">About These Demos</h2>
          <p className="text-muted-foreground leading-relaxed">
            These demo projects showcase modern web design principles, responsive layouts, and smooth user experiences. 
            Built with React, TypeScript, and Tailwind CSS, they demonstrate my ability to create visually appealing 
            and functional websites for various business types.
          </p>
        </motion.div>
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
  );
}
