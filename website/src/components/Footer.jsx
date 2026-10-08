import { Link } from 'react-router-dom'
import { ShieldCheck, BookOpen, GraduationCap } from 'lucide-react'
import { GithubIcon } from './Icons'
import logoImg from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="relative mt-28 border-t border-slate-200/40 dark:border-white/10 bg-slate-100/50 dark:bg-[#05070b]/90 backdrop-blur-xl">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-white/20 p-1 flex items-center justify-center shadow-md">
                <img src={logoImg} alt="RefactorIQ" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-cyan-800 to-indigo-900 dark:from-white dark:via-cyan-200 dark:to-violet-300 bg-clip-text text-transparent">
                  RefactorIQ
                </span>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">Project RP26-SE-008</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              An Agentic Intelligent Code Refactoring Assistant for Legacy Systems. Pioneering multi-agent planning and behavioral invariant fingerprinting for regression-free modernization.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <span>Sri Lanka Institute of Information Technology (SLIIT)</span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Department of Software Engineering · Faculty of Computing
            </div>
          </div>

          {/* Core Agents */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Autonomous Agents
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/architecture" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  CUQA: Code Understanding
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
                  RDP: Decision & Planning
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  SCTV: Safe Transformation
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  DIWO: Interaction & HITL
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation & Publications */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Documentation & Papers
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/docs" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Project Documents & Proposals
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">
                  Conference Paper (.PDF)
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">
                  Research Methodology
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition">
                  Validation Benchmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-cyan-500 transition">Home Overview</Link></li>
              <li><Link to="/architecture" className="hover:text-cyan-500 transition">System Architecture</Link></li>
              <li><Link to="/team" className="hover:text-cyan-500 transition">Research Team & Mentors</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-500 transition">Contact Department</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/40 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © 2026 RefactorIQ · All Rights Reserved · Department of Software Engineering, SLIIT
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-cyan-500 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Project Repository</span>
            </a>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Zero-Regression Invariant Guarantee</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
