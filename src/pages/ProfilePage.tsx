import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'

export default function ProfilePage() {
  const { user } = useAuth()

  const roleBadgeClass =
    user?.role === 'Admin'
      ? 'role-badge role-admin'
      : user?.role === 'Editor'
      ? 'role-badge role-editor'
      : 'role-badge role-viewer'

  return (
    <div className="page">
      <Navbar />
      <main className="page-content">
        <div className="page-header">
          <h1 className="page-title">Profile</h1>
          <p className="page-subtitle">Your account details.</p>
        </div>

        <div className="profile-card">
          <div className="profile-avatar">
            {user?.username.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user?.username}</h2>
            <span className={roleBadgeClass}>{user?.role}</span>
          </div>
          <div className="profile-details">
            <div className="profile-detail-row">
              <span className="detail-label">Username</span>
              <span className="detail-value">{user?.username}</span>
            </div>
            <div className="profile-detail-row">
              <span className="detail-label">Role</span>
              <span className="detail-value">{user?.role}</span>
            </div>
            <div className="profile-detail-row">
              <span className="detail-label">Access Level</span>
              <span className="detail-value">
                {user?.role === 'Admin'
                  ? 'Full Access'
                  : user?.role === 'Editor'
                  ? 'Read & Write'
                  : 'Read Only'}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}