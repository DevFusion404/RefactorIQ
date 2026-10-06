import { useState } from 'react'
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  ChevronDown 
} from 'lucide-react'

const FAQS = [
  {
    q: 'How does RefactorIQ guarantee safety without pre-existing unit tests?',
    a: 'RefactorIQ features a novel Behavioral Fingerprinting & Invariant Mining engine (Pillar 3). Before any AST codemod is applied, it runs the target code through a dynamic execution harness with hundreds of synthesized boundary and random inputs, capturing return values, exception profiles, and heap state mutations. After refactoring, it re-verifies these signatures. If any delta exists, it executes an automated git rollback.'
  },
  {
    q: 'How does this differ from GitHub Copilot or Cursor?',
    a: 'LLMs generate code probabilistically and often hallucinate subtle logical regressions, syntax changes, or broken dependencies in large legacy repositories. RefactorIQ uses a 4-agent deterministic pipeline that combines AST/CFG structural parsing (Tree-sitter), multi-criteria decision planning (MCDA), reversible codemods (LibCST), and empirical invariant verification before prompting the engineer in VS Code.'
  },
  {
    q: 'What languages and architectures are supported?',
    a: 'The current prototype is optimized for Python legacy codebases (targeting Python 2 to 3 migration, monolithic class decoupling, and dynamic typing stabilization) via LibCST and Tree-sitter. The AST knowledge graph schema is polyglot-ready for Java and JavaScript/TypeScript extensions.'
  },
  {
    q: 'Is RefactorIQ part of an official university research dissertation?',
    a: 'Yes. RefactorIQ is an undergraduate research project (Project Code RP26-SE-008) at the Sri Lanka Institute of Information Technology (SLIIT), Faculty of Computing, Department of Software Engineering.'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic Collaboration',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-28 pb-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Academic & Research Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Connect With Our Research Team
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Interested in collaborating on agentic software refactoring, reviewing the dissertation dataset, or piloting the multi-agent pipeline? Reach out to us.
          </p>
        </div>

        {/* Dual Form & Campus Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel space-y-6 border border-slate-300/60 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold">
                Institution
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                SLIIT Faculty of Computing
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Department of Software Engineering
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>
                  Sri Lanka Institute of Information Technology, New Kandy Road, Malabe, Sri Lanka.
                </span>
              </div>

              {/* <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-500 shrink-0" />
                <span>kalpani.m@sliit.lk</span>
              </div> */}

              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Project Code: <strong>RP26-SE-008</strong></span>
              </div>
            </div>

            {/* <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div className="font-bold font-mono text-cyan-600 dark:text-cyan-400">Supervisory Notice:</div>
              <p>
                Inquiries regarding academic publication, code replication packages, and benchmark repositories can be directed to the faculty supervisors.
              </p>
            </div> */}
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2 p-6 sm:p-10 rounded-3xl glass-panel border border-slate-300/60 dark:border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you for your interest in RefactorIQ. Our research candidates and faculty mentors will review your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl glass-pill text-xs font-mono text-cyan-500 font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Full Name / Academic Title
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="your name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@university.edu"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-cyan-500 transition text-slate-800 dark:text-slate-200"
                  >
                    <option value="Academic Collaboration">Academic & Research Collaboration</option>
                    <option value="Conference Paper Inquiry">Conference Paper / Replication Package</option>
                    <option value="Enterprise Legacy Pilot">Enterprise Legacy Refactoring Pilot</option>
                    <option value="Student / General Feedback">General Dissertation Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Detailed Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your research domain, system refactoring challenges, or collaboration proposal..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-cyan-500 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Research FAQ */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Understanding the RefactorIQ Framework
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel border border-slate-300/60 dark:border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 transition hover:bg-slate-100/50 dark:hover:bg-white/5"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-cyan-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
