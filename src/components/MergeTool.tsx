import { useState } from 'react'
import { VideoUploader } from './VideoUploader'
import { VideoPlayer } from './VideoPlayer'

interface Props {
  onMerge: (files: File[]) => void
  processing: boolean
}

export function MergeTool({ onMerge, processing }: Props) {
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [previewIndex, setPreviewIndex] = useState(0)

  const addFile = (file: File) => {
    setFiles((prev) => [...prev, file])
    setPreviews((prev) => [...prev, URL.createObjectURL(file)])
  }

  const removeFile = (index: number) => {
    URL.revokeObjectURL(previews[index])
    setFiles((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
    if (previewIndex >= index && previewIndex > 0) setPreviewIndex(previewIndex - 1)
  }

  const moveUp = (index: number) => {
    if (index === 0) return
    const newFiles = [...files]
    const newPreviews = [...previews]
    ;[newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]]
    ;[newPreviews[index - 1], newPreviews[index]] = [newPreviews[index], newPreviews[index - 1]]
    setFiles(newFiles)
    setPreviews(newPreviews)
  }

  const moveDown = (index: number) => {
    if (index === files.length - 1) return
    const newFiles = [...files]
    const newPreviews = [...previews]
    ;[newFiles[index + 1], newFiles[index]] = [newFiles[index], newFiles[index + 1]]
    ;[newPreviews[index + 1], newPreviews[index]] = [newPreviews[index], newPreviews[index + 1]]
    setFiles(newFiles)
    setPreviews(newPreviews)
  }

  return (
    <div className="tool-panel">
      <h3>Merge Videos</h3>
      <p className="tool-desc">Add multiple videos and merge them into one clip.</p>

      {previews.length > 0 && (
        <div className="merge-preview">
          <VideoPlayer src={previews[previewIndex]} />
        </div>
      )}

      <div className="file-list">
        {files.map((f, i) => (
          <div
            key={i}
            className={`file-item ${i === previewIndex ? 'file-item-active' : ''}`}
            onClick={() => setPreviewIndex(i)}
          >
            <span className="file-index">{i + 1}</span>
            <span className="file-name">{f.name}</span>
            <div className="file-actions">
              <button className="icon-btn" onClick={(e) => { e.stopPropagation(); moveUp(i) }} disabled={i === 0}>&#8593;</button>
              <button className="icon-btn" onClick={(e) => { e.stopPropagation(); moveDown(i) }} disabled={i === files.length - 1}>&#8595;</button>
              <button className="icon-btn icon-btn-danger" onClick={(e) => { e.stopPropagation(); removeFile(i) }}>&#10005;</button>
            </div>
          </div>
        ))}
      </div>

      <VideoUploader onFileSelect={addFile} label="Add Video" />

      <button
        className="btn btn-primary"
        onClick={() => onMerge(files)}
        disabled={processing || files.length < 2}
      >
        {processing ? 'Merging...' : `Merge ${files.length} Videos`}
      </button>
    </div>
  )
}
