import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FlippingCard } from "@/components/ui/flipping-card";

export default function LocalBusinessWebsites() {
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Local Business Websites</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore our live client projects and demo showcases
          </p>

          <div className="flex flex-wrap gap-8 justify-center">
            {/* Live Business Card */}
            <FlippingCard
              width={350}
              height={400}
              frontContent={
                <div className="flex flex-col h-full w-full overflow-hidden">
                  <img 
                    src="/assets/live cover.jpg" 
                    alt="Live Business Projects" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Live Business</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Real client projects currently running in production.
                    </p>
                  </div>
                </div>
              }
              backContent={
                <div className="flex flex-col items-center justify-center h-full w-full p-6">
                  <Briefcase className="w-12 h-12 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                    View production-ready websites built for real businesses. Complete with custom domains, SEO optimization, and lead generation systems.
                  </p>
                  <button
                    onClick={() => navigate("/projects/local-business-websites/live")}
                    className="bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    View Live Projects
                  </button>
                </div>
              }
            />

            {/* Demo Card */}
            <FlippingCard
              width={350}
              height={400}
              frontContent={
                <div className="flex flex-col h-full w-full overflow-hidden">
                  <img 
                    src="/assets/demo cover.jpg" 
                    alt="Demo Projects" 
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Demo</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Sample projects and prototypes showcasing capabilities.
                    </p>
                  </div>
                </div>
              }
              backContent={
                <div className="flex flex-col items-center justify-center h-full w-full p-6">
                  <Rocket className="w-12 h-12 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                    Explore demo projects and prototypes. See innovative designs, experimental features, and creative concepts in action.
                  </p>
                  <button
                    onClick={() => navigate("/projects/local-business-websites/demo")}
                    className="bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    View Demo Projects
                  </button>
                </div>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
