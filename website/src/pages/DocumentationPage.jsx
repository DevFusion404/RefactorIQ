import { useState } from 'react'
import { 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  BookOpen, 
  FileCheck, 
  Maximize2,
  Eye,
  Crown
} from 'lucide-react'

// The 4 Member Research Papers + Joint Conference Paper + Proposals
const RESEARCH_PAPERS = [
  {
    id: 'paper-imal',
    title: 'Code Understanding & Quality Assessment: Deep AST Parsing & Control Flow Graph Analysis',
    author: 'Imal Ayodya (Peiris M.I.A.)',
    regNo: 'IT22124180',
    isLeader: true,
    agent: 'CUQA Agent Engine',
    phase: 'Phase 01 · Diagnostic Engine',
    category: 'Individual Research Paper',
    type: 'PDF Document',
    size: '887 KB',
    status: 'Official Submission',
    fileUrl: '/doc/RefactorIQ_Paper_IT22124180_Imal_Ayodya.pdf',
    downloadName: 'R26-SE-008_IT22124180_Peiris_M.I.A_Paper.pdf',
    badge: 'Team Leader Paper',
    description: 'Deconstructs polyglot legacy repositories into structured ASTs using Tree-sitter parsers. Builds Control Flow Graphs (CFG) and dependency matrices to detect God Classes, Feature Envy, and structural bottlenecks before transformation.',
    highlights: [
      'Tree-sitter C-binding parser across legacy syntax trees',
      'Cyclomatic, RFC, and CBO metric extraction',
      'Machine-readable JSON knowledge graph schema'
    ]
  },
  {
    id: 'paper-sithmaka',
    title: 'Refactoring Decision & Planning: Hybrid Multi-Criteria Analysis & Conflict-Free Sequencing',
    author: 'Sithmaka Nanayakkara (Nanayakkara G.L.C.S.)',
    regNo: 'IT22103918',
    isLeader: false,
    agent: 'RDP Decision Core',
    phase: 'Phase 02 · Strategic Planning',
    category: 'Individual Research Paper',
    type: 'PDF Document',
    size: '875 KB',
    status: 'Official Submission',
    fileUrl: '/doc/RefactorIQ_Paper_IT22103918_Sithmaka_Nanayakkara.pdf',
    downloadName: 'R26-SE-008_IT22103918_Nanayakkara_G.L.C.S_Paper.pdf',
    badge: 'Research Paper',
    description: 'Evaluates architectural tradeoffs using Multi-Criteria Decision Analysis (MCDA). Combines hybrid ML suitability models with TOPSIS and AHP to produce conflict-free Directed Acyclic Graphs (DAGs) for optimal sequential execution.',
    highlights: [
      'Multi-Criteria Decision Analysis (TOPSIS & AHP)',
      'ML Suitability Scoring for smell prioritization',
      'Dependency-aware DAG topological sequencing'
    ]
  },
  {
    id: 'paper-pasan',
    title: 'Safe Code Transformation & Validation: Behavioral Fingerprinting & Invariant Mining',
    author: 'Pasan Amarasinghe (Amarasinghe W.A.P.M.)',
    regNo: 'IT22110848',
    isLeader: false,
    agent: 'SCTV Safety Engine',
    phase: 'Phase 03 · Invariant Verification',
    category: 'Individual Research Paper',
    type: 'PDF Document',
    size: '588 KB',
    status: 'Official Submission',
    fileUrl: '/doc/RefactorIQ_Paper_IT22110848_Pasan_Amarasinghe.pdf',
    downloadName: 'R26-SE-008_IT22110848_Amarasinghe_W.A.P.M_Paper.pdf',
    badge: 'Research Paper',
    description: 'Solves the legacy testless paradox through dynamic invariant mining. Executes target functions across synthetic input vectors (normal, boundary, null) to record pre/post behavioral fingerprints, triggering auto-rollback on variance.',
    highlights: [
      'Reversible LibCST codemod application',
      'Synthetic input sampling & runtime invariant capture',
      'Zero-regression validation without preexisting unit tests'
    ]
  },
  {
    id: 'paper-malmi',
    title: 'Developer Interaction & Orchestration: Human-in-the-Loop Multi-Agent Workflows',
    author: 'Malmi Bandara (Bandara S.M.Y.M.)',
    regNo: 'IT22277886',
    isLeader: false,
    agent: 'DIWO Developer Interface',
    phase: 'Phase 04 · Human-in-the-Loop',
    category: 'Individual Research Paper',
    type: 'PDF Document',
    size: '864 KB',
    status: 'Official Submission',
    fileUrl: '/doc/RefactorIQ_Paper_IT22277886_Malmi_Bandara.pdf',
    downloadName: 'R26_SE_008_IT22277886_Bandara_S.M.Y.M_Paper.pdf',
    badge: 'Research Paper',
    description: 'Central microservice orchestrator connecting autonomous multi-agent pipelines with developers. Delivers VS Code IDE extensions with split-view AST diffs, behavioral proof telemetry, and strict approval gates before commit.',
    highlights: [
      'VS Code Language Server integration',
      'Split-view AST diff and impact visualizations',
      'Human-in-the-Loop (HITL) approval gates & audit log'
    ]
  }
]

const COMPREHENSIVE_DOCS = [
  {
    id: 'conference-joint',
    title: 'An Agentic Intelligent Code Refactoring Assistant for Legacy Systems',
    author: 'Peiris M.I.A., Nanayakkara S.C., Amarasinghe P.K., Bandara M.Y., Dr. Kalpani Manathunga, Jeewaka Perera',
    regNo: 'RP26-SE-008',
    isLeader: true,
    agent: 'Joint Research Consortium',
    phase: 'Consolidated System Architecture',
    category: 'Joint Conference Paper',
    type: 'PDF Document',
    size: '450 KB',
    status: 'Camera-Ready / Submitted',
    fileUrl: '/doc/RefactorIQ_Conference_Paper.pdf',
    downloadName: 'RefactorIQ_Conference_Paper.pdf',
    badge: 'Joint Conference Paper',
    description: 'The master conference research paper uniting all 4 agents into an autonomous closed-loop refactoring assistant with mathematical invariant verification.',
    highlights: [
      'Comprehensive 4-agent ecosystem specification',
      'Empirical benchmarks on open-source legacy systems',
      'Complete comparative matrix against SonarQube & Copilot'
    ]
  },
  {
    id: 'project-proposal',
    title: 'RefactorIQ Comprehensive Project Proposal',
    author: 'RefactorIQ Research Group · RP26-SE-008',
    regNo: 'RP26-SE-008',
    isLeader: false,
    agent: 'Project Specifications',
    phase: 'Project Planning & Feasibility',
    category: 'Project Proposal',
    type: 'DOCX Document',
    size: '708 KB',
    status: 'Department Approved',
    fileUrl: '/doc/RefactorIQ_Project_Proposal.docx',
    downloadName: 'RefactorIQ_Project_Proposal.docx',
    badge: 'Institutional Proposal',
    description: 'The master institutional proposal detailing problem domain, literature gap analysis, resource allocation, and sprint Gantt timeline.',
    highlights: [
      'Full project scope & requirement breakdown',
      'Architecture diagrams & tech stack justification',
      'Risk management and milestone schedule'
    ]
  },
  {
    id: 'research-proposal',
    title: 'RefactorIQ Academic Research Proposal (RP26-SE-008)',
    author: 'Imal Ayodya (Lead), Sithmaka Nanayakkara, Pasan Amarasinghe, Malmi Bandara',
    regNo: 'RP26-SE-008',
    isLeader: false,
    agent: 'Research Questions & Method',
    phase: 'Academic Research Framing',
    category: 'Research Proposal',
    type: 'DOCX Document',
    size: '405 KB',
    status: 'Academic Defense Passed',
    fileUrl: '/doc/RefactorIQ_Research_Proposal.docx',
    downloadName: 'RefactorIQ_Research_Proposal.docx',
    badge: 'Dissertation Proposal',
    description: 'Formal academic research proposal framing Research Questions RQ1–RQ4, scientific hypotheses, and validation frameworks.',
    highlights: [
      'Research questions RQ1 to RQ4 definitions',
      'Individual component methodologies',
      'Evaluation criteria and metric frameworks'
    ]
  }
]

export default function DocumentationPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPreviewPaper, setCurrentPreviewPaper] = useState(RESEARCH_PAPERS[0])
  const [copiedBib, setCopiedBib] = useState(false)
  const [copiedApa, setCopiedApa] = useState(false)

  const allDocuments = [...RESEARCH_PAPERS, ...COMPREHENSIVE_DOCS]

  const filteredDocs = selectedCategory === 'All'
    ? allDocuments
    : selectedCategory === 'Individual Papers'
    ? RESEARCH_PAPERS
    : selectedCategory === 'Joint Conference Paper'
    ? [COMPREHENSIVE_DOCS[0]]
    : COMPREHENSIVE_DOCS.slice(1) // Project Proposals

  const bibtex = `@article{refactoriq2026,
  title={An Agentic Intelligent Code Refactoring Assistant for Legacy Systems},
  author={Peiris, Imal Ayodya and Nanayakkara, Sithmaka and Amarasinghe, Pasan and Bandara, Malmi and Manathunga, Kalpani and Perera, Jeewaka},
  journal={Department of Software Engineering, Sri Lanka Institute of Information Technology (SLIIT)},
  year={2026},
  note={Research Project RP26-SE-008}
}`

  const apaCitation = `Peiris, M. I. A., Nanayakkara, S. C., Amarasinghe, P. K., Bandara, M. Y., Manathunga, K., & Perera, J. (2026). An Agentic Intelligent Code Refactoring Assistant for Legacy Systems. Department of Software Engineering, Sri Lanka Institute of Information Technology (SLIIT). Research Project RP26-SE-008.`

  const handleCopy = (text, setFn) => {
    navigator.clipboard.writeText(text)
    setFn(true)
    setTimeout(() => setFn(false), 2000)
  }

  const handleSelectPreview = (doc) => {
    if (doc.type.includes('PDF')) {
      setCurrentPreviewPaper(doc)
      const readerElem = document.getElementById('document-viewer')
      if (readerElem) {
        readerElem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="pt-28 pb-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
            <span>Research Publications & Proposal Archive</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Project Documentation & Research Papers
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Explore the 4 individual research papers authored by each team member, the joint conference publication, and official project proposals for RefactorIQ.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span>4 Individual Research Papers (.PDF)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>1 Joint Conference Publication (.PDF)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
              <span>2 Project & Research Proposals (.DOCX)</span>
            </div>
          </div>
        </div>

        {/* Section 1: The 4 Core Research Papers */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200/60 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider mb-1">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Primary Research Deliverables</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                The 4 Individual Research Papers
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
                Authored by each student researcher targeting their dedicated phase of the RefactorIQ pipeline.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {['All', 'Individual Papers', 'Joint Conference Paper', 'Project Proposals'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition duration-200 ${
                    selectedCategory === cat
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                      : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDocs.map((doc) => {
              const isPdf = doc.type.includes('PDF')
              return (
                <div 
                  key={doc.id}
                  className={`p-6 sm:p-7 rounded-3xl glass-panel flex flex-col justify-between border transition duration-300 shadow-xl space-y-6 ${
                    doc.isLeader 
                      ? 'border-cyan-500/40 dark:border-cyan-500/30 ring-1 ring-cyan-500/20' 
                      : 'border-slate-200/80 dark:border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header Row: Badge & Metadata */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          doc.isLeader 
                            ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30' 
                            : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                        }`}>
                          {doc.isLeader && <Crown className="w-3 h-3 text-cyan-500" />}
                          <span>{doc.badge}</span>
                        </span>
                        <span className="text-slate-400 dark:text-slate-500">
                          {doc.phase}
                        </span>
                      </div>
                      <span className="text-slate-400 dark:text-slate-500">
                        {doc.size}
                      </span>
                    </div>

                    {/* Title & Author */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {doc.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {doc.author}
                        </span>
                        <span className="text-slate-400 dark:text-slate-600">·</span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                          {doc.regNo}
                        </span>
                        <span className="text-slate-400 dark:text-slate-600">·</span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {doc.agent}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {doc.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-white/10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                        Technical Scope:
                      </span>
                      {doc.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="text-cyan-500 font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center gap-3">
                    {isPdf && (
                      <button
                        onClick={() => handleSelectPreview(doc)}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                          currentPreviewPaper.id === doc.id
                            ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25'
                            : 'glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10'
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Preview in Reader</span>
                      </button>
                    )}

                    <a
                      href={doc.fileUrl}
                      download={doc.downloadName}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 transition shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>

                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl glass-panel glass-panel-hover text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      title="Open file in a new browser tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section 2: Interactive In-Browser Document Viewer */}
        <div id="document-viewer" className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-white/10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>Interactive In-Browser Document Viewer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {currentPreviewPaper.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                Author: {currentPreviewPaper.author} ({currentPreviewPaper.regNo}) · {currentPreviewPaper.agent}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={currentPreviewPaper.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Open Fullscreen</span>
              </a>

              <a
                href={currentPreviewPaper.fileUrl}
                download={currentPreviewPaper.downloadName}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Paper</span>
              </a>
            </div>
          </div>

          {/* Quick Paper Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Switch Paper:</span>
            {RESEARCH_PAPERS.map((paper) => (
              <button
                key={paper.id}
                onClick={() => setCurrentPreviewPaper(paper)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                  currentPreviewPaper.id === paper.id
                    ? 'bg-cyan-600 text-white font-bold'
                    : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {paper.author.split(' ')[0]} ({paper.regNo})
              </button>
            ))}
            <button
              onClick={() => setCurrentPreviewPaper(COMPREHENSIVE_DOCS[0])}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                currentPreviewPaper.id === COMPREHENSIVE_DOCS[0].id
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Joint Conference Paper
            </button>
          </div>

          {/* PDF Viewer Frame */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 dark:border-white/10 bg-slate-900 shadow-inner min-h-[600px] sm:min-h-[800px]">
              <iframe
                key={currentPreviewPaper.fileUrl}
                src={`${currentPreviewPaper.fileUrl}#view=FitH`}
                title={currentPreviewPaper.title}
                className="w-full h-[650px] sm:h-[850px] border-0"
              />
            </div>
            <p className="text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
              Tip: Use the browser controls above to zoom, search, or print. You can switch between all 4 individual papers using the buttons above.
            </p>
          </div>
        </div>

        {/* Section 3: Academic Citation & BibTeX */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                Citation & Academic Reference
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                How to Cite RefactorIQ
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(bibtex, setCopiedBib)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 transition"
              >
                {copiedBib ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBib ? 'BibTeX Copied!' : 'Copy BibTeX'}</span>
              </button>

              <button
                onClick={() => handleCopy(apaCitation, setCopiedApa)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 transition"
              >
                {copiedApa ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedApa ? 'APA Copied!' : 'Copy APA'}</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">APA Reference</div>
              <p className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {apaCitation}
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 mb-1">BibTeX Entry</div>
              <pre className="p-4 rounded-xl bg-slate-950 text-cyan-300 font-mono text-xs overflow-x-auto border border-white/10 leading-relaxed">
                {bibtex}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
