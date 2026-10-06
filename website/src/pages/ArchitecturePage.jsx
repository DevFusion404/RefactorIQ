import { Layers } from 'lucide-react'
import PipelineFlow from '../components/PipelineFlow'
import LiveTerminal from '../components/LiveTerminal'

const ARCHITECTURE_LAYERS = [
  {
    layerNumber: 'Layer 01',
    phase: 'Phase 01',
    role: 'Structural Parsing & CFG Modeling',
    agent: 'CUQA Agent Engine',
    lead: 'Imal Ayodya (Team Leader)',
    desc: 'Uses Tree-sitter parsers to convert polyglot source code into abstract syntax trees. Constructs control flow graphs (CFG) and dependency matrices to compute Cyclomatic Complexity, Response for Class (RFC), and Coupling Between Objects (CBO).',
    specs: ['Tree-sitter C-bindings', 'AST Node Graph Serializer', 'God Class & Feature Envy Heuristics']
  },
  {
    layerNumber: 'Layer 02',
    phase: 'Phase 02',
    role: 'Multi-Criteria Planning & Sequencing',
    agent: 'RDP Decision Core',
    lead: 'Sithmaka Nanayakkara',
    desc: 'Evaluates detected smells through Multi-Criteria Decision Analysis (MCDA). Scores candidate refactoring opportunities across four vectors: complexity reduction, regression risk, dependency depth, and developer effort. Generates a Directed Acyclic Graph (DAG) for sequential execution.',
    specs: ['TOPSIS & AHP MCDA Algorithms', 'DAG Topological Sort', 'Conflict Interdependency Matrix']
  },
  {
    layerNumber: 'Layer 03',
    phase: 'Phase 03',
    role: 'Behavioral Fingerprinting & Invariants',
    agent: 'SCTV Safety Engine',
    lead: 'Pasan Amarasinghe',
    desc: 'Applies reversible LibCST codemods. Before touching code, it executes target functions across synthetic input vectors (normal, boundary, null). It logs outputs, exceptions, and memory mutations. It reapplies inputs post-transformation to verify zero runtime regressions.',
    specs: ['LibCST Reversible Codemods', 'Dynamic Execution Harness', 'Zero-Test Invariant Comparator']
  },
  {
    layerNumber: 'Layer 04',
    phase: 'Phase 04',
    role: 'Human-in-the-Loop Orchestration',
    agent: 'DIWO Developer Interface',
    lead: 'Malmi Bandara',
    desc: 'Central microservice orchestrator that connects the agents with the developer workspace. Exposes a VS Code extension with split-view AST diffs, behavioral proof telemetry, and instant 1-click git revert buttons.',
    specs: ['VS Code Language Server Extension', 'Git Checkpoint Rollback Guard', 'FastAPI Multi-Agent Bus']
  }
]

export default function ArchitecturePage() {
  return (
    <div className="pt-28 pb-20 space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Multi-Agent System Topology</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Autonomous Closed-Loop Architecture
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            RefactorIQ replaces monolithic black-box code generation with an orchestrated, multi-agent pipeline designed around mathematical verification and human oversight.
          </p>
        </div>

        {/* 4 Architectural Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARCHITECTURE_LAYERS.map((layer, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 rounded-3xl glass-panel flex flex-col justify-between border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/30 transition duration-300 shadow-xl space-y-6"
            >
              <div className="space-y-4">
                {/* Layer Header Row with clear separation */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/60 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      {layer.layerNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      {layer.phase}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {layer.lead}
                  </span>
                </div>

                {/* Agent Title & Component with distinct typographic hierarchy & comfortable margin */}
                <div className="space-y-1 pt-1">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {layer.agent}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {layer.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                  {layer.desc}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-white/10">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2.5">
                  Engine Specifications:
                </span>
                <div className="flex flex-wrap gap-2">
                  {layer.specs.map((sp, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg glass-pill text-xs font-mono text-slate-700 dark:text-slate-300">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: Behavioral Fingerprinting Diagram */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-emerald-500/30 dark:border-emerald-500/20 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Patented Research Novelty
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              The Behavioral Fingerprinting Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              How RefactorIQ guarantees zero regressions in legacy codebases that completely lack unit tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs font-mono space-y-3">
              <div className="text-cyan-400 font-bold uppercase">1. Synthetic Input Generation</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Generates hundreds of diversified input vectors targeting boundary conditions, type limits, and state combinations.
              </p>
              <div className="p-2.5 rounded bg-black/60 text-slate-300">
                Inputs: [0, -1, 1e6, None, &quot;alpha&quot;, []]
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs font-mono space-y-3">
              <div className="text-violet-400 font-bold uppercase">2. Pre-Refactor Baseline Capture</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Executes target functions in an isolated sandbox. Records output signatures, return value distributions, and exception types.
              </p>
              <div className="p-2.5 rounded bg-black/60 text-slate-300">
                Signature: Hash(f(x_1..n)) = 0x8F9C2...
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs font-mono space-y-3">
              <div className="text-emerald-400 font-bold uppercase">3. Invariant Delta Verification</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                After LibCST codemod execution, re-executes all inputs. If delta is non-zero, automated rollback reverts code instantly.
              </p>
              <div className="p-2.5 rounded bg-black/60 text-emerald-400">
                Status: Delta = 0.00% · Safe Commit
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Agent Pipeline Steps */}
        <PipelineFlow />

        {/* Live Multi-Agent Telemetry */}
        <LiveTerminal />

      </div>
    </div>
  )
}
