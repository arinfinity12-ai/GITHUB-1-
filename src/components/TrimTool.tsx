import { useState, useRef } from 'react'
import { VideoPlayer } from './VideoPlayer'
import type { VideoPlayerHandle } from './VideoPlayer'

interface Props {
  file: File
  srcUrl: string
  onTrim: (start: number, end: number) => void
  processing: boolean
}

export function TrimTool({ file, srcUrl, onTrim, processing }: Props) {
  const playerRef = useRef<VideoPlayerHandle>(null)
  const [duration, setDuration] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)

  const handleTimeUpdate = (_: number, dur: number) => {
    if (dur && !duration) {
      setDuration(dur)
      setEndTime(dur)
    }
  }

  const setStart = () => {
    const t = playerRef.current?.getCurrentTime() ?? 0
    setStartTime(Math.min(t, endTime - 0.1))
  }

  const setEnd = () => {
    const t = playerRef.current?.getCurrentTime() ?? 0
    setEndTime(Math.max(t, startTime + 0.1))
  }

  const fmt = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = (s % 60).toFixed(2).padStart(5, '0')
    return `${m}:${sec}`
  }

  const startPct = duration ? (startTime / duration) * 100 : 0
  const endPct = duration ? (endTime / duration) * 100 : 100

  return (
    <div className="tool-panel">
      <h3>Trim Video</h3>
      <p className="tool-desc">Set in/out points to trim your video clip.</p>
      <VideoPlayer ref={playerRef} src={srcUrl} onTimeUpdate={handleTimeUpdate} />

      <div className="trim-range-container">
        <div className="trim-bar">
          <div
            className="trim-selection"
            style={{ left: `${startPct}%`, width: `${endPct - startPct}%` }}
          />
          <div className="trim-handle trim-handle-start" style={{ left: `${startPct}%` }} />
          <div className="trim-handle trim-handle-end" style={{ left: `${endPct}%` }} />
        </div>
        <div className="trim-labels">
          <span>0:00</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>

      <div className="trim-controls">
        <div className="trim-point">
          <button className="btn btn-secondary" onClick={setStart} disabled={processing}>
            Set In Point
          </button>
          <span className="time-badge">{fmt(startTime)}</span>
        </div>
        <div className="trim-point">
          <button className="btn btn-secondary" onClick={setEnd} disabled={processing}>
            Set Out Point
          </button>
          <span className="time-badge">{fmt(endTime)}</span>
        </div>
      </div>

      <div className="trim-info">
        Duration after trim: <strong>{fmt(endTime - startTime)}</strong>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => onTrim(startTime, endTime)}
        disabled={processing || !file || endTime <= startTime}
      >
        {processing ? 'Processing...' : 'Trim Video'}
      </button>
    </div>
  )
}
