import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { ThemeProvider } from './context/ThemeContext'
import SmoothScroll from './components/SmoothScroll'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ResearchPage from './pages/ResearchPage'
import ArchitecturePage from './pages/ArchitecturePage'
import DocumentationPage from './pages/DocumentationPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'

// Automatically scrolls to top upon page navigation
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [showSplash, setShowSplash] = useState(true)

  // Allow pressing ESC to skip splash screen immediately
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowSplash(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <ThemeProvider>
      {/* Animated Splash Screen */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <BrowserRouter>
        <SmoothScroll>
          <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] cyber-grid selection:bg-cyan-500/30 selection:text-cyan-300">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/research" element={<ResearchPage />} />
                <Route path="/architecture" element={<ArchitecturePage />} />
                <Route path="/docs" element={<DocumentationPage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Fallback route redirecting to Home */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
