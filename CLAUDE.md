# CLAUDE.md — VideoEdit

## Progetto
VideoEdit è un editor video in-browser, parte di Atlas AI OS.
Nessun backend: tutta la logica di elaborazione gira nel browser via WebAssembly.

## Stack tecnico
- **Framework**: React 19 + TypeScript 5
- **Build tool**: Vite 8
- **Elaborazione video**: `@ffmpeg/ffmpeg` 0.12 (FFmpeg.wasm caricato da CDN unpkg)
- **Nessun backend**: tutto client-side, deploy statico su Vercel

## Architettura

### Hook principale
- `src/hooks/useFFmpeg.ts` — wrapper su FFmpeg.wasm; lazy load al primo utilizzo; espone:
  - `load()` — carica FFmpeg dal CDN (chiamare prima di qualsiasi operazione)
  - `trimVideo(file, start, end)` — taglia il video tra i secondi indicati
  - `mergeVideos(files[])` — concatena più video con ffmpeg concat demuxer
  - `extractAudio(file)` — estrae traccia audio come MP3
  - `convertFormat(file, format)` — converte in mp4 / webm / avi / mov

### Componenti
- `src/App.tsx` — orchestratore centrale; gestisce stato globale: file selezionato, URL oggetto, risultato, errori, progress
- `src/components/TrimTool.tsx` — timeline interattiva per selezionare il range di taglio
- `src/components/MergeTool.tsx` — caricamento multiplo file + ordinamento per la fusione
- `src/components/ConvertTool.tsx` — selezione formato di output
- `src/components/ExtractAudioTool.tsx` — estrazione audio one-click
- `src/components/VideoUploader.tsx` — drag-and-drop per caricamento file
- `src/components/VideoPlayer.tsx` — player con seek bar, volume, callback per aggiornamento tempo
- `src/components/ProgressOverlay.tsx` — overlay modale con progress bar e log FFmpeg

## Comandi di sviluppo
```bash
npm run dev      # server di sviluppo con HMR
npm run build    # build produzione (tsc + vite build)
npm run lint     # ESLint
npm run preview  # anteprima build produzione
```

## Vincoli tecnici
- **Header COOP/COEP obbligatori**: FFmpeg.wasm usa `SharedArrayBuffer` che richiede
  `Cross-Origin-Opener-Policy: same-origin` e `Cross-Origin-Embedder-Policy: require-corp`.
  Questi header sono già configurati in `vite.config.ts` per lo sviluppo locale.
  In produzione (Vercel) vanno aggiunti tramite `vercel.json`.
- **FFmpeg lazy load**: il file WASM (~32 MB) viene scaricato solo al primo utilizzo dello strumento.
  Non importare FFmpeg direttamente nei componenti — passare sempre attraverso `useFFmpeg`.
- **ObjectURL**: ogni URL creato con `URL.createObjectURL()` va revocato con `URL.revokeObjectURL()`
  quando non più necessario per evitare memory leak.

## Pattern da seguire
1. Chiamare sempre `ensureLoaded()` in `App.tsx` prima di qualsiasi operazione FFmpeg.
2. Wrappare ogni chiamata FFmpeg in `try/catch`; propagare l'errore come stringa in `setError(String(e))`.
3. Mostrare l'errore tramite il banner `.error-banner` già presente in `App.tsx`.
4. Non aggiungere dipendenze npm senza necessità reale.
5. Ogni nuova funzione va commentata in italiano.

## Regole Atlas (ereditate dal CLAUDE.md globale)
- Commenta ogni funzione in italiano
- Nessuna dipendenza inutile
- Sempre error handling
- Output pronti per produzione, non demo
- Design System: Navy `#1a1a2e` + Oro `#A8843A`, font Playfair Display (titoli) + Inter (corpo)
- Mobile-first
