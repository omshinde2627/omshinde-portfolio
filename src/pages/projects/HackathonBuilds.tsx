import { motion } from "framer-motion";
import { ArrowLeft, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FlippingCard } from "@/components/ui/flipping-card";
import SEO from "@/components/SEO";

export default function HackathonBuilds() {
  const navigate = useNavigate();

  const hackathons = [
    {
      name: "Hack the Flame",
      image: "/assets/1st hackathon.png",
      iconImage: "/assets/1st.jpg",
      gradient: "from-yellow-500 to-amber-500",
      description: "We cleared the 1st round with a strong idea, but couldn't advance past the 2nd round. Check out the project details on GitHub to see what we built.",
      githubLink: "https://github.com/omshinde2627/medV",
      certificateLink: "/assets/1st hackathon.pdf",
    },
    {
      name: "AWS ImpactX at IIT Bombay",
      image: "/assets/2nd hackathon.png",
      iconImage: "/assets/2nd.jpg",
      gradient: "from-blue-500 to-cyan-500",
      description: "Selected for the finals at IIT Bombay after clearing the initial round. Competed in an intense 9-hour hackathon with many teams. We built a working MVP but fell short in the presentation, which cost us the win.",
      githubLink: "https://github.com/omshinde2627/-Generative-Resilience-Agent",
      certificateLink: "/assets/Om_Shinde_certificate.pdf",
      certificateNote: "* Certificates only given to shortlisted finalists who were present there",
    },
    {
      name: "GDG TechSprint",
      image: "/assets/3rd hackathon.png",
      iconImage: "/assets/3rd.jpg",
      gradient: "from-purple-500 to-pink-500",
      description: "Participated with VU friends and cleared Round 1, advancing to the semifinals under team Cosmos. Unfortunately, we faced a critical issue with multilingual text-to-speech in our MVP and couldn't submit on time.",
      deckLink: "/assets/sarthii.pdf",
      projectNote: "* Our project was not completed, but have a glimpse of the project by the deck",
    },
  ];

  return (
    <>
      <SEO 
        title="Hackathon Projects — Om Shinde | Rapid Innovation & Problem Solving"
        description="Om Shinde's hackathon journey: Hack the Flame, AWS ImpactX at IIT Bombay, and GDG TechSprint. Building MVPs under pressure, learning from setbacks, and continuous improvement."
        keywords="Om Shinde hackathons, IIT Bombay hackathon, AWS ImpactX, rapid prototyping, MVP development, hackathon projects India, tech competitions"
      />
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
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-foreground/10">
              <img 
                src="/assets/hackathon logo.jpg" 
                alt="Hackathon Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Hackathon Builds</h1>
              <p className="text-xl text-muted-foreground mt-2">Rapid innovation under pressure</p>
            </div>
          </div>

          {/* Hackathon Flipping Cards */}
          <div className="flex flex-wrap gap-8 justify-center mb-12">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <FlippingCard
                  width={350}
                  height={450}
                  frontContent={
                    <div className="flex flex-col h-full w-full overflow-hidden">
                      <img 
                        src={hackathon.image} 
                        alt={hackathon.name} 
                        className="w-full h-56 object-cover rounded-t-xl"
                      />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                            <img 
                              src={hackathon.iconImage} 
                              alt={`${hackathon.name} icon`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{hackathon.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col items-center justify-center h-full w-full p-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg mb-4">
                        <img 
                          src={hackathon.iconImage} 
                          alt={`${hackathon.name} icon`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 text-center">{hackathon.name}</h3>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6">
                        {hackathon.description}
                      </p>
                      
                      {/* Certificate Note or Project Note */}
                      {(hackathon.certificateNote || hackathon.projectNote) && (
                        <p className="text-xs text-muted-foreground text-center italic mb-4 px-4">
                          {hackathon.certificateNote || hackathon.projectNote}
                        </p>
                      )}
                      
                      {/* Links */}
                      <div className="flex gap-3 mt-auto">
                        {hackathon.githubLink && (
                          <a
                            href={hackathon.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:scale-105 transition-transform duration-300 text-sm font-semibold"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        )}
                        {hackathon.deckLink && (
                          <a
                            href={hackathon.deckLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:scale-105 transition-transform duration-300 text-sm font-semibold"
                          >
                            <FileText className="w-4 h-4" />
                            View Deck
                          </a>
                        )}
                        {hackathon.certificateLink && hackathon.certificateLink !== "#" && (
                          <a
                            href={hackathon.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:scale-105 transition-transform duration-300 text-sm font-semibold"
                          >
                            <FileText className="w-4 h-4" />
                            Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>

          {/* Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-2xl border border-foreground/10"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Every Setback is a Setup for a Comeback
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl">
                Not every hackathon ends with a trophy, and that's okay. Each challenge taught me something valuable — whether it was technical skills, time management, or the art of presentation. The rounds we didn't clear, the MVPs that didn't make it on time, and the presentations that fell short — they all shaped me into a better builder. What matters isn't just winning; it's showing up, learning, and moving forward. The journey continues, and the best builds are yet to come.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </motion.div>
        </div>
      </div>
    </>
  );
}
