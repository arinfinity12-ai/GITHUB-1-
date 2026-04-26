import { useRef } from 'react'
import type { DragEvent } from 'react'

interface Props {
  onFileSelect: (file: File) => void
  label?: string
  accept?: string
}

export function VideoUploader({ onFileSelect, label = 'Upload Video', accept = 'video/*' }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (!file.type.startsWith('video/')) {
      alert('Please select a valid video file.')
      return
    }
    onFileSelect(file)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      className="uploader"
      onClick={() => inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
          e.target.value = ''
        }}
      />
      <div className="uploader-icon">&#127909;</div>
      <p className="uploader-label">{label}</p>
      <p className="uploader-hint">Click or drag &amp; drop a video file here</p>
    </div>
  )
}
