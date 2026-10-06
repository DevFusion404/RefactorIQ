import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Download, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  BookOpen 
} from 'lucide-react'

const RESEARCH_PILLARS = [
  {
    code: 'RP-01',
    agent: 'CUQA Agent',
    title: 'AST & Control Flow Graph Machine-Readable Extraction',
    researcher: 'Imal Ayodya (Team Leader · IT22124180)',
    gap: 'Traditional static analyzers (SonarQube) yield human dashboards, not machine-interpretable AST schemas required for automated AI pipeline agents.',
    solution: 'Tree-sitter parser parses polyglot legacy repositories into structured JSON graph representations, combining cyclomatic metrics, coupling graphs, and smell severity rankings.'
  },
  {
    code: 'RP-02',
    agent: 'RDP Agent',
    title: 'Hybrid Multi-Criteria Decision Analysis & Planning',
    researcher: 'Sithmaka Nanayakkara (IT22103918)',
    gap: 'Isolated refactorings trigger cascading conflicts and unpredictable regression chains when executed without global architectural awareness.',
    solution: 'A hybrid decision model fusing ML suitability scoring, rule-based heuristics, and Multi-Criteria Decision Analysis (MCDA) generates conflict-free DAG refactoring plans.'
  },
  {
    code: 'RP-03',
    agent: 'SCTV Agent',
    title: 'Behavioral Fingerprinting & Invariant Mining (Testless Verification)',
    researcher: 'Pasan Amarasinghe (IT22110848)',
    gap: 'Legacy systems lack reliable test suites. Standard compilers and syntax checks cannot verify if runtime semantics were altered during refactoring.',
    solution: 'Novel dynamic invariant mining: executes target functions against synthetic input samplings to capture pre/post output, exception, and state stability fingerprints. If delta > 0, auto-rollback is triggered.'
  },
  {
    code: 'RP-04',
    agent: 'DIWO Agent',
    title: 'Developer Interaction & Human-In-The-Loop Orchestration',
    researcher: 'Malmi Bandara (IT22277886)',
    gap: 'Fully autonomous "black-box" AI tools suffer from low developer trust due to lack of transparency, lack of granular control, and invasive unapproved changes.',
    solution: 'A centralized multi-agent coordinator with VS Code IDE extensions, presenting visual AST diffs, impact metrics, and approval/rejection gates before git commits.'
  }
]

const MATRIX_COMPARISON = [
  { feature: 'Machine-Readable JSON Knowledge Graph', refactoriq: true, sonarqube: false, jdeodorant: false, copilot: false },
  { feature: 'Dependency-Aware Refactoring Sequencing (DAG)', refactoriq: true, sonarqube: false, jdeodorant: false, copilot: false },
  { feature: 'Testless Behavioral Verification (Invariant Mining)', refactoriq: true, sonarqube: false, jdeodorant: false, copilot: false },
  { feature: 'Multi-Agent Closed-Loop Collaboration', refactoriq: true, sonarqube: false, jdeodorant: false, copilot: false },
  { feature: 'Automated Instant Git Revert on Regression', refactoriq: true, sonarqube: false, jdeodorant: false, copilot: false },
  { feature: 'Human-In-The-Loop IDE Verification', refactoriq: true, sonarqube: false, jdeodorant: false, copilot: true }
]

export default function ResearchPage() {
  const [copiedBib, setCopiedBib] = useState(false)

  const bibtex = `@article{refactoriq2026,
  title={An Agentic Intelligent Code Refactoring Assistant for Legacy Systems},
  author={Peiris, Imal Ayodya and Nanayakkara, Sithmaka and Amarasinghe, Pasan and Bandara, Malmi and Manathunga, Kalpani and Perera, Jeewaka},
  journal={Department of Software Engineering, Sri Lanka Institute of Information Technology (SLIIT)},
  year={2026},
  note={Research Project RP26-SE-008}
}`

  const handleCopyBib = () => {
    navigator.clipboard.writeText(bibtex)
    setCopiedBib(true)
    setTimeout(() => setCopiedBib(false), 2000)
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research Paper & Dissertation Details</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            An Agentic Intelligent Code Refactoring Assistant for Legacy Systems
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Addressing architectural degradation, cognitive fatigue, and the legacy testless paradox through multi-agent planning and behavioral invariant fingerprinting.
          </p>
        </div>

        {/* Conference Paper Callout Card */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-cyan-500/30 dark:border-cyan-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                Peer-Reviewed Conference Paper
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Dissertation Research Paper (RP26-SE-008)
              </h2>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Department of Software Engineering · Sri Lanka Institute of Information Technology (SLIIT)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/20 transition"
              >
                <BookOpen className="w-4 h-4" />
                <span>Full Documentation & Reader</span>
              </Link>

              <a
                href="/doc/RefactorIQ_Conference_Paper.pdf"
                download="RefactorIQ_Conference_Paper.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Abstract Body */}
          <div className="pt-8 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Executive Research Abstract
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Legacy software systems accumulate structural decay and architectural entropy over decades of evolution, rendering refactoring risky and cost-prohibitive. Although modern AI tools like LLMs can generate code, they lack architectural context and often introduce silent behavioral regressions. Furthermore, existing static analysis platforms generate passive dashboards rather than executable machine representations, while existing refactoring tools fail when test suites are absent.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              RefactorIQ resolves these limitations by introducing a novel <strong>4-agent ecosystem</strong>. By combining Tree-sitter AST and CFG parsing, Multi-Criteria Decision Analysis (MCDA) sequencing, reversible LibCST codemods, and a breakthrough <strong>Behavioral Fingerprinting & Invariant Mining</strong> harness, RefactorIQ verifies execution safety even in repositories with 0 unit tests. If any runtime invariant deviates, changes are rolled back automatically, restoring developer trust.
            </p>
          </div>

        </div>

        {/* 4 Research Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Research Contributions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              The 4 Theoretical Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_PILLARS.map((p) => (
              <div key={p.code} className="p-6 sm:p-8 rounded-3xl glass-panel space-y-4 border border-slate-300/60 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                    {p.code} · {p.agent}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{p.researcher}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {p.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-slate-700 dark:text-slate-300">
                    <strong className="text-red-500 font-mono">Research Gap: </strong>
                    {p.gap}
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-slate-700 dark:text-slate-300">
                    <strong className="text-emerald-500 font-mono">Novel Solution: </strong>
                    {p.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benchmarking & Comparative Analysis Table */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-300/60 dark:border-white/10 shadow-2xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
              State-of-the-Art Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Comparative Analysis vs Existing Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Comparing RefactorIQ against conventional static analyzers and AI assistants.
            </p>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left text-xs sm:text-sm font-mono">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 text-slate-400">
                  <th className="pb-4 font-semibold text-slate-800 dark:text-slate-200">Capability / Dimension</th>
                  <th className="pb-4 font-bold text-cyan-500">RefactorIQ (Ours)</th>
                  <th className="pb-4 text-slate-500">SonarQube</th>
                  <th className="pb-4 text-slate-500">JDeodorant</th>
                  <th className="pb-4 text-slate-500">GitHub Copilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/50 dark:divide-white/5">
                {MATRIX_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-200/30 dark:hover:bg-white/5 transition">
                    <td className="py-4 text-slate-800 dark:text-slate-200 font-sans font-medium">{row.feature}</td>
                    <td className="py-4 text-cyan-500">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Full Support
                      </span>
                    </td>
                    <td className="py-4 text-slate-500">
                      {row.sonarqube ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-slate-400" />}
                    </td>
                    <td className="py-4 text-slate-500">
                      {row.jdeodorant ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-slate-400" />}
                    </td>
                    <td className="py-4 text-slate-500">
                      {row.copilot ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-slate-400" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BibTeX Citation Box */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-300/60 dark:border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
              Cite This Research (BibTeX)
            </span>
            <button
              onClick={handleCopyBib}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition"
            >
              {copiedBib ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBib ? 'Copied BibTeX' : 'Copy Citation'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 text-cyan-300 font-mono text-xs overflow-x-auto border border-white/10">
            {bibtex}
          </pre>
        </div>

      </div>
    </div>
  )
}
