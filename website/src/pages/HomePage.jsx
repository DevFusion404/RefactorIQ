import { ExternalLink } from 'lucide-react'
import HeroShowcase from '../components/HeroShowcase'
import CodeDiffPreview from '../components/CodeDiffPreview'
import PipelineFlow from '../components/PipelineFlow'

import liveSite from '../assets/liveSite.png'

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Expansive Widescreen Hero Showcase with 4 Banners */}
      <HeroShowcase />

      {/* 2. Live Cloud Platform Showcase (Minimalist & Generous Whitespace) */}
      <section className="py-8 relative">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-slate-200/80 dark:border-white/10 shadow-2xl relative overflow-hidden space-y-8">
            
            {/* Header: Title, Description, and Single CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-200/60 dark:border-white/10">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  Live Deployment
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  RefactorIQ Cloud Platform
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  Analyze legacy repositories, configure multi-agent plans, and verify behavioral preservation live in production.
                </p>
              </div>

              {/* Single purposeful CTA button */}
              <a
                href="https://refactoriqfrontend.gentleglacier-0204e61b.southeastasia.azurecontainerapps.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-md transform hover:-translate-y-0.5 transition duration-200 shrink-0"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Clean Elevated Screenshot Frame (No fake window chrome or duplicate buttons) */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl bg-slate-950">
              <img
                src={liveSite}
                alt="RefactorIQ Live Cloud Platform"
                className="w-full h-auto object-cover object-top"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Before/After Code Transformation */}
      <CodeDiffPreview />

      {/* 4. Multi-Agent Pipeline Visualization */}
      <PipelineFlow />
    </div>
  )
}
