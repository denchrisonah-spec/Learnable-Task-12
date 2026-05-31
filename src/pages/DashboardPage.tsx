import Navbar from '../components/Navbar'
import AdminPanel from '../components/AdminPanel'
import EditorPanel from '../components/EditorPanel'
import ViewerPanel from '../components/ViewerPanel'
import { useAuth } from '../context/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()

  const renderPanel = () => {
    switch (user?.role) {
      case 'Admin':  return <AdminPanel />
      case 'Editor': return <EditorPanel />
      case 'Viewer': return <ViewerPanel />
      default:       return null
    }
  }

  return (
    <div className="page">
      <Navbar />
      <main className="page-content">
        <div className="page-header">
          <h1 className="page-title">Welcome, {user?.username} 👋</h1>
          <p className="page-subtitle">
            You are signed in as <strong>{user?.role}</strong>.
            Here's your personalised workspace.
          </p>
        </div>
        {renderPanel()}
      </main>
    </div>
  )
}