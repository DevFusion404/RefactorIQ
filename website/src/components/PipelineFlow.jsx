import { useState } from 'react'
import { TerminalSquare } from 'lucide-react'

const STAGES = [
  {
    step: '01',
    agent: 'CUQA Agent',
    name: 'Structural Extraction & Quality Audit',
    lead: 'Imal Ayodya (Team Leader)',
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
    lead: 'Sithmaka Nanayakkara',
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
    lead: 'Pasan Amarasinghe',
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
    lead: 'Malmi Bandara',
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
    <section className="py-20 relative overflow-hidden bg-slate-900/10 dark:bg-black/30">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
            Architecture Topology
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the 4 Agents Cooperate
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal">
            A closed-loop multi-agent orchestration architecture designed to replace isolated, unverified AI code generators.
          </p>
        </div>

        {/* Pipeline Step Sequence Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STAGES.map((st, i) => {
            const isSelected = selectedStage === i
            return (
              <button
                key={st.step}
                onClick={() => setSelectedStage(i)}
                className={`text-left p-5 rounded-2xl transition-all duration-200 relative glass-panel ${
                  isSelected
                    ? 'border-slate-900/40 dark:border-white/30 shadow-lg ring-1 ring-slate-900/20 dark:ring-white/20'
                    : 'hover:border-slate-300 dark:hover:border-white/20 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="font-bold text-slate-900 dark:text-white">
                    STAGE {st.step}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{st.badge}</span>
                </div>

                <div className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-1">
                  {st.name}
                </div>
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
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10">
                  {current.agent}
                </span>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  Lead Researcher: <strong className="text-slate-900 dark:text-slate-200">{current.lead}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {current.name}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {current.desc}
              </p>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
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
