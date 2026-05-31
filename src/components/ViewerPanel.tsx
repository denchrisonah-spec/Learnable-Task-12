const REPORTS = [
  { name: 'Q1 Sales Report',      status: 'Approved',  date: '2024-03-31' },
  { name: 'User Growth Analysis', status: 'Pending',   date: '2024-04-15' },
  { name: 'Infrastructure Audit', status: 'Rejected',  date: '2024-04-22' },
]

export default function ViewerPanel() {
  return (
    <div className="panel panel-viewer">
      <h2 className="panel-heading">Reports (Read-Only)</h2>
      <p className="panel-description">
        View submitted reports and their current approval status.
      </p>
      <div className="table-wrapper">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {REPORTS.map((report) => (
              <tr key={report.name}>
                <td>{report.name}</td>
                <td>
                  <span className={`status-badge status-${report.status.toLowerCase()}`}>
                    {report.status}
                  </span>
                </td>
                <td>{report.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}