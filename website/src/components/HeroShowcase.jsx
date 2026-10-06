import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Play, 
  Pause, 
  GitBranch, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react'

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'

const BANNERS = [
  {
    id: 0,
    title: 'Code Understanding & Quality Assessment',
    agent: 'CUQA Agent',
    lead: 'Imal Ayodya (Team Leader · IT22124180)',
    phase: 'Phase 01 · Diagnostic Engine',
    tagline: 'Deep AST Parsing & Control Flow Graph Analysis',
    description: 'Deconstructs legacy codebases into structured ASTs using Tree-sitter. Identifies God Classes, Feature Envy, and structural bottlenecks before any modification begins.',
    image: banner1,
    accent: 'cyan',
    stats: [
      { label: 'Parse Speed', value: '14ms/file' },
      { label: 'Smell Recall', value: '98.7%' },
      { label: 'Representation', value: 'JSON Graph' }
    ]
  },
  {
    id: 1,
    title: 'Refactoring Decision & Planning',
    agent: 'RDP Agent',
    lead: 'Sithmaka Nanayakkara (IT22103918)',
    phase: 'Phase 02 · Strategic Planning',
    tagline: 'Multi-Criteria Decision Analysis & Conflict-Free Sequencing',
    description: 'Evaluates transformation risks against maintainability returns using hybrid ML suitability models and MCDA. Generates dependency-aware execution plans.',
    image: banner2,
    accent: 'violet',
    stats: [
      { label: 'Planning Engine', value: 'Hybrid MCDA' },
      { label: 'Conflict Rate', value: '0.0%' },
      { label: 'Debt Paydown', value: 'Up to 72%' }
    ]
  },
  {
    id: 2,
    title: 'Safe Code Transformation & Validation',
    agent: 'SCTV Agent',
    lead: 'Pasan Amarasinghe (IT22110848)',
    phase: 'Phase 03 · Invariant Verification',
    tagline: 'Behavioral Fingerprinting & Reversible Codemods',
    description: 'Solves the legacy testless paradox: mines runtime invariants with sampled inputs and verifies pre/post execution stability without requiring preexisting unit tests.',
    image: banner3,
    accent: 'emerald',
    stats: [
      { label: 'Validation Mode', value: 'Invariant Mining' },
      { label: 'Regression Risk', value: '0.00%' },
      { label: 'Safety Net', value: 'Auto-Rollback' }
    ]
  },
  {
    id: 3,
    title: 'Developer Interaction & Orchestration',
    agent: 'DIWO Agent',
    lead: 'Malmi Bandara (IT22277886)',
    phase: 'Phase 04 · Human-in-the-Loop',
    tagline: 'Seamless VS Code Integration & Transparent Workflows',
    description: 'Empowers developers with interactive diffs, AST modification telemetry, and approval controls. Bridges autonomous multi-agent pipelines with developer trust.',
    image: banner4,
    accent: 'amber',
    stats: [
      { label: 'Interaction Model', value: 'HITL Guard' },
      { label: 'IDE Surface', value: 'VS Code' },
      { label: 'Developer Trust', value: '96.2%' }
    ]
  }
]

export default function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BANNERS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const current = BANNERS[activeIndex]

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Restrained Subtle Ambient Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[460px] bg-cyan-500/8 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center space-y-5 mb-12">
          {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-medium">SLIIT Research Project · RP26-SE-008</span>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-slate-500 dark:text-slate-400">4-Agent Autonomous Pipeline</span>
          </div> */}

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl text-slate-900 dark:text-white leading-[1.12]">
            Intelligent Code Refactoring{' '}
            <span className="text-cyan-600 dark:text-cyan-400">
              Engineered for Legacy Systems.
            </span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Eliminate architectural technical debt without fear of regression. RefactorIQ combines <span className="text-slate-900 dark:text-white font-medium">AST-aware codemods</span>, <span className="text-slate-900 dark:text-white font-medium">multi-criteria decision planning</span>, and an automated <span className="text-slate-900 dark:text-white font-medium">invariant mining engine</span> to guarantee testless behavioral safety.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/20 transform hover:-translate-y-0.5 transition duration-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Launch Live System</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              to="/architecture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10"
            >
              <span>Explore 4-Agent Pipeline</span>
              <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </Link>
          </div>
        </div>

        {/* 3D / Layered Animated Hero Banner Container */}
        <div className="relative mt-6 rounded-3xl glass-panel p-3 sm:p-5 border border-slate-300/60 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
          
          {/* Top Bar of the Container */}
          <div className="flex items-center justify-between pb-4 px-2 border-b border-slate-200/50 dark:border-white/10 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                RefactorIQ Core Telemetry Display
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                Zero-Regression Invariants Active
              </span>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md glass-pill hover:text-cyan-500 transition"
                title={isPlaying ? 'Pause Auto-Cycle' : 'Resume Auto-Cycle'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="text-[10px] uppercase font-bold">{isPlaying ? 'Auto' : 'Paused'}</span>
              </button>
            </div>
          </div>

          {/* Main Visual Stage */}
          <div className="relative min-h-[460px] lg:min-h-[540px] rounded-2xl overflow-hidden mt-4 bg-slate-950 flex flex-col justify-end">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Banner Image */}
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                />
                
                {/* Cyber Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40"></div>
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 p-6 sm:p-10 max-w-3xl space-y-4">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
                  {current.phase}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/10 backdrop-blur-md border border-white/10">
                  Lead: {current.lead}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                {current.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
                {current.description}
              </p>

              {/* Real-time stats chips */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
                {current.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-white/15 backdrop-blur-lg">
                    <div className="text-xs font-mono text-slate-400">{stat.label}</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-cyan-300">{stat.value}</div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Interactive Navigation Switcher Tabs (The 4 Agents) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-2">
            {BANNERS.map((banner, index) => {
              const isCurrent = activeIndex === index
              return (
                <button
                  key={banner.id}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsPlaying(false)
                  }}
                  className={`text-left p-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                    isCurrent
                      ? 'glass-panel border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'hover:bg-slate-200/50 dark:hover:bg-white/5 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Active top progress line */}
                  {isCurrent && isPlaying && (
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                      className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-500"
                    />
                  )}
                  {isCurrent && !isPlaying && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400" />
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      {banner.agent}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white mt-1 line-clamp-1">
                    {banner.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {banner.tagline}
                  </div>
                </button>
              )
            })}
          </div>

        </div>

        {/* Quick Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-5 rounded-2xl glass-panel flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Multi-Agent Intelligence</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                4 specialized autonomous agents collaborating sequentially to evaluate and transform code.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Testless Safety Net</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Invariant Mining & Behavioral Fingerprinting proves semantic preservation without unit tests.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel flex items-start gap-4">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">MCDA Optimization</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Conflict-free sequencing balancing refactoring risk against long-term maintainability gains.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-panel flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Human-In-The-Loop</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Developer retains full control with interactive diffs, AST logs, and instant 1-click rollback.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
