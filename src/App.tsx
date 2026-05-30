import { useState, useCallback } from 'react'
import { VideoUploader } from './components/VideoUploader'
import { TrimTool } from './components/TrimTool'
import { MergeTool } from './components/MergeTool'
import { ConvertTool } from './components/ConvertTool'
import { ExtractAudioTool } from './components/ExtractAudioTool'
import { ProgressOverlay } from './components/ProgressOverlay'
import { MarketingChat } from './components/MarketingChat'
import { useFFmpeg } from './hooks/useFFmpeg'
import './App.css'

type Tool = 'trim' | 'merge' | 'convert' | 'extract' | 'marketing'

const tools: { id: Tool; label: string; icon: string; needsFile: boolean }[] = [
  { id: 'trim', label: 'Trim', icon: '✂️', needsFile: true },
  { id: 'merge', label: 'Merge', icon: '🔗', needsFile: false },
  { id: 'convert', label: 'Convert', icon: '🔄', needsFile: true },
  { id: 'extract', label: 'Extract Audio', icon: '🎵', needsFile: true },
  { id: 'marketing', label: 'Marketing', icon: '📣', needsFile: false },
]

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export default function App() {
  const [selectedTool, setSelectedTool] = useState<Tool>('trim')
  const [file, setFile] = useState<File | null>(null)
  const [srcUrl, setSrcUrl] = useState<string>('')
  const [processing, setProcessing] = useState(false)
  const [loadingFFmpeg, setLoadingFFmpeg] = useState(false)
  const [resultUrl, setResultUrl] = useState<string>('')
  const [resultBlob, setResultBlob] = useState<Blob | null>(null)
  const [resultFilename, setResultFilename] = useState('')
  const [error, setError] = useState('')

  const { load, loaded, progress, log, trimVideo, mergeVideos, extractAudio, convertFormat } = useFFmpeg()

  const ensureLoaded = async () => {
    if (!loaded) {
      setLoadingFFmpeg(true)
      await load()
      setLoadingFFmpeg(false)
    }
  }

  const handleFileSelect = useCallback((f: File) => {
    if (srcUrl) URL.revokeObjectURL(srcUrl)
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    setFile(f)
    setSrcUrl(URL.createObjectURL(f))
    setResultUrl('')
    setResultBlob(null)
    setError('')
  }, [srcUrl, resultUrl])

  const handleResult = (blob: Blob, filename: string) => {
    if (resultUrl) URL.revokeObjectURL(resultUrl)
    const url = URL.createObjectURL(blob)
    setResultUrl(url)
    setResultBlob(blob)
    setResultFilename(filename)
  }

  const handleTrim = async (start: number, end: number) => {
    if (!file) return
    setError('')
    try {
      await ensureLoaded()
      setProcessing(true)
      const blob = await trimVideo(file, start, end)
      const ext = file.name.split('.').pop() ?? 'mp4'
      handleResult(blob, `trimmed_${file.name.replace(`.${ext}`, '')}.${ext}`)
    } catch (e) {
      setError(String(e))
    } finally {
      setProcessing(false)
    }
  }

  const handleMerge = async (files: File[]) => {
    setError('')
    try {
      await ensureLoaded()
      setProcessing(true)
      const blob = await mergeVideos(files)
      handleResult(blob, 'merged_video.mp4')
    } catch (e) {
      setError(String(e))
    } finally {
      setProcessing(false)
    }
  }

  const handleConvert = async (format: 'mp4' | 'webm' | 'avi' | 'mov') => {
    if (!file) return
    setError('')
    try {
      await ensureLoaded()
      setProcessing(true)
      const blob = await convertFormat(file, format)
      const base = file.name.replace(/\.[^.]+$/, '')
      handleResult(blob, `${base}.${format}`)
    } catch (e) {
      setError(String(e))
    } finally {
      setProcessing(false)
    }
  }

  const handleExtract = async () => {
    if (!file) return
    setError('')
    try {
      await ensureLoaded()
      setProcessing(true)
      const blob = await extractAudio(file)
      const base = file.name.replace(/\.[^.]+$/, '')
      handleResult(blob, `${base}_audio.mp3`)
    } catch (e) {
      setError(String(e))
    } finally {
      setProcessing(false)
    }
  }

  const currentTool = tools.find((t) => t.id === selectedTool)!

  return (
    <div className="app">
      {(processing || loadingFFmpeg) && (
        <ProgressOverlay
          progress={progress}
          log={log}
          label={loadingFFmpeg ? 'Loading FFmpeg...' : 'Processing video...'}
        />
      )}

      <header className="app-header">
        <div className="header-brand">
          <span className="brand-icon">&#127909;</span>
          <span className="brand-name">VideoEdit</span>
        </div>
        <p className="header-tagline">In-browser video editing powered by FFmpeg</p>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <nav className="tool-nav">
            {tools.map((t) => (
              <button
                key={t.id}
                className={`tool-btn ${selectedTool === t.id ? 'tool-btn-active' : ''}`}
                onClick={() => {
                  setSelectedTool(t.id)
                  setResultUrl('')
                  setResultBlob(null)
                  setError('')
                }}
              >
                <span className="tool-btn-icon">{t.icon}</span>
                <span className="tool-btn-label">{t.label}</span>
              </button>
            ))}
          </nav>

          {file && (
            <div className="sidebar-file-info">
              <p className="file-info-title">Current file</p>
              <p className="file-info-name" title={file.name}>{file.name}</p>
              <p className="file-info-size">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  URL.revokeObjectURL(srcUrl)
                  setFile(null)
                  setSrcUrl('')
                  setResultUrl('')
                  setResultBlob(null)
                }}
              >
                Clear
              </button>
            </div>
          )}
        </aside>

        <main className="main-content">
          {error && (
            <div className="error-banner">
              <strong>Error:</strong> {error}
            </div>
          )}

          {selectedTool === 'marketing' ? (
            <MarketingChat />
          ) : currentTool.needsFile && !file ? (
            <div className="upload-gate">
              <VideoUploader onFileSelect={handleFileSelect} />
            </div>
          ) : (
            <>
              {selectedTool === 'trim' && file && srcUrl && (
                <TrimTool file={file} srcUrl={srcUrl} onTrim={handleTrim} processing={processing} />
              )}
              {selectedTool === 'merge' && (
                <MergeTool onMerge={handleMerge} processing={processing} />
              )}
              {selectedTool === 'convert' && file && srcUrl && (
                <ConvertTool file={file} srcUrl={srcUrl} onConvert={handleConvert} processing={processing} />
              )}
              {selectedTool === 'extract' && file && srcUrl && (
                <ExtractAudioTool file={file} srcUrl={srcUrl} onExtract={handleExtract} processing={processing} />
              )}
            </>
          )}

          {resultUrl && resultBlob && (
            <div className="result-panel">
              <h3 className="result-title">Result Ready</h3>
              {resultBlob.type.startsWith('video/') && (
                <video src={resultUrl} controls className="result-video" />
              )}
              {resultBlob.type.startsWith('audio/') && (
                <audio src={resultUrl} controls className="result-audio" />
              )}
              <button
                className="btn btn-success"
                onClick={() => downloadBlob(resultBlob, resultFilename)}
              >
                &#8681; Download {resultFilename}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
