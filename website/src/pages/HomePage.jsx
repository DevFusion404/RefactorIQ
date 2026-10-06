import { Link } from 'react-router-dom'
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  Globe,
  Server
} from 'lucide-react'
import HeroShowcase from '../components/HeroShowcase'
import CodeDiffPreview from '../components/CodeDiffPreview'
import PipelineFlow from '../components/PipelineFlow'
import LiveTerminal from '../components/LiveTerminal'

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'
import liveSite from '../assets/liveSite.png'

const AGENT_CARDS = [
  {
    agent: 'CUQA Agent',
    name: 'Code Understanding & Quality Assessment',
    lead: 'Imal Ayodya (Team Leader · IT22124180)',
    role: 'Phase 01 · Diagnostic Engine',
    badgeColor: 'border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10',
    img: banner1,
    desc: 'Ingests entire legacy repositories using Tree-sitter parsers to construct Abstract Syntax Trees (AST) and Control Flow Graphs (CFG). Converts code smells into machine-readable knowledge graphs.',
    highlights: ['Tree-sitter AST Parsing', 'Cyclomatic & Coupling Metrics', 'God Class & Feature Envy Detection']
  },
  {
    agent: 'RDP Agent',
    name: 'Refactoring Decision & Planning',
    lead: 'Sithmaka Nanayakkara (IT22103918)',
    role: 'Phase 02 · Strategic Planning',
    badgeColor: 'border-violet-500/30 text-violet-600 dark:text-violet-400 bg-violet-500/10',
    img: banner2,
    desc: 'Evaluates architectural tradeoffs using Multi-Criteria Decision Analysis (MCDA). Produces conflict-free Directed Acyclic Graphs (DAGs) for optimal sequential execution.',
    highlights: ['Hybrid MCDA (TOPSIS/AHP)', 'ML Suitability Scoring', 'Conflict-Free Transformation Sequencing']
  },
  {
    agent: 'SCTV Agent',
    name: 'Safe Code Transformation & Validation',
    lead: 'Pasan Amarasinghe (IT22110848)',
    role: 'Phase 03 · Invariant Verification',
    badgeColor: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
    img: banner3,
    desc: 'Applies reversible LibCST codemods with zero reliance on preexisting test suites via Behavioral Fingerprinting & Invariant Mining across synthetic input vectors.',
    highlights: ['Reversible LibCST Codemods', 'Testless Behavioral Fingerprinting', 'Automated Git Rollback Engine']
  },
  {
    agent: 'DIWO Agent',
    name: 'Developer Interaction & Orchestration',
    lead: 'Malmi Bandara (IT22277886)',
    role: 'Phase 04 · Human-in-the-Loop',
    badgeColor: 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10',
    img: banner4,
    desc: 'Central coordinator connecting automated agents with human engineers. Provides interactive diffs, AST modification visualizations, and approval gates via VS Code.',
    highlights: ['Human-in-the-Loop (HITL) Gate', 'VS Code Extension Integration', 'Transparent Transformation Audit Trail']
  }
]

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* 1. Animated Hero Showcase with 4 Banners */}
      <HeroShowcase />

      {/* 2. Live Cloud System Showcase (Azure Container Apps) */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-emerald-500/30 dark:border-emerald-500/20 shadow-2xl relative overflow-hidden bg-gradient-to-br from-emerald-950/20 via-slate-900/40 to-cyan-950/20">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    LIVE PRODUCTION DEPLOYMENT
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Server className="w-3.5 h-3.5" />
                    Azure Container Apps (Southeast Asia)
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  RefactorIQ Live Cloud Platform
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                  Test the real system live in the cloud. Analyze legacy codebases, execute multi-agent plans, and verify behavioral invariants in real time.
                </p>
              </div>

              <a
                href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-500/25 transform hover:-translate-y-0.5 transition duration-200 shrink-0"
              >
                <Globe className="w-4 h-4" />
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Interactive Browser Window with liveSite.png */}
            <div className="rounded-2xl bg-slate-950 border border-white/10 shadow-2xl overflow-hidden group">
              {/* Browser chrome header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-slate-300 hidden sm:inline">RefactorIQ Cloud Portal</span>
                </div>
                
                <div className="px-4 py-1 rounded-lg bg-black/60 border border-white/5 text-[11px] text-emerald-400 font-mono truncate max-w-xs sm:max-w-md">
                  https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/
                </div>

                <div className="text-[10px] text-emerald-400 font-bold hidden sm:block">
                  ● HTTP 200 OK
                </div>
              </div>

              {/* Live Site Preview Image */}
              <a
                href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
              >
                <img
                  src={liveSite}
                  alt="RefactorIQ Live System"
                  className="w-full h-auto object-cover object-top group-hover:scale-[1.01] transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-xl bg-slate-950/90 border border-emerald-500/50 text-emerald-300 font-mono text-xs font-bold shadow-2xl flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Open Live Deployment in New Tab
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Before/After Code Diff */}
      <CodeDiffPreview />

      {/* 4. The 4 Agents Interactive Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Modular Autonomous System</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Four Agents. Zero Compromises.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Each agent solves a distinct challenge in legacy code modernization, forming a cohesive closed-loop system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AGENT_CARDS.map((card, idx) => (
              <div 
                key={idx}
                className="group rounded-3xl glass-panel p-6 sm:p-8 space-y-5 border border-slate-300/60 dark:border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Image Thumbnail with Overlay */}
                  <div className="h-48 rounded-2xl overflow-hidden relative mb-5 bg-slate-950">
                    <img 
                      src={card.img} 
                      alt={card.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border backdrop-blur-md ${card.badgeColor}`}>
                        {card.agent}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-300 truncate">
                      Lead: {card.lead}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {card.role}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition">
                    {card.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-4 space-y-2">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between">
                  <Link
                    to="/architecture"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition"
                  >
                    <span>View Architectural Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Multi-Agent Pipeline Visualization */}
      <PipelineFlow />

      {/* 6. Live Simulated Terminal */}
      <LiveTerminal />

      {/* 7. SLIIT Academic Endorsement Callout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-slate-300/60 dark:border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-slate-900/5 via-cyan-500/5 to-violet-500/5">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Academic Rigor & Peer-Reviewed Research
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Built as a Premier SLIIT Software Engineering Dissertation.
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Supervised by Dr. Kalpani Manathunga and Mr. Jeewaka Perera. Backed by empirical analysis over open-source legacy repositories with demonstrable zero-regression guarantees.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-500/25 transition flex items-center gap-2"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/research"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition"
              >
                Inspect Research Paper
              </Link>
              <Link
                to="/team"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm glass-panel glass-panel-hover text-slate-800 dark:text-slate-200"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
