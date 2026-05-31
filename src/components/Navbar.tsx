import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const roleBadgeClass =
    user?.role === 'Admin'
      ? 'role-badge role-admin'
      : user?.role === 'Editor'
      ? 'role-badge role-editor'
      : 'role-badge role-viewer'

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-app-name">MyDashboard</span>
      </div>

      <div className="navbar-links">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        {user?.role === 'Admin' && (
          <Link to="/settings" className="nav-link">Settings</Link>
        )}
      </div>

      <div className="navbar-user">
        <span className="navbar-username">{user?.username}</span>
        <span className={roleBadgeClass}>{user?.role}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}