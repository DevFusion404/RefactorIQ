import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import logoImg from '../assets/logo.png'
import { Terminal, Zap } from 'lucide-react'

// Scattered initial coordinate vectors for each letter of "RefactorIQ"
const LETTERS = [
  { char: 'R', x: -480, y: -320, rotate: -75, scale: 3.5, delay: 0.1 },
  { char: 'e', x: 420, y: -360, rotate: 85, scale: 2.8, delay: 0.15 },
  { char: 'f', x: -390, y: 290, rotate: -95, scale: 3.2, delay: 0.2 },
  { char: 'a', x: 460, y: 240, rotate: 65, scale: 2.5, delay: 0.25 },
  { char: 'c', x: -280, y: -420, rotate: -55, scale: 3.0, delay: 0.3 },
  { char: 't', x: 340, y: -290, rotate: 90, scale: 2.7, delay: 0.35 },
  { char: 'o', x: -420, y: 380, rotate: -80, scale: 3.3, delay: 0.4 },
  { char: 'r', x: 440, y: -210, rotate: 45, scale: 2.6, delay: 0.45 },
  { char: 'I', x: -200, y: 410, rotate: -90, scale: 4.0, delay: 0.5, isAccent: true },
  { char: 'Q', x: 490, y: 340, rotate: 105, scale: 4.2, delay: 0.55, isAccent: true },
]

// Background cyber code snippets flowing
const CYBER_CODE_SNIPPETS = [
  'def parse_legacy_ast(source: str) -> ASTGraph:',
  '0x7FFE8A20: [AST_NODE_VALIDATED] Tree-sitter bindings OK',
  'MCDA_weights = {"complexity": 0.35, "risk": 0.25, "debt": 0.40}',
  'class GodClassDecoupler(LibCSTCodemodTransformer):',
  'invariant_hash = sha256(sampled_return_values)',
  '0x004018A4: [CUQA] Smell detected: God Class (LOC=842, V(G)=28)',
  'sctv_harness.execute(synthetic_inputs=2500)',
  'behavioral_delta = 0.000% [ZERO_REGRESSION_PROVED]',
  'diwo_orchestrator.dispatch_approval_gate(channel="VSCode")',
  'git.checkpoint.create(commit="refactor(safe): AST invariant verified")',
  'CFG_flow_matrix = compute_dominance_frontiers(cfg)',
  'export const MultiAgentBus = new EventPipeline();'
]

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [telemetryText, setTelemetryText] = useState('BOOTING AGENT SYSTEM...')
  const [combined, setCombined] = useState(false)

  useEffect(() => {
    // Progress counter and telemetry sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const next = prev + 3
        if (next < 30) setTelemetryText('PARSING AST WITH TREE-SITTER...')
        else if (next < 60) setTelemetryText('CALCULATING MCDA DECISION WEIGHTS...')
        else if (next < 85) setTelemetryText('MINING BEHAVIORAL INVARIANTS...')
        else setTelemetryText('SYSTEM READY · LAUNCHING WORKSPACE')
        return next
      })
    }, 70)

    // Letters combine milestone
    const combineTimer = setTimeout(() => {
      setCombined(true)
    }, 1500)

    // Auto complete after 3.6s
    const exitTimer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 3600)

    return () => {
      clearInterval(interval)
      clearTimeout(combineTimer)
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070b] overflow-hidden select-none"
    >
      {/* 1. Cyber Coding Background Streams */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden font-mono text-[11px] text-cyan-400">
        {/* Horizontal grid lines */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>

        {/* Ambient code lines scattered across the backdrop */}
        <div className="absolute top-10 left-8 space-y-2 opacity-60">
          {CYBER_CODE_SNIPPETS.slice(0, 4).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-12 left-10 space-y-2 opacity-50 hidden md:block">
          {CYBER_CODE_SNIPPETS.slice(4, 8).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ delay: 0.6 + idx * 0.15 }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        <div className="absolute top-16 right-10 text-right space-y-2 opacity-60">
          {CYBER_CODE_SNIPPETS.slice(8, 12).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.15 }}
            >
              {line}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cyber Glowing Radar Spots */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute w-[450px] h-[450px] rounded-full bg-violet-600/15 blur-[100px] pointer-events-none"></div>

      {/* Animated Scanline Sweep */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: '200%' }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none"
      />

      {/* 2. Main Stage: Zooming Logo & Shattered Text */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        
        {/* Zoom-In Logo with Holographic Rings */}
        <div className="relative mb-8">
          {/* Outer Pulsing Glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.8, 1.3, 1], opacity: [0, 0.8, 0.4] }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 rounded-full blur-2xl"
          />

          {/* Rotating Cyber Ring */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -inset-5 rounded-full border border-dashed border-cyan-400/40"
          />

          {/* Logo Itself with Dramatic Zoom In */}
          <motion.div
            initial={{ scale: 0.05, opacity: 0, rotate: -25, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, rotate: 0, filter: 'blur(0px)' }}
            transition={{ 
              duration: 1.2, 
              ease: [0.34, 1.56, 0.64, 1] // bouncy spring zoom
            }}
            className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-3xl bg-slate-950/90 border border-cyan-500/40 p-4 shadow-2xl shadow-cyan-500/30 flex items-center justify-center overflow-hidden"
          >
            <img
              src={logoImg}
              alt="RefactorIQ Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]"
            />
            {/* Specular sheen sweep */}
            <motion.div
              initial={{ x: '-150%' }}
              animate={{ x: '150%' }}
              transition={{ delay: 1.2, duration: 0.9, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
            />
          </motion.div>
        </div>

        {/* 3. Shattered Text Converging from Everywhere */}
        <div className="relative flex items-center justify-center font-black tracking-tight text-5xl sm:text-7xl lg:text-8xl select-none mb-4">
          
          {LETTERS.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{
                x: item.x,
                y: item.y,
                rotate: item.rotate,
                scale: item.scale,
                opacity: 0,
                filter: 'blur(16px)'
              }}
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)'
              }}
              transition={{
                delay: 0.5 + item.delay,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`inline-block ${
                item.isAccent
                  ? 'bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]'
                  : 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]'
              }`}
            >
              {item.char}
            </motion.span>
          ))}

          {/* Flash Shockwave upon Combining */}
          {combined && (
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl pointer-events-none"
            />
          )}

        </div>

        {/* Cyber Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10 mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>AGENTIC INTELLIGENT CODE REFACTORING ASSISTANT</span>
          <span className="text-slate-500">|</span>
          <span className="text-violet-400">RP26-SE-008</span>
        </motion.div>

        {/* 4. Real-time Telemetry & Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full max-w-md space-y-2"
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>{telemetryText}</span>
            </span>
            <span className="font-bold text-cyan-300">{progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
            />
          </div>
        </motion.div>

      </div>

      {/* Skip Button in Top Corner */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 px-3.5 py-1.5 rounded-lg glass-pill text-xs font-mono text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 transition flex items-center gap-1.5"
      >
        <span>Skip</span>
        <span className="text-[10px] text-slate-600">[ESC]</span>
      </button>

      {/* Bottom Academic Watermark */}
      <div className="absolute bottom-6 inset-x-0 text-center font-mono text-[10px] text-slate-600 tracking-wider">
        SLIIT FACULTY OF COMPUTING · DEPARTMENT OF SOFTWARE ENGINEERING · 2026
      </div>
    </motion.div>
  )
}
