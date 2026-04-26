interface Props {
  progress: number
  log: string
  label: string
}

export function ProgressOverlay({ progress, log, label }: Props) {
  return (
    <div className="progress-overlay">
      <div className="progress-card">
        <div className="progress-spinner" />
        <h3 className="progress-label">{label}</h3>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-pct">{progress}%</span>
        {log && <p className="progress-log">{log}</p>}
      </div>
    </div>
  )
}
