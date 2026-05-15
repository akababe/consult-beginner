import { useNavigate } from 'react-router-dom'
import { cases } from '../../cases/index.js'
import { prelims } from '../../prelims/index.js'

export default function Header({ theme, toggleTheme }) {
  const navigate = useNavigate()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className="site-logo__main">The Beginner's Playbook</span>
          <span className="site-logo__sub">Real Business Problems — Explained Step by Step</span>
        </div>

        <div className="header-actions">
          <span className="case-count-badge">{prelims.length} Foundation · {cases.length} {cases.length === 1 ? 'Case' : 'Cases'}</span>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '◐' : '○'}
          </button>
        </div>
      </div>
    </header>
  )
}
