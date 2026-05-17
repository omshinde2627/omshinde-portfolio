"use client"

import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion, useReducedMotion } from "framer-motion"
import { TextEffect } from "@/components/ui/text-effect"

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isThemeChanging, setIsThemeChanging] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Preload image
  useEffect(() => {
    const img = new Image()
    img.src = '/assets/bitmoji.png'
    img.onload = () => setImageLoaded(true)
  }, [])

  // Detect theme changes
  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setIsThemeChanging(true)
      setTimeout(() => setIsThemeChanging(false), 300)
    })
    
    observer.observe(root, { 
      attributes: true, 
      attributeFilter: ['class'] 
    })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-black dark:bg-background transition-colors duration-300">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#3b82f6" />
            <stop offset="70%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background - Simple gradient on mobile, MeshGradient on desktop */}
      {!isMobile ? (
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isThemeChanging ? 'opacity-0' : 'opacity-100'}`}>
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={["#000000", "#3b82f6", "#06b6d4", "#1e3a5f", "#60a5fa"]}
            speed={0.2}
          />
        </div>
      ) : (
        <div className={`absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-950 to-black dark:from-background dark:via-blue-950/20 dark:to-background transition-all duration-300 ${isThemeChanging ? 'opacity-0' : 'opacity-100'}`} />
      )}

      <main className="relative z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-24 md:pt-32 min-h-screen gap-8">
        <div className="text-left md:text-left max-w-2xl w-full md:w-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white dark:text-foreground mb-6 leading-none tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0,
            }}
          >
            <TextEffect
              per={shouldReduceMotion || isMobile ? "word" : "char"}
              preset="fade"
              delay={0}
              className="block text-white/60 dark:text-foreground/50 text-base sm:text-lg md:text-xl font-light tracking-wide mb-4 font-mono"
              as="span"
            >
              Hi, I'm Om Shinde
            </TextEffect>
            <motion.span
              className="block font-light text-white/95 dark:text-foreground/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #3b82f6 30%, #06b6d4 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <TextEffect per="word" preset="fade" delay={0} as="span" className="inline">
                I Build Ideas Into
              </TextEffect>
            </motion.span>
            <TextEffect
              per="word"
              preset="fade"
              delay={0}
              className="block font-black text-white dark:text-foreground drop-shadow-2xl"
              as="span"
            >
              Reality.
            </TextEffect>
          </motion.h1>

          <TextEffect
            per="word"
            preset="fade"
            delay={0}
            className="text-base sm:text-lg font-light text-white/80 dark:text-foreground/70 mb-8 leading-relaxed max-w-xl"
          >
            A young builder from India — turning ideas into products through web development, AI, and growth systems.
          </TextEffect>

          <motion.div
            className="flex items-center gap-4 sm:gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0,
            }}
          >
            <motion.a
              href="#projects"
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm transition-all duration-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer shadow-lg hover:shadow-xl active:scale-95"
              whileHover={!isMobile ? { 
                scale: 1.05,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              } : {}}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-transparent border-2 border-white/40 text-white dark:border-foreground/30 dark:text-foreground font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 dark:hover:bg-foreground/10 dark:hover:border-primary/50 dark:hover:text-primary cursor-pointer backdrop-blur-sm active:scale-95"
              whileHover={!isMobile ? { 
                scale: 1.05,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              } : {}}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        {/* Bitmoji on the right */}
        <motion.div
          className="flex md:hidden items-center justify-center w-full mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0,
          }}
        >
          {imageLoaded ? (
            <img
              src="/assets/bitmoji.png"
              alt="Om Shinde"
              loading="eager"
              decoding="async"
              className="w-[200px] h-[200px] object-contain drop-shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-opacity duration-300"
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          ) : (
            <div className="w-[200px] h-[200px] bg-transparent" />
          )}
        </motion.div>
        <motion.div
          className="hidden md:flex items-end justify-end mr-4 lg:mr-8 pb-0"
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
          animate={{ opacity: imageLoaded ? 1 : 0, x: 0 }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 1.0, 
            delay: shouldReduceMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {imageLoaded ? (
            <img
              src="/assets/bitmoji.png"
              alt="Om Shinde"
              loading="eager"
              decoding="async"
              className="w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.4)] transition-opacity duration-300"
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          ) : (
            <div className="w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] bg-transparent" />
          )}
        </motion.div>
      </main>

      <div className="absolute bottom-8 right-8 z-30 hidden lg:block">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#3b82f6", "#06b6d4", "#60a5fa", "#00FF88", "#93c5fd", "#2563eb", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />

          {/* Rotating Text Around the Pulsing Border */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-white/80 font-medium">
              <textPath href="#circle" startOffset="0%">
                Om Shinde • Builder • Entrepreneur • AI Creator • Problem Solver •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
