"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ShaderHero() {
  const [isMobile, setIsMobile] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

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

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-950 to-black dark:from-background dark:via-blue-950/20 dark:to-background" />

      <main className="relative z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-24 md:pt-32 min-h-screen gap-8">
        <div className="text-left md:text-left max-w-2xl w-full md:w-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white dark:text-foreground mb-6 leading-none tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="block text-white/60 dark:text-foreground/50 text-base sm:text-lg md:text-xl font-light tracking-wide mb-4 font-mono">
              Hi, I'm Om Shinde
            </span>
            <span
              className="block font-light text-white/95 dark:text-foreground/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #3b82f6 30%, #06b6d4 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              I Build Ideas Into
            </span>
            <span className="block font-black text-white dark:text-foreground">
              Reality.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 dark:text-foreground/70 mb-8 leading-relaxed max-w-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Full-stack developer, entrepreneur, and AI creator building the future one project at a time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 border border-white/30 text-white dark:text-foreground font-medium text-sm transition-all duration-200 hover:bg-white/20 hover:border-white/60 cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-white/20 text-white/90 dark:text-foreground/90 font-medium text-sm transition-all duration-200 hover:bg-white/5 hover:border-white/40 cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
            <img
              src="/assets/bitmoji.png"
              alt="Om Shinde"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </main>
    </div>
  )
}
