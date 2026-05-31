import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { Role } from '../context/AuthContext'

export default function LoginPage() {
  const { user, login } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [role, setRole] = useState<Role>('Viewer')
  const [error, setError] = useState('')

  if (user) return <Navigate to="/dashboard" replace />

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Please enter a username.')
      return
    }
    login({ username: username.trim(), role })
    navigate('/dashboard')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">MyDashboard</h1>
          <p className="login-subtitle">Sign in to continue</p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError('')
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              id="role"
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button className="login-btn" onClick={handleLogin}>
            Sign In
          </button>
        </div>

        <p className="login-hint">
          No real authentication — select any role to explore the dashboard.
        </p>
      </div>
    </div>
  )
}