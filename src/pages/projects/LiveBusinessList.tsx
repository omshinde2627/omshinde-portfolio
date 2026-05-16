import { motion } from "framer-motion";
import { ArrowLeft, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FlippingCard } from "@/components/ui/flipping-card";
import SEO from "@/components/SEO";

export default function LiveBusinessList() {
  const navigate = useNavigate();

  const liveProjects = [
    {
      name: "STC Cloud Solutions",
      image: "/assets/stc cover.png",
      logo: "/assets/logo.png",
      gradient: "from-blue-500 to-cyan-500",
      description: "BPO & Outsourcing company website with integrated email system. Complete end-to-end development from design to deployment.",
      website: "https://stccloudsolutions.com",
      detailPage: "/projects/local-business-websites/live/stc",
      tags: [],
    },
    {
      name: "GMK Technologies",
      image: "/assets/GMK cover.jpg",
      logo: "/assets/logo.png",
      gradient: "from-purple-500 to-pink-500",
      description: "Technology solutions company website. Modern design with service showcase and client inquiry system.",
      website: "https://gmktechnologies.com",
      detailPage: "/projects/local-business-websites/live/gmk",
      tags: [],
    },
  ];

  return (
    <>
      <SEO 
        title="Live Business Websites — Om Shinde | Client Projects Portfolio"
        description="Explore live business websites built by Om Shinde. Real client projects including STC Cloud Solutions and GMK Technologies. Full-stack development with modern tech stack."
        keywords="Om Shinde live projects, client websites, business website development, React projects, live websites portfolio"
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects/local-business-websites")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Live Business Websites</h1>
                <p className="text-xl text-muted-foreground mt-2">Production-ready client projects</p>
              </div>
            </div>

            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-12">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {liveProjects.length} Live Projects
              </span>
            </div>

            {/* Project Cards */}
            <div className="flex flex-wrap gap-8 justify-center">
              {liveProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <FlippingCard
                    width={380}
                    height={480}
                    frontContent={
                      <div className="flex flex-col h-full w-full overflow-hidden">
                        <div className="relative">
                          <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-56 object-cover rounded-t-xl"
                          />
                          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-white flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              Live
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                              <Globe className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                            </div>
                          </div>
                          {project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.tags.map((tag, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    }
                    backContent={
                      <div className="flex flex-col items-center justify-center h-full w-full p-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg mb-4`}>
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 text-center">{project.name}</h3>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6 px-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-col gap-3 w-full px-4">
                          <button
                            onClick={() => navigate(project.detailPage)}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background hover:scale-105 transition-transform duration-300 text-sm font-semibold"
                          >
                            View Case Study
                          </button>
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-semibold"
                          >
                            <Globe className="w-4 h-4" />
                            Visit Website
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    }
                  />
                </motion.div>
              ))}
            </div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl p-8 mt-12"
              style={{
                background: 'var(--metallic-gradient)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 var(--metallic-highlight), inset 0 -1px 0 var(--metallic-shadow)',
                border: '1px solid var(--metallic-border)',
              }}
            >
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-foreground">About These Projects</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These are live, production-ready websites built for real businesses. Each project includes custom design, 
                  responsive layouts, SEO optimization, lead generation systems, and ongoing support. All websites are deployed 
                  with custom domains and are actively generating business inquiries.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
