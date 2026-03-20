import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react'

export interface VideoPlayerHandle {
  getCurrentTime: () => number
  getDuration: () => number
  seekTo: (time: number) => void
}

interface Props {
  src: string
  onTimeUpdate?: (time: number, duration: number) => void
}

export const VideoPlayer = forwardRef<VideoPlayerHandle, Props>(({ src, onTimeUpdate }, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)

  useImperativeHandle(ref, () => ({
    getCurrentTime: () => videoRef.current?.currentTime ?? 0,
    getDuration: () => videoRef.current?.duration ?? 0,
    seekTo: (time: number) => {
      if (videoRef.current) videoRef.current.currentTime = time
    },
  }))

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => setDuration(video.duration)
    const onTime = () => {
      setCurrentTime(video.currentTime)
      onTimeUpdate?.(video.currentTime, video.duration)
    }
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)

    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('timeupdate', onTime)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('timeupdate', onTime)
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
    }
  }, [src, onTimeUpdate])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    playing ? video.pause() : video.play()
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) videoRef.current.currentTime = time
    setCurrentTime(time)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (videoRef.current) videoRef.current.volume = v
  }

  const fmt = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="video-player">
      <video ref={videoRef} src={src} className="video-element" />
      <div className="player-controls">
        <button className="play-btn" onClick={togglePlay}>
          {playing ? '⏸' : '▶'}
        </button>
        <span className="time-display">{fmt(currentTime)} / {fmt(duration)}</span>
        <input
          type="range"
          className="seek-bar"
          min={0}
          max={duration || 1}
          step={0.01}
          value={currentTime}
          onChange={handleSeek}
        />
        <span className="volume-label">&#128266;</span>
        <input
          type="range"
          className="volume-bar"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  )
})

VideoPlayer.displayName = 'VideoPlayer'
