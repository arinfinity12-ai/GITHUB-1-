import { useState, useRef, useCallback } from 'react'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

export function useFFmpeg() {
  const ffmpegRef = useRef<FFmpeg | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [log, setLog] = useState('')

  const load = useCallback(async () => {
    if (loaded || loading) return
    setLoading(true)
    const ffmpeg = new FFmpeg()
    ffmpegRef.current = ffmpeg

    ffmpeg.on('progress', ({ progress: p }) => {
      setProgress(Math.round(p * 100))
    })

    ffmpeg.on('log', ({ message }) => {
      setLog(message)
    })

    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    })

    setLoaded(true)
    setLoading(false)
  }, [loaded, loading])

  const trimVideo = useCallback(
    async (file: File, startTime: number, endTime: number): Promise<Blob> => {
      if (!ffmpegRef.current || !loaded) throw new Error('FFmpeg not loaded')
      const ffmpeg = ffmpegRef.current

      await ffmpeg.writeFile('input.mp4', await fetchFile(file))
      await ffmpeg.exec([
        '-i', 'input.mp4',
        '-ss', String(startTime),
        '-to', String(endTime),
        '-c', 'copy',
        'output.mp4',
      ])

      const data = await ffmpeg.readFile('output.mp4') as unknown as Uint8Array<ArrayBuffer>
      await ffmpeg.deleteFile('input.mp4')
      await ffmpeg.deleteFile('output.mp4')

      return new Blob([data], { type: 'video/mp4' })
    },
    [loaded]
  )

  const mergeVideos = useCallback(
    async (files: File[]): Promise<Blob> => {
      if (!ffmpegRef.current || !loaded) throw new Error('FFmpeg not loaded')
      const ffmpeg = ffmpegRef.current

      const listLines: string[] = []
      for (let i = 0; i < files.length; i++) {
        const name = `input${i}.mp4`
        await ffmpeg.writeFile(name, await fetchFile(files[i]))
        listLines.push(`file '${name}'`)
      }

      const listContent = listLines.join('\n')
      await ffmpeg.writeFile('list.txt', listContent)

      await ffmpeg.exec([
        '-f', 'concat',
        '-safe', '0',
        '-i', 'list.txt',
        '-c', 'copy',
        'merged.mp4',
      ])

      const data = await ffmpeg.readFile('merged.mp4') as unknown as Uint8Array<ArrayBuffer>

      for (let i = 0; i < files.length; i++) {
        await ffmpeg.deleteFile(`input${i}.mp4`)
      }
      await ffmpeg.deleteFile('list.txt')
      await ffmpeg.deleteFile('merged.mp4')

      return new Blob([data], { type: 'video/mp4' })
    },
    [loaded]
  )

  const extractAudio = useCallback(
    async (file: File): Promise<Blob> => {
      if (!ffmpegRef.current || !loaded) throw new Error('FFmpeg not loaded')
      const ffmpeg = ffmpegRef.current

      await ffmpeg.writeFile('input.mp4', await fetchFile(file))
      await ffmpeg.exec([
        '-i', 'input.mp4',
        '-vn',
        '-acodec', 'libmp3lame',
        '-q:a', '2',
        'output.mp3',
      ])

      const data = await ffmpeg.readFile('output.mp3') as unknown as Uint8Array<ArrayBuffer>
      await ffmpeg.deleteFile('input.mp4')
      await ffmpeg.deleteFile('output.mp3')

      return new Blob([data], { type: 'audio/mp3' })
    },
    [loaded]
  )

  const convertFormat = useCallback(
    async (file: File, format: 'mp4' | 'webm' | 'avi' | 'mov'): Promise<Blob> => {
      if (!ffmpegRef.current || !loaded) throw new Error('FFmpeg not loaded')
      const ffmpeg = ffmpegRef.current

      await ffmpeg.writeFile('input_file', await fetchFile(file))
      await ffmpeg.exec([
        '-i', 'input_file',
        `output.${format}`,
      ])

      const data = await ffmpeg.readFile(`output.${format}`) as unknown as Uint8Array<ArrayBuffer>
      await ffmpeg.deleteFile('input_file')
      await ffmpeg.deleteFile(`output.${format}`)

      const mimeMap = {
        mp4: 'video/mp4',
        webm: 'video/webm',
        avi: 'video/avi',
        mov: 'video/quicktime',
      }
      return new Blob([data], { type: mimeMap[format] })
    },
    [loaded]
  )

  return { load, loaded, loading, progress, log, trimVideo, mergeVideos, extractAudio, convertFormat }
}
