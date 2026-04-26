import { useState } from 'react'
import { VideoPlayer } from './VideoPlayer'

interface Props {
  file: File
  srcUrl: string
  onConvert: (format: 'mp4' | 'webm' | 'avi' | 'mov') => void
  processing: boolean
}

type Format = 'mp4' | 'webm' | 'avi' | 'mov'

const formats: { value: Format; label: string; desc: string }[] = [
  { value: 'mp4', label: 'MP4', desc: 'Most compatible, H.264' },
  { value: 'webm', label: 'WebM', desc: 'Web-optimized, VP9' },
  { value: 'avi', label: 'AVI', desc: 'Legacy format' },
  { value: 'mov', label: 'MOV', desc: 'Apple QuickTime' },
]

export function ConvertTool({ file, srcUrl, onConvert, processing }: Props) {
  const [selectedFormat, setSelectedFormat] = useState<Format>('mp4')

  const currentExt = file.name.split('.').pop()?.toLowerCase() ?? ''

  return (
    <div className="tool-panel">
      <h3>Convert Format</h3>
      <p className="tool-desc">Convert your video to a different format.</p>

      <VideoPlayer src={srcUrl} />

      <div className="format-grid">
        {formats.map((f) => (
          <button
            key={f.value}
            className={`format-card ${selectedFormat === f.value ? 'format-card-selected' : ''}`}
            onClick={() => setSelectedFormat(f.value)}
            disabled={f.value === currentExt}
          >
            <span className="format-name">{f.label}</span>
            <span className="format-desc">{f.desc}</span>
            {f.value === currentExt && <span className="format-current">Current</span>}
          </button>
        ))}
      </div>

      <div className="convert-info">
        Converting <strong>{file.name}</strong> to <strong>.{selectedFormat}</strong>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => onConvert(selectedFormat)}
        disabled={processing || selectedFormat === currentExt}
      >
        {processing ? 'Converting...' : `Convert to ${selectedFormat.toUpperCase()}`}
      </button>
    </div>
  )
}
