export default function AdminPanel() {
    return (
        <div className="panel panel-admin">
            <h2 className="panel-heading">Admin Controls</h2>
            <p className="panel-description">
                Manage your application settings, users, and system activity.
            </p>
            <div className="admin-actions">
                <button className="admin-btn">
                    <span className="admin-btn-icon">👥</span>
                    Manage Users
                </button>
                <button className="admin-btn">
                    <span className="admin-btn-icon">📋</span>
                    View Logs
                </button>
                <button className="admin-btn">
                    <span className="admin-btn-icon">⚙️</span>
                    System Settings
                </button>
            </div>
        </div>
    )
}