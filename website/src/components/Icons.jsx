// Custom Technical SVG Icons tailored for RefactorIQ Software Engineering System
// Designed to look distinct from generic stock icons

export function AstTreeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="6" cy="12" r="2" fill="currentColor" fillOpacity="0.15" />
      <circle cx="18" cy="12" r="2" fill="currentColor" fillOpacity="0.15" />
      <circle cx="4" cy="20" r="1.75" />
      <circle cx="9" cy="20" r="1.75" />
      <circle cx="15" cy="20" r="1.75" />
      <circle cx="20" cy="20" r="1.75" />
      <path d="M12 6.5v3M10.2 10.5L7.8 11.5M13.8 10.5L16.2 11.5" strokeOpacity="0.7" />
      <path d="M5.3 14l-1 4.25M6.7 14l1.6 4.25M17.3 14l-1.6 4.25M18.7 14l1 4.25" strokeOpacity="0.5" strokeDasharray="1.5 1.5" />
    </svg>
  )
}

export function McdaDecisionIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 21 8.5 17.5 19 6.5 19 3 8.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <line x1="12" y1="2" x2="12" y2="10" strokeOpacity="0.6" />
      <line x1="21" y1="8.5" x2="13.7" y2="11" strokeOpacity="0.6" />
      <line x1="17.5" y1="19" x2="13.2" y2="13.7" strokeOpacity="0.6" />
      <line x1="6.5" y1="19" x2="10.8" y2="13.7" strokeOpacity="0.6" />
      <line x1="3" y1="8.5" x2="10.3" y2="11" strokeOpacity="0.6" />
    </svg>
  )
}

export function InvariantShieldIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2z" fill="currentColor" fillOpacity="0.08" />
      {/* Mathematical Invariant symbol ∀ */}
      <path d="M8 8.5L12 15.5L16 8.5" strokeWidth="1.75" />
      <line x1="9.2" y1="12" x2="14.8" y2="12" strokeWidth="1.75" />
      <circle cx="12" cy="17.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

export function OrchestrationIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
      <rect x="2" y="3" width="5" height="5" rx="1.5" />
      <rect x="17" y="3" width="5" height="5" rx="1.5" />
      <rect x="17" y="16" width="5" height="5" rx="1.5" />
      <rect x="2" y="16" width="5" height="5" rx="1.5" />
      <path d="M7 5.5h2.5a2.5 2.5 0 0 1 2.5 2.5v1M17 5.5h-2.5a2.5 2.5 0 0 0-2.5 2.5v1" strokeOpacity="0.6" />
      <path d="M7 18.5h2.5a2.5 2.5 0 0 0 2.5-2.5v-1M17 18.5h-2.5a2.5 2.5 0 0 1-2.5-2.5v-1" strokeOpacity="0.6" />
    </svg>
  )
}

export function TerminalHexIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8.5 4.9v9.8L12 21.5 3.5 16.7V6.9L12 2z" fill="currentColor" fillOpacity="0.08" />
      <path d="M8 10l3 2-3 2" />
      <line x1="13" y1="14" x2="16" y2="14" />
    </svg>
  )
}

export function ArchitectureMatrixIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <line x1="10" y1="6.5" x2="14" y2="6.5" strokeOpacity="0.6" strokeDasharray="1 1" />
      <line x1="6.5" y1="10" x2="6.5" y2="14" strokeOpacity="0.6" strokeDasharray="1 1" />
      <line x1="17.5" y1="10" x2="17.5" y2="14" strokeOpacity="0.6" strokeDasharray="1 1" />
      <line x1="10" y1="17.5" x2="14" y2="17.5" strokeOpacity="0.6" strokeDasharray="1 1" />
    </svg>
  )
}

export function ResearchManuscriptIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" fill="currentColor" fillOpacity="0.08" />
      <path d="M6 6h10M6 10h10M6 14h6" strokeOpacity="0.7" />
      <circle cx="16" cy="15" r="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M17.5 16.5l2 2" />
    </svg>
  )
}

export function TeamCouncilIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" fill="currentColor" fillOpacity="0.15" />
      <circle cx="5" cy="10" r="2.25" fill="currentColor" fillOpacity="0.1" />
      <circle cx="19" cy="10" r="2.25" fill="currentColor" fillOpacity="0.1" />
      <path d="M7 21v-2a5 5 0 0 1 10 0v2" strokeWidth="1.75" />
      <path d="M2 21v-1.5a4 4 0 0 1 4-4" strokeOpacity="0.6" />
      <path d="M22 21v-1.5a4 4 0 0 0-4-4" strokeOpacity="0.6" />
    </svg>
  )
}

export function TelemetryPulseIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h4l2.5-7 5 14 3.5-9 2 4h3" />
      <circle cx="13.5" cy="19" r="1" fill="currentColor" />
    </svg>
  )
}

export function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
