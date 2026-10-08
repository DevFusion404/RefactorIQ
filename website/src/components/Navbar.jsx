import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Cpu, 
  Layers, 
  Users, 
  Mail, 
  FileText,
  BookOpen,
  ArrowRight,
  Code2
} from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', path: '/', icon: Cpu },
  { name: 'Research', path: '/research', icon: FileText },
  { name: 'Architecture', path: '/architecture', icon: Layers },
  { name: 'Documentation', path: '/docs', icon: BookOpen },
  { name: 'Team', path: '/team', icon: Users },
  { name: 'Contact', path: '/contact', icon: Mail },
]

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-slate-900/75 dark:bg-[#07090e]/80 backdrop-blur-xl border-b border-slate-200/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity without Logo Image */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition duration-300">
                <Code2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-slate-900 via-cyan-800 to-indigo-900 dark:from-white dark:via-cyan-200 dark:to-violet-300 bg-clip-text text-transparent">
                RefactorIQ
              </span>
              <span className="text-[10px] tracking-wider uppercase font-mono text-slate-500 dark:text-slate-400">
                Agentic Legacy Assistant
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full glass-panel">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200/50 dark:hover:bg-white/5'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 opacity-75" />
                  <span>{link.name}</span>
                </NavLink>
              )
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-3">
            {/* Live System Cloud Link */}
            <a
              href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition"
              title="Launch Live Azure Cloud Deployment"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] tracking-tight font-semibold">Live App</span>
            </a>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl glass-panel glass-panel-hover text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-6 pt-2">
          <div className="rounded-2xl glass-panel p-4 flex flex-col gap-2 border border-slate-200/30 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-600 dark:text-cyan-300 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/40 dark:hover:bg-white/5'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-cyan-500" />
                  <span>{link.name}</span>
                </NavLink>
              )
            })}
            <div className="pt-2 border-t border-slate-200/30 dark:border-white/10 mt-2 space-y-2">
              <a
                href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
              >
                <span>Launch Live Azure App</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold glass-panel glass-panel-hover text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10"
              >
                <span>Documentation & Papers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
