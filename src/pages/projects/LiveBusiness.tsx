import { ArrowLeft, ExternalLink, CheckCircle2, Globe, Mail, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassButton } from "@/components/ui/glass-button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LiveBusiness() {
  const navigate = useNavigate();

  const deliverables = [
    "Fully functional business website",
    "Mobile responsive design",
    "Direct lead capture system (contact form → email)",
    "SEO-friendly structure for future growth",
    "Live, production-ready deployment"
  ];

  const workDone = [
    { icon: Globe, text: "Designed a clean, corporate UI aligned with BPO industry standards" },
    { icon: Zap, text: "Developed the complete website" },
    { icon: Mail, text: "Integrated contact form using EmailJS for real-time email inquiries" },
    { icon: Globe, text: "Set up custom domain and hosting" },
    { icon: Smartphone, text: "Deployed the website live and ensured smooth performance across devices" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/projects/local-business-websites")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Live & Generating Inquiries</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            BPO & Outsourcing Company Website
          </h1>

          {/* One-liner */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            End-to-end designed, built, and deployed a BPO website with integrated email system — now live and generating inquiries.
          </p>

          {/* Live Link */}
          <GlassButton
            size="lg"
            contentClassName="flex items-center gap-2"
            onClick={() => window.open("https://stccloudsolutions.com", "_blank", "noopener,noreferrer")}
          >
            <Globe className="w-5 h-5" />
            Visit Live Website
            <ExternalLink className="w-4 h-4" />
          </GlassButton>
        </motion.div>
      </div>

      {/* Screenshots Section */}
      <div className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-foreground">Live Website Preview</h2>
          
          {/* Main Screenshot */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 border border-foreground/10">
            <img 
              src="/assets/stc.png" 
              alt="STC Cloud Solutions Website" 
              className="w-full h-auto"
            />
          </div>

          {/* Secondary Screenshots Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl border border-foreground/10"
            >
              <img 
                src="/assets/stc1.png" 
                alt="STC Website Section 1" 
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative rounded-xl overflow-hidden shadow-xl border border-foreground/10"
            >
              <img 
                src="/assets/stc2.png" 
                alt="STC Website Section 2" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Project Overview Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl p-8"
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
              <h2 className="text-2xl font-bold mb-4 text-foreground">Project Overview</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Worked with a BPO & outsourcing company to bring their business online through a modern, professional website. The goal was to create a strong first impression and make it easy for potential clients to understand services and reach out.
              </p>
              
              <div className="pt-6 border-t border-foreground/10">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Impact</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Created a professional online presence and turned the website into a working client inquiry channel.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What I Did Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl p-8"
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">What I Did</h2>
              <div className="space-y-4">
                {workDone.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed flex-1">{item.text}</p>
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
            className="md:col-span-2 relative overflow-hidden rounded-2xl p-8"
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">What I Delivered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-foreground/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
