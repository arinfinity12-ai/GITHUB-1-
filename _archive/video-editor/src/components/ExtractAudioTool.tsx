import { VideoPlayer } from './VideoPlayer'

interface Props {
  file: File
  srcUrl: string
  onExtract: () => void
  processing: boolean
}

export function ExtractAudioTool({ file, srcUrl, onExtract, processing }: Props) {
  return (
    <div className="tool-panel">
      <h3>Extract Audio</h3>
      <p className="tool-desc">Extract the audio track from your video as an MP3 file.</p>

      <VideoPlayer src={srcUrl} />

      <div className="extract-info">
        <div className="info-row">
          <span className="info-label">Source file</span>
          <span className="info-value">{file.name}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Output format</span>
          <span className="info-value">MP3 (High Quality)</span>
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={onExtract}
        disabled={processing}
      >
        {processing ? 'Extracting...' : 'Extract Audio as MP3'}
      </button>
    </div>
  )
}
