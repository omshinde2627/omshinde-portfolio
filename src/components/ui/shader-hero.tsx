"use client"

import { useEffect, useRef, useState, lazy, Suspense } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { TextEffect } from "@/components/ui/text-effect"

// Lazy load shader components to prevent blocking
const MeshGradient = lazy(() => 
  import("@paper-design/shaders-react").then(module => ({ default: module.MeshGradient })).catch(() => ({ default: () => null }))
)
const PulsingBorder = lazy(() => 
  import("@paper-design/shaders-react").then(module => ({ default: module.PulsingBorder })).catch(() => ({ default: () => null }))
)

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isThemeChanging, setIsThemeChanging] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
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

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-black transition-colors duration-300">
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

      {/* Background - MeshGradient only on desktop (disable on mobile for performance) */}
      {!isMobile && (
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isThemeChanging ? 'opacity-0' : 'opacity-100'}`}>
          <Suspense fallback={<div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-950 to-black" />}>
            <MeshGradient
              className="absolute inset-0 w-full h-full"
              colors={["#000000", "#3b82f6", "#06b6d4", "#1e3a5f", "#60a5fa"]}
              speed={0.2}
            />
          </Suspense>
        </div>
      )}
      
      {/* Mobile: Static gradient background (no shader) */}
      {isMobile && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-blue-950 to-black" />
      )}

      <main className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8 lg:pb-0 min-h-screen gap-6 sm:gap-8">
        <div className="text-center lg:text-left max-w-2xl w-full lg:w-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0,
            }}
          >
            <TextEffect
              per="char"
              preset="fade"
              delay={0}
              className="block text-white/60 text-sm sm:text-base lg:text-xl font-light tracking-wide mb-3 sm:mb-4 font-mono"
              as="span"
            >
              Hi, I'm Om Shinde
            </TextEffect>
            <motion.span
              className="block font-light text-white/95 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
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
              className="block font-black text-white drop-shadow-2xl"
              as="span"
            >
              Reality.
            </TextEffect>
          </motion.h1>

          <TextEffect
            per="word"
            preset="fade"
            delay={0}
            className="text-sm sm:text-base lg:text-lg font-light text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            A young builder from India — turning ideas into products through web development, AI, and growth systems.
          </TextEffect>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0,
            }}
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:from-blue-400 hover:to-cyan-400 cursor-pointer shadow-lg hover:shadow-xl active:scale-95 text-center"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full bg-transparent border-2 border-white/40 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 cursor-pointer backdrop-blur-sm active:scale-95 text-center"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        {/* Bitmoji - responsive sizing */}
        <motion.div
          className="flex items-end justify-center lg:justify-end w-full lg:w-auto lg:mr-8 pb-0"
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0, y: 0, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {imageLoaded ? (
            <img
              src="/assets/bitmoji.png"
              alt="Om Shinde"
              loading="eager"
              decoding="async"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] object-contain drop-shadow-[0_10px_40px_rgba(59,130,246,0.4)] lg:drop-shadow-[0_20px_60px_rgba(59,130,246,0.4)] transition-opacity duration-300"
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          ) : (
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] bg-transparent" />
          )}
        </motion.div>
      </main>

      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-30">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
          <Suspense fallback={<div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] rounded-full border-2 border-blue-500/50 animate-pulse" />}>
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
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:!w-[60px] lg:!h-[60px]"
            />
          </Suspense>

          {/* Rotating Text Around the Pulsing Border - hide on mobile */}
          <motion.svg
            className="hidden sm:block absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.4) sm:scale(1.5) lg:scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-[10px] sm:text-xs lg:text-sm fill-white/80 font-medium">
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
