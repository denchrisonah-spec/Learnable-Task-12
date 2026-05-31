import { useState } from 'react'
import Navbar from '../components/Navbar'

interface Toggle {
  id: string
  label: string
  description: string
  enabled: boolean
}

const INITIAL_TOGGLES: Toggle[] = [
  {
    id: 'notifications',
    label: 'Enable Notifications',
    description: 'Receive alerts for system events and user activity.',
    enabled: true,
  },
  {
    id: 'darkmode',
    label: 'Dark Mode',
    description: 'Switch the interface to a dark colour scheme.',
    enabled: false,
  },
  {
    id: 'maintenance',
    label: 'Maintenance Mode',
    description: 'Put the app in maintenance mode for all non-admin users.',
    enabled: false,
  },
  {
    id: 'audit',
    label: 'Audit Logging',
    description: 'Log all admin actions for compliance tracking.',
    enabled: true,
  },
]

export default function SettingsPage() {
  const [toggles, setToggles] = useState<Toggle[]>(INITIAL_TOGGLES)

  const handleToggle = (id: string) => {
    setToggles((prev) =>
      prev.map((t) => (t.id === id ? { ...t, enabled: !t.enabled } : t))
    )
  }

  return (
    <div className="page">
      <Navbar />
      <main className="page-content">
        <div className="page-header">
          <h1 className="page-title">Admin Settings</h1>
          <p className="page-subtitle">
            Manage global application settings. Only admins can access this page.
          </p>
        </div>

        <div className="panel">
          <h2 className="panel-heading">Preferences</h2>
          <p className="panel-description">
            Toggle features and system behaviours below.
          </p>
          <div className="settings-list">
            {toggles.map((toggle) => (
              <div key={toggle.id} className="settings-row">
                <div className="settings-text">
                  <span className="settings-label">{toggle.label}</span>
                  <span className="settings-description">{toggle.description}</span>
                </div>
                <button
                  className={`toggle-btn ${toggle.enabled ? 'toggle-on' : 'toggle-off'}`}
                  onClick={() => handleToggle(toggle.id)}
                  aria-pressed={toggle.enabled}
                >
                  <span className="toggle-thumb" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}