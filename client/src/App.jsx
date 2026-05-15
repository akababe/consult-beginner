import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import CasePage from './pages/CasePage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <div className="app-shell">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/case/:slug"  element={<CasePage />} />
          <Route path="*"            element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
