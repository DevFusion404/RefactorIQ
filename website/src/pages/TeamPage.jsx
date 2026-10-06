import { 
  Users, 
  GraduationCap, 
  Mail, 
  Award, 
  Cpu 
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'

const SUPERVISORS = [
  {
    name: 'Dr. Kalpani Manathunga',
    role: 'Primary Research Supervisor',
    title: 'Senior Lecturer',
    department: 'Department of Software Engineering',
    institution: 'Faculty of Computing, SLIIT',
    initials: 'KM',
    color: 'from-cyan-500 to-blue-600',
    bio: 'Guiding research in agentic software engineering, code quality modeling, and intelligent systems.',
    email: 'kalpani.m@sliit.lk'
  },
  {
    name: 'Mr. Jeewaka Perera',
    role: 'Research Co-Supervisor',
    title: 'Lecturer',
    department: 'Department of Software Engineering',
    institution: 'Faculty of Computing, SLIIT',
    initials: 'JP',
    color: 'from-violet-500 to-indigo-600',
    bio: 'Providing academic direction in software architecture, legacy system modernization, and automated verification.',
    email: 'jeewaka.p@sliit.lk'
  }
]

const RESEARCHERS = [
  {
    name: 'Imal Ayodya',
    studentId: 'IT22124180',
    formalName: 'Peiris M.I.A.',
    role: 'Team Leader & Undergraduate Researcher',
    isLeader: true,
    agent: 'CUQA Agent',
    specialization: 'B.Sc. (Hons) in IT - Software Engineering',
    initials: 'IA',
    color: 'from-cyan-500 to-teal-600',
    pillar: 'Code Understanding & Quality Assessment Agent',
    focus: 'Deep AST Parsing, Control Flow Graph (CFG) Construction, Maintainability Metric Mining, and JSON Knowledge Graph Schemas.',
    tools: ['Tree-sitter', 'Graph Modeling', 'Cyclomatic Complexity', 'Smell Heuristics'],
    github: 'https://github.com/ImalAyodya',
    linkedin: 'https://www.linkedin.com/in/ayodya-peiris',
    email: 'IT22124180@my.sliit.lk'
  },
  {
    name: 'Sithmaka Nanayakkara',
    studentId: 'IT22103918',
    formalName: 'Nanayakkara G.L.C.S.',
    role: 'Undergraduate Researcher',
    agent: 'RDP Agent',
    specialization: 'B.Sc. (Hons) in IT - Software Engineering',
    initials: 'SN',
    color: 'from-violet-500 to-indigo-600',
    pillar: 'Refactoring Decision & Planning Agent',
    focus: 'Hybrid Multi-Criteria Decision Analysis (MCDA), ML Suitability Prediction, and Conflict-Free DAG Refactoring Sequencing.',
    tools: ['Python', 'MCDA (TOPSIS/AHP)', 'DAG Topological Sort', 'AST Analyzers'],
    github: 'https://github.com/chamithusithmaka',
    linkedin: 'https://linkedin.com',
    email: 'IT22103918@my.sliit.lk'
  },
  {
    name: 'Pasan Amarasinghe',
    studentId: 'IT22110848',
    formalName: 'Amarasinghe W.A.P.M.',
    role: 'Undergraduate Researcher',
    agent: 'SCTV Agent',
    specialization: 'B.Sc. (Hons) in IT - Software Engineering',
    initials: 'PA',
    color: 'from-emerald-500 to-teal-600',
    pillar: 'Safe Code Transformation & Validation Agent',
    focus: 'Reversible LibCST AST Codemods, and Behavioral Fingerprinting with Invariant Mining for Testless Legacy Code Verification.',
    tools: ['LibCST Codemods', 'Dynamic Execution Harness', 'Invariant Comparator', 'Mypy'],
    github: 'https://github.com/Pasan115',
    linkedin: 'https://www.linkedin.com/in/pasan-amarasinghe-a3858b339/',
    email: 'IT22110848@my.sliit.lk'
  },
  {
    name: 'Malmi Bandara',
    studentId: 'IT22277886',
    formalName: 'Bandara S.M.Y.M.',
    role: 'Undergraduate Researcher',
    agent: 'DIWO Agent',
    specialization: 'B.Sc. (Hons) in IT - Software Engineering',
    initials: 'MB',
    color: 'from-amber-500 to-orange-600',
    pillar: 'Developer Interaction & Workflow Orchestration Agent',
    focus: 'Human-in-the-Loop Developer Trust, Central Multi-Agent Orchestration, VS Code IDE Extension, and Interactive Diffs.',
    tools: ['VS Code Extension API', 'FastAPI Bus', 'Git Webhooks', 'React Dashboard'],
    github: 'https://github.com/YeshaniB',
    linkedin: 'https://lk.linkedin.com/in/malmi-bandara-681239322',
    email: 'IT22277886@my.sliit.lk'
  }
]

export default function TeamPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Users className="w-3.5 h-3.5" />
            <span>Research Group · SLIIT Faculty of Computing</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Meet the RefactorIQ Team
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Conducted under the Department of Software Engineering, SLIIT for the undergraduate research dissertation (Project RP26-SE-008).
          </p>
        </div>

        {/* Supervisors Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-white/10">
            <GraduationCap className="w-5 h-5 text-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Academic Supervisors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPERVISORS.map((sup, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl glass-panel flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-slate-300/60 dark:border-white/10 relative overflow-hidden"
              >
                {/* Avatar Placeholder with Initials */}
                <div className="relative shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${sup.color} p-0.5 shadow-xl flex items-center justify-center`}>
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-extrabold text-2xl tracking-wider">
                      {sup.initials}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-cyan-500 text-slate-950">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {sup.role}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {sup.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {sup.title} · {sup.department}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {sup.bio}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-center sm:justify-start gap-2">
                    <a
                      href={`mailto:${sup.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass-pill text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition"
                    >
                      <Mail className="w-3 h-3 text-cyan-500" />
                      <span>{sup.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Researchers Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-white/10">
            <Cpu className="w-5 h-5 text-violet-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Undergraduate Student Researchers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCHERS.map((mem) => (
              <div 
                key={mem.studentId}
                className="p-6 sm:p-8 rounded-3xl glass-panel space-y-5 border border-slate-300/60 dark:border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    
                    {/* Avatar Initials Placeholder */}
                    <div className="relative shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${mem.color} p-0.5 shadow-lg flex items-center justify-center`}>
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-extrabold text-xl tracking-wider">
                          {mem.initials}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                        {mem.agent}
                      </span>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                        {mem.studentId}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 mt-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {mem.name}
                      </h3>
                      {mem.isLeader && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          ★ Team Leader
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {mem.formalName} · {mem.specialization}
                    </p>
                  </div>

                  {/* Research Focus */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 space-y-2">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {mem.pillar}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {mem.focus}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-4">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block mb-2">
                      Key Competencies & Artifacts
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mem.tools.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-md glass-pill text-[11px] font-mono text-slate-600 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer contacts */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <a
                    href={`mailto:${mem.email}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{mem.email}</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={mem.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg glass-pill hover:text-cyan-500 transition"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={mem.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg glass-pill hover:text-cyan-500 transition"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
