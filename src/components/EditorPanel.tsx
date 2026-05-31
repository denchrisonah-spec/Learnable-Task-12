export default function EditorPanel() {
  return (
    <div className="panel panel-editor">
      <h2 className="panel-heading">Content Editor</h2>
      <p className="panel-description">
        Draft and publish content to the platform.
      </p>
      <div className="editor-area">
        <input
          type="text"
          className="editor-title-input"
          placeholder="Enter a title..."
        />
        <textarea
          className="editor-textarea"
          placeholder="Write your content here..."
          rows={8}
        />
        <div className="editor-actions">
          <button className="editor-btn editor-btn-secondary">
            Save Draft
          </button>
          <button className="editor-btn editor-btn-primary">
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}