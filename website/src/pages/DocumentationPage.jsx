import { useState } from 'react'
import { 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Maximize2,
  Eye
} from 'lucide-react'

// The 4 Member Research Papers + Joint Conference Paper + Proposals
const RESEARCH_PAPERS = [
  {
    id: 'paper-imal',
    title: 'Code Understanding & Quality Assessment: Deep AST Parsing & Control Flow Graph Analysis',
    author: 'Imal Ayodya',
    regNo: 'IT22124180',
    category: 'Individual Research Paper',
    fileUrl: '/doc/RefactorIQ_Paper_IT22124180_Imal_Ayodya.pdf',
    downloadName: 'R26-SE-008_IT22124180_Peiris_M.I.A_Paper.pdf',
    description: 'Deconstructs polyglot legacy repositories into structured ASTs using Tree-sitter parsers. Builds Control Flow Graphs and dependency matrices to detect God Classes, Feature Envy, and structural bottlenecks before modification begins.',
  },
  {
    id: 'paper-sithmaka',
    title: 'Refactoring Decision & Planning: Hybrid Multi-Criteria Analysis & Conflict-Free Sequencing',
    author: 'Sithmaka Nanayakkara',
    regNo: 'IT22103918',
    category: 'Individual Research Paper',
    fileUrl: '/doc/RefactorIQ_Paper_IT22103918_Sithmaka_Nanayakkara.pdf',
    downloadName: 'R26-SE-008_IT22103918_Nanayakkara_G.L.C.S_Paper.pdf',
    description: 'Evaluates architectural tradeoffs using Multi-Criteria Decision Analysis (MCDA). Combines hybrid ML suitability models with TOPSIS and AHP to produce conflict-free Directed Acyclic Graphs (DAGs) for optimal sequential execution.',
  },
  {
    id: 'paper-pasan',
    title: 'Safe Code Transformation & Validation: Behavioral Fingerprinting & Invariant Mining',
    author: 'Pasan Amarasinghe',
    regNo: 'IT22110848',
    category: 'Individual Research Paper',
    fileUrl: '/doc/RefactorIQ_Paper_IT22110848_Pasan_Amarasinghe.pdf',
    downloadName: 'R26-SE-008_IT22110848_Amarasinghe_W.A.P.M_Paper.pdf',
    description: 'Solves the legacy testless paradox through dynamic invariant mining. Executes target functions across synthetic input vectors (normal, boundary, null) to record pre/post behavioral fingerprints, triggering auto-rollback on variance.',
  },
  {
    id: 'paper-malmi',
    title: 'Developer Interaction & Orchestration: Human-in-the-Loop Multi-Agent Workflows',
    author: 'Malmi Bandara',
    regNo: 'IT22277886',
    category: 'Individual Research Paper',
    fileUrl: '/doc/RefactorIQ_Paper_IT22277886_Malmi_Bandara.pdf',
    downloadName: 'R26_SE_008_IT22277886_Bandara_S.M.Y.M_Paper.pdf',
    description: 'Central microservice orchestrator connecting autonomous multi-agent pipelines with developers. Delivers VS Code IDE extensions with split-view AST diffs, behavioral proof telemetry, and strict approval gates before commit.',
  }
]

const COMPREHENSIVE_DOCS = [
  {
    id: 'conference-joint',
    title: 'An Agentic Intelligent Code Refactoring Assistant for Legacy Systems',
    author: 'RefactorIQ Research Team',
    regNo: 'RP26-SE-008',
    category: 'Joint Conference Paper',
    fileUrl: '/doc/RefactorIQ_Conference_Paper.pdf',
    downloadName: 'RefactorIQ_Conference_Paper.pdf',
    description: 'The master conference research paper uniting all 4 agents into an autonomous closed-loop refactoring assistant with mathematical invariant verification.',
  },
  {
    id: 'project-proposal',
    title: 'RefactorIQ Comprehensive Project Proposal',
    author: 'Faculty of Computing',
    regNo: 'SLIIT',
    category: 'Project Proposal',
    fileUrl: '/doc/RefactorIQ_Project_Proposal.docx',
    downloadName: 'RefactorIQ_Project_Proposal.docx',
    description: 'The master institutional proposal detailing problem domain, literature gap analysis, resource allocation, and sprint milestones.',
  },
  {
    id: 'research-proposal',
    title: 'RefactorIQ Academic Research Proposal (RP26-SE-008)',
    author: 'Department of Software Engineering',
    regNo: 'SLIIT',
    category: 'Research Proposal',
    fileUrl: '/doc/RefactorIQ_Research_Proposal.docx',
    downloadName: 'RefactorIQ_Research_Proposal.docx',
    description: 'Formal academic research proposal framing Research Questions RQ1–RQ4, scientific hypotheses, and empirical validation frameworks.',
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
    if (doc.fileUrl.endsWith('.pdf')) {
      setCurrentPreviewPaper(doc)
      const readerElem = document.getElementById('document-viewer')
      if (readerElem) {
        readerElem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="pt-28 pb-20 space-y-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Page Header: Clean, High Contrast, Generous Space */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Publications Archive
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Project Documentation & Research Papers
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Access the 4 individual research papers, the consolidated conference publication, and institutional proposals for RefactorIQ.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['All', 'Individual Papers', 'Joint Conference Paper', 'Project Proposals'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition duration-200 ${
                selectedCategory === cat
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean, Uncluttered Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDocs.map((doc) => {
            const isPdf = doc.fileUrl.endsWith('.pdf')
            return (
              <div 
                key={doc.id}
                className="p-8 sm:p-10 rounded-3xl glass-panel flex flex-col justify-between border border-slate-200/80 dark:border-white/10 hover:border-slate-400/40 dark:hover:border-white/20 transition duration-300 shadow-xl space-y-6"
              >
                <div className="space-y-4">
                  {/* Author Name and IT Number in Larger, Clear Typography */}
                  <div className="flex items-center justify-between text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 pb-3 border-b border-slate-200/60 dark:border-white/10">
                    <span>{doc.author}</span>
                    <span className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {doc.regNo}
                    </span>
                  </div>

                  {/* Document Title: Big, Bold, Clean */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                    {doc.title}
                  </h3>

                  {/* 1-2 Sentence Clear Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                    {doc.description}
                  </p>
                </div>

                {/* Action Buttons: Clean & Direct */}
                <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center gap-3">
                  {isPdf && (
                    <button
                      onClick={() => handleSelectPreview(doc)}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition ${
                        currentPreviewPaper.id === doc.id
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
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
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 transition shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>

                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3 rounded-xl glass-panel glass-panel-hover text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    title="Open in new browser tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section 2: Interactive In-Browser Document Viewer */}
        <div id="document-viewer" className="rounded-3xl glass-panel p-8 sm:p-12 border border-slate-200/80 dark:border-white/10 shadow-2xl space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/60 dark:border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                In-Browser Reader
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {currentPreviewPaper.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
                {currentPreviewPaper.author} · {currentPreviewPaper.regNo}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={currentPreviewPaper.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Open Fullscreen</span>
              </a>

              <a
                href={currentPreviewPaper.fileUrl}
                download={currentPreviewPaper.downloadName}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-sm transition"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Quick Paper Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <span className="text-xs font-mono font-semibold text-slate-500 mr-2">Select Paper:</span>
            {RESEARCH_PAPERS.map((paper) => (
              <button
                key={paper.id}
                onClick={() => setCurrentPreviewPaper(paper)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                  currentPreviewPaper.id === paper.id
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-sm'
                    : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {paper.author} ({paper.regNo})
              </button>
            ))}
            <button
              onClick={() => setCurrentPreviewPaper(COMPREHENSIVE_DOCS[0])}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                currentPreviewPaper.id === COMPREHENSIVE_DOCS[0].id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-sm'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Joint Conference Paper
            </button>
          </div>

          {/* PDF Viewer Frame */}
          <div className="rounded-2xl overflow-hidden border border-slate-300/80 dark:border-white/10 bg-slate-950 shadow-inner min-h-[600px] sm:min-h-[800px]">
            <iframe
              key={currentPreviewPaper.fileUrl}
              src={`${currentPreviewPaper.fileUrl}#view=FitH`}
              title={currentPreviewPaper.title}
              className="w-full h-[650px] sm:h-[850px] border-0"
            />
          </div>
        </div>

        {/* Section 3: Academic Citation & BibTeX */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-slate-200/80 dark:border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Academic Reference
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                How to Cite RefactorIQ
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(bibtex, setCopiedBib)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 transition"
              >
                {copiedBib ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBib ? 'BibTeX Copied' : 'Copy BibTeX'}</span>
              </button>

              <button
                onClick={() => handleCopy(apaCitation, setCopiedApa)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 transition"
              >
                {copiedApa ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedApa ? 'APA Copied' : 'Copy APA'}</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-slate-500 mb-1">APA Reference</div>
              <p className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                {apaCitation}
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-500 mb-1">BibTeX Entry</div>
              <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-white/10 leading-relaxed">
                {bibtex}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
