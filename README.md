# VideoEdit

**Editor video in-browser · FFmpeg.wasm · React 19 · Nessun backend**

Taglia, unisci, converti e estrai audio direttamente nel browser, senza caricare nulla su server.
Tutta l'elaborazione avviene client-side tramite FFmpeg compilato in WebAssembly.

---

## Funzionalità

- **Taglia** — seleziona il range con timeline interattiva ed esporta il clip
- **Unisci** — carica più file e concatenali in un unico video MP4
- **Converti formato** — converte in MP4, WebM, AVI o MOV
- **Estrai audio** — estrae la traccia audio come file MP3

---

## Stack

| Tecnologia | Versione | Ruolo |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5 | Tipizzazione statica |
| Vite | 8 | Build tool + dev server |
| @ffmpeg/ffmpeg | 0.12 | FFmpeg.wasm (elaborazione video) |

Nessun backend. Nessun database. Deploy come sito statico.

---

## Avvio rapido

```bash
npm install
npm run dev
```

Apri `http://localhost:5173`. Il primo utilizzo di uno strumento scarica FFmpeg (~32 MB dal CDN).

---

## Build produzione

```bash
npm run build
npm run preview
```

### Deploy su Vercel

Aggiungere `vercel.json` con gli header obbligatori per WebAssembly:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Cross-Origin-Opener-Policy", "value": "same-origin" },
        { "key": "Cross-Origin-Embedder-Policy", "value": "require-corp" }
      ]
    }
  ]
}
```

---

## Architettura

```
src/
├── hooks/
│   └── useFFmpeg.ts        # Wrapper FFmpeg.wasm: load, trim, merge, extract, convert
├── components/
│   ├── TrimTool.tsx         # Timeline interattiva per il taglio
│   ├── MergeTool.tsx        # Caricamento multiplo + concatenazione
│   ├── ConvertTool.tsx      # Selezione formato di output
│   ├── ExtractAudioTool.tsx # Estrazione audio one-click
│   ├── VideoUploader.tsx    # Drag-and-drop file
│   ├── VideoPlayer.tsx      # Player con seek bar e volume
│   └── ProgressOverlay.tsx  # Overlay progress + log FFmpeg
└── App.tsx                  # Orchestratore: stato globale, routing tool
```

---

## Note browser

- Richiede un **contesto sicuro**: HTTPS in produzione oppure `localhost` in sviluppo.
- Gli header `Cross-Origin-Opener-Policy` e `Cross-Origin-Embedder-Policy` sono necessari
  per abilitare `SharedArrayBuffer`, usato internamente da FFmpeg.wasm.
- Testato su Chrome 120+, Firefox 121+, Safari 17+.

---

## Parte di Atlas AI OS

Progetto di [Riccardo Piombino](https://github.com/arinfinity12-ai) — Atlas AI OS.
