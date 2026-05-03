import { motion } from "framer-motion";
import { ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RetroTvError } from "@/components/ui/404-error-page";

export default function StartupConcepts() {
  const navigate = useNavigate();

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
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Startup Concepts</h1>
              <p className="text-xl text-muted-foreground mt-2">Ideas in development</p>
            </div>
          </div>

          {/* Retro TV Error Component */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div style={{ transform: 'scale(0.7)' }}>
              <RetroTvError 
                errorCode="WIP"
                errorMessage="WORK IN PROGRESS"
              />
            </div>
          </div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-foreground/10 shadow-xl"
          >
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Project in Initial Stage
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                This startup concept is currently in its initial development phase. We're working on market research, MVP development, and validating the core ideas. The project will be uploaded once it's completed and ready for showcase.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Coming Soon</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
