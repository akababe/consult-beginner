import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="not-found">
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-4)', letterSpacing: '0.1em' }}>
        404
      </p>
      <h2>Case Not Found</h2>
      <p>This case doesn't exist yet — but more are on the way.</p>
      <button className="btn-primary" onClick={() => navigate('/')}>
        ← Back to all cases
      </button>
    </div>
  )
}
