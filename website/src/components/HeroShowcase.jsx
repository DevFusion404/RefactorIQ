import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, ExternalLink } from 'lucide-react'

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'

const BANNERS = [
  {
    id: 0,
    title: 'Code Understanding',
    summary: 'Deconstructs legacy codebases into structured ASTs using Tree-sitter. Identifies God Classes, Feature Envy, and structural bottlenecks before modification begins.',
    image: banner1,
  },
  {
    id: 1,
    title: 'Decision & Planning',
    summary: 'Evaluates architectural tradeoffs using Multi-Criteria Decision Analysis (MCDA). Formulates conflict-free dependency graphs for sequential execution.',
    image: banner2,
  },
  {
    id: 2,
    title: 'Safe Transformation',
    summary: 'Applies reversible LibCST codemods and verifies semantic stability using dynamic behavioral invariant mining without requiring preexisting tests.',
    image: banner3,
  },
  {
    id: 3,
    title: 'Workflow Orchestration',
    summary: 'Connects autonomous multi-agent pipelines with developers via interactive AST diffs, transparent telemetry, and Human-in-the-Loop verification gates.',
    image: banner4,
  }
]

export default function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BANNERS.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const current = BANNERS[activeIndex]

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-slate-400/5 dark:bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      {/* Hero Header: Exactly 2 Lines on Desktop, Deep High-Contrast Text */}
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
          Intelligent Code Refactoring <br className="hidden sm:inline" />
          <span className="text-slate-800 dark:text-slate-200">
            for Legacy Systems
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          RefactorIQ eliminates technical debt through AST-aware codemods, multi-criteria planning, and an invariant mining engine that guarantees testless behavioral safety.
        </p>

        {/* Action buttons with deep high-contrast styling */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-md transform hover:-translate-y-0.5 transition duration-200"
          >
            <span>Launch Live System</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm glass-panel glass-panel-hover text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-white/10"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          </Link>
        </div>
      </div>

      {/* Expansive Full-Screen Banner Showcase (Utilizes Full Screen Width) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 mt-12">
        
        {/* Cinematic Widescreen Visual Stage */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[440px] sm:min-h-[580px] lg:min-h-[660px] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200/50 dark:border-white/10 flex flex-col justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Full view banner image */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.03]"
              />
              
              {/* Soft bottom vignette for crisp typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Minimalist Content Overlay */}
          <div className="relative z-10 p-6 sm:p-12 max-w-4xl space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md">
              {current.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
              {current.summary}
            </p>
          </div>
        </div>

        {/* Clean, Spacious Navigation Switcher Tabs (One clear, larger title per card) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {BANNERS.map((banner, index) => {
            const isCurrent = activeIndex === index
            return (
              <button
                key={banner.id}
                onClick={() => setActiveIndex(index)}
                className={`text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 relative ${
                  isCurrent
                    ? 'glass-panel border-slate-900/40 dark:border-white/30 shadow-lg ring-1 ring-slate-900/20 dark:ring-white/20'
                    : 'glass-panel opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {/* Active indicator line */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900 dark:bg-white rounded-t-2xl" />
                )}

                <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  0{index + 1}
                </div>

                {/* Prominent, single larger title without tiny competing tags */}
                <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white">
                  {banner.title}
                </div>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
