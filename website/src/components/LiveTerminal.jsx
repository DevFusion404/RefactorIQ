import { useState, useEffect } from 'react'
import { Terminal, RotateCcw, CheckCircle2 } from 'lucide-react'

const LOGS = [
  { agent: 'SYSTEM', color: 'text-slate-400', text: 'RefactorIQ multi-agent engine initialized on legacy repo: git@enterprise/core-billing.git' },
  { agent: 'CUQA', color: 'text-cyan-400', text: 'Tree-sitter parser invoked: 42 modules parsed into structured AST and CFG representations (210ms)' },
  { agent: 'CUQA', color: 'text-cyan-400', text: 'Smell identified: God Class in `legacy_billing.py` (LOC=940, Cyclomatic Complexity=28, High Coupling=14)' },
  { agent: 'RDP', color: 'text-violet-400', text: 'RDP Planning Agent running MCDA Matrix: balancing maintainability gain vs regression vulnerability...' },
  { agent: 'RDP', color: 'text-violet-400', text: 'Optimal sequence formulated: 3-step DAG [Extract Method -> Decompose Class -> Invariant Typing]. Conflict score: 0.0' },
  { agent: 'SCTV', color: 'text-emerald-400', text: 'Applying LibCST codemod transformation on AST nodes #184 to #420...' },
  { agent: 'SCTV', color: 'text-emerald-400', text: 'Executing Behavioral Fingerprinting & Invariant Mining: 2,500 inputs sampled through dynamic harness...' },
  { agent: 'SCTV', color: 'text-emerald-400', text: 'Fingerprint parity verified! Pre/Post execution delta: 0.00% regressions. Invariants stable.' },
  { agent: 'DIWO', color: 'text-amber-400', text: 'DIWO Orchestrator dispatched interactive diff to VS Code extension panel (HITL Review)' },
  { agent: 'DIWO', color: 'text-amber-400', text: 'Engineer approved refactoring. Safe commit created: refactor(billing): AST-verified decouple.' },
  { agent: 'SUCCESS', color: 'text-emerald-300 font-bold', text: '✓ Refactoring pipeline completed successfully. Technical debt reduced by 64% without regressions.' }
]

export default function LiveTerminal() {
  const [visibleCount, setVisibleCount] = useState(4)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return
    if (visibleCount >= LOGS.length) return

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1)
    }, 1200)

    return () => clearTimeout(timer)
  }, [visibleCount, isRunning])

  const handleRestart = () => {
    setVisibleCount(1)
    setIsRunning(true)
  }

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-4 sm:p-6 border border-slate-300/70 dark:border-white/10 shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>refactoriq-daemon.sh --stream-telemetry</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-pill text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 bg-slate-950 font-mono text-xs leading-relaxed space-y-3 rounded-2xl mt-4 min-h-[320px] max-h-[420px] overflow-y-auto">
            {LOGS.slice(0, visibleCount).map((log, index) => (
              <div key={index} className="flex items-start gap-3 animate-fadeIn">
                <span className="text-slate-600 select-none">
                  {`0${index + 1}`.slice(-2)}:
                </span>
                <span className={`font-semibold shrink-0 ${log.color}`}>
                  [{log.agent}]
                </span>
                <span className="text-slate-300">
                  {log.text}
                </span>
              </div>
            ))}

            {visibleCount < LOGS.length && (
              <div className="flex items-center gap-2 text-cyan-400 animate-pulse pt-2">
                <span className="w-2 h-4 bg-cyan-400 inline-block"></span>
                <span className="text-[11px] text-slate-500">Autonomous agents executing task pipeline...</span>
              </div>
            )}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 px-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Multi-Agent Invariant Protocol: STABLE</span>
            </span>
            <span>SLIIT Faculty of Computing · Project RP26-SE-008</span>
          </div>

        </div>

      </div>
    </section>
  )
}
