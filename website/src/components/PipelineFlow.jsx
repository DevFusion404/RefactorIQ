import { useState } from 'react'
import { 
  Workflow, 
  ArrowRight, 
  TerminalSquare 
} from 'lucide-react'

const STAGES = [
  {
    step: '01',
    agent: 'CUQA Agent',
    name: 'Structural Extraction & Quality Audit',
    lead: 'Imal Ayodya (Team Leader · IT22124180)',
    color: 'cyan',
    badge: 'Code Understanding',
    tech: 'Tree-sitter, CFG, JSON Graph',
    desc: 'Ingests legacy source files, builds Abstract Syntax Trees and Control Flow Graphs, and extracts structural code smells with contextual severity scoring.',
    inputs: ['Legacy Source Files', 'Repository History'],
    outputs: ['JSON AST Schema', 'Smell Severity Matrix', 'Coupling Graph'],
    detail: 'Avoids human-only dashboards like SonarQube by outputting machine-interpretable schemas for downstream agents.'
  },
  {
    step: '02',
    agent: 'RDP Agent',
    name: 'Strategic Decision & Conflict Planning',
    lead: 'Sithmaka Nanayakkara (IT22103918)',
    color: 'violet',
    badge: 'Decision & Planning',
    tech: 'MCDA Matrix, ML Suitability, DAG Sequencing',
    desc: 'Synthesizes quality reports and uses Multi-Criteria Decision Analysis (MCDA) to sequence refactoring tasks without transformation collisions or regressions.',
    inputs: ['JSON AST Schema', 'Smell Severity Matrix'],
    outputs: ['Directed Acyclic Graph (DAG)', 'Risk-Ranked Refactoring Plan'],
    detail: 'Evaluates transformation risk vs maintainability gain to find optimal refactoring sequences.'
  },
  {
    step: '03',
    agent: 'SCTV Agent',
    name: 'Safe Transformation & Invariant Mining',
    lead: 'Pasan Amarasinghe (IT22110848)',
    color: 'emerald',
    badge: 'Safe Transformation',
    tech: 'LibCST Codemods, Mypy, Dynamic Harness',
    desc: 'Applies reversible AST codemods. Solves the testless legacy paradox by mining runtime invariants and comparing behavioral fingerprints with synthetic input vectors.',
    inputs: ['Refactoring Plan', 'Sampled Input Vectors'],
    outputs: ['Transformed AST Code', 'Behavioral Parity Report', 'Rollback Point'],
    detail: 'If behavioral fingerprint delta is detected, automated instant git rollback is executed.'
  },
  {
    step: '04',
    agent: 'DIWO Agent',
    name: 'Interaction & Orchestration Pipeline',
    lead: 'Malmi Bandara (IT22277886)',
    color: 'amber',
    badge: 'Workflow Orchestration',
    tech: 'VS Code Extension, Microservices, Git Webhooks',
    desc: 'Coordinates agent communication and surfaces transparent interactive diffs directly into developer IDEs for human-in-the-loop review and approval.',
    inputs: ['Transformed Code', 'Parity Report'],
    outputs: ['Developer Approved PR', 'VCS Commit', 'Telemetry Log'],
    detail: 'Bridges automated multi-agent capabilities with human engineer trust.'
  }
]

export default function PipelineFlow() {
  const [selectedStage, setSelectedStage] = useState(0)
  const current = STAGES[selectedStage]

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/10 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Workflow className="w-3.5 h-3.5" />
            <span>Autonomous Pipeline Topology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the 4 Agents Cooperate.
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            A closed-loop multi-agent orchestration architecture designed to replace isolated, unverified AI code generators.
          </p>
        </div>

        {/* Pipeline Step Sequence Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {STAGES.map((st, i) => {
            const isSelected = selectedStage === i
            return (
              <button
                key={st.step}
                onClick={() => setSelectedStage(i)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 relative glass-panel ${
                  isSelected
                    ? 'border-cyan-500/60 shadow-xl shadow-cyan-500/15 ring-1 ring-cyan-500/30'
                    : 'hover:border-slate-400/40 dark:hover:border-white/20 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-cyan-400">
                    STAGE {st.step}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{st.badge}</span>
                </div>

                <div className="font-bold text-base text-slate-900 dark:text-white mb-1">
                  {st.agent}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {st.name}
                </div>

                {isSelected && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                    <span>Inspect Step Telemetry</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Detailed Stage Exploration Window */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-300/60 dark:border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left 2 Cols: Main Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                  {current.agent}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Lead Researcher: <strong className="text-slate-700 dark:text-slate-200">{current.lead}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {current.name}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.desc}
              </p>

              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs sm:text-sm text-cyan-900 dark:text-cyan-200">
                <span className="font-bold font-mono">Research Novelty: </span>
                {current.detail}
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Engine Architecture & Libraries
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.tech.split(', ').map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg glass-pill text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: I/O Contract Schema */}
            <div className="rounded-2xl bg-slate-950 p-5 border border-white/10 text-xs font-mono space-y-5 shadow-inner">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                <span className="flex items-center gap-2">
                  <TerminalSquare className="w-4 h-4 text-cyan-400" />
                  <span>Agent Contract I/O</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">VERIFIED</span>
              </div>

              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase mb-2">Inbound Telemetry:</div>
                <div className="space-y-1.5">
                  {current.inputs.map((inp, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-900/90 border border-white/5 text-cyan-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{inp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase mb-2">Outbound Artifacts:</div>
                <div className="space-y-1.5">
                  {current.outputs.map((out, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-900/90 border border-white/5 text-emerald-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
