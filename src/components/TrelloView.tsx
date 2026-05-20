import { useState, useEffect } from 'react'
import { TrelloAPI, saveCreds, loadCreds, clearCreds } from '../services/trello'
import type { TrelloBoard, TrelloList, TrelloCard } from '../services/trello'

interface Props {
  resultBlob?: Blob | null
  resultFilename?: string
}

type View = 'boards' | 'board'

export function TrelloView({ resultBlob, resultFilename }: Props) {
  const [apiKey, setApiKey] = useState('')
  const [token, setToken] = useState('')
  const [api, setApi] = useState<TrelloAPI | null>(null)
  const [view, setView] = useState<View>('boards')
  const [boards, setBoards] = useState<TrelloBoard[]>([])
  const [selectedBoard, setSelectedBoard] = useState<TrelloBoard | null>(null)
  const [lists, setLists] = useState<TrelloList[]>([])
  const [cards, setCards] = useState<TrelloCard[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [newCardName, setNewCardName] = useState('')
  const [newCardList, setNewCardList] = useState('')
  const [saving, setSaving] = useState(false)
  const [savedMsg, setSavedMsg] = useState('')

  useEffect(() => {
    const creds = loadCreds()
    if (creds) connect(creds.key, creds.token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function connect(key: string, tok: string) {
    const trello = new TrelloAPI(key, tok)
    setLoading(true)
    setError('')
    try {
      const bs = await trello.getBoards()
      saveCreds(key, tok)
      setApi(trello)
      setBoards(bs)
    } catch {
      setError('Credenziali non valide. Controlla API Key e Token.')
    } finally {
      setLoading(false)
    }
  }

  async function openBoard(board: TrelloBoard) {
    if (!api) return
    setSelectedBoard(board)
    setView('board')
    setLoading(true)
    setError('')
    try {
      const [ls, cs] = await Promise.all([api.getLists(board.id), api.getCards(board.id)])
      setLists(ls)
      setCards(cs)
    } catch {
      setError('Errore nel caricamento della board.')
    } finally {
      setLoading(false)
    }
  }

  async function handleSaveCard(e: React.FormEvent) {
    e.preventDefault()
    if (!api || !newCardList || !newCardName) return
    setSaving(true)
    setError('')
    setSavedMsg('')
    try {
      const card = await api.createCard(
        newCardList,
        newCardName,
        resultFilename ? `Video: ${resultFilename}` : ''
      )
      if (resultBlob && resultFilename) {
        const file = new File([resultBlob], resultFilename, { type: resultBlob.type })
        await api.attachFile(card.id, file)
      }
      setSavedMsg(`Card "${newCardName}" creata con successo!`)
      setNewCardName('')
      if (selectedBoard) {
        const cs = await api.getCards(selectedBoard.id)
        setCards(cs)
      }
    } catch {
      setError('Errore nella creazione della card.')
    } finally {
      setSaving(false)
    }
  }

  function disconnect() {
    clearCreds()
    setApi(null)
    setBoards([])
    setSelectedBoard(null)
    setLists([])
    setCards([])
    setView('boards')
    setApiKey('')
    setToken('')
  }

  if (!api) {
    return (
      <div className="trello-config">
        <div className="trello-config-icon">📋</div>
        <h2 className="trello-config-title">Connetti Trello</h2>
        <p className="trello-config-hint">
          Inserisci le tue credenziali Trello per accedere alle board.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); connect(apiKey, token) }} className="trello-form">
          <div className="trello-field">
            <label className="trello-label">API Key</label>
            <input
              className="trello-input"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="La tua Trello API Key"
              required
            />
          </div>
          <div className="trello-field">
            <label className="trello-label">Token</label>
            <input
              className="trello-input"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Il tuo Trello Token"
              required
            />
          </div>
          {error && <p className="trello-error">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Connessione…' : 'Connetti'}
          </button>
        </form>
      </div>
    )
  }

  if (view === 'boards') {
    return (
      <div className="trello-boards-view">
        <div className="trello-header">
          <h2 className="trello-section-title">📋 Le tue Board</h2>
          <button className="btn btn-ghost btn-sm" onClick={disconnect}>Disconnetti</button>
        </div>
        {loading && <p className="trello-loading">Caricamento…</p>}
        {error && <p className="trello-error">{error}</p>}
        <div className="boards-grid">
          {boards.map((b) => (
            <button key={b.id} className="board-card" onClick={() => openBoard(b)}>
              <span className="board-card-icon">📌</span>
              <span className="board-card-name">{b.name}</span>
              <span className="board-card-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const cardsByList = lists.reduce<Record<string, TrelloCard[]>>((acc, l) => {
    acc[l.id] = cards.filter((c) => c.idList === l.id)
    return acc
  }, {})

  return (
    <div className="trello-board-view">
      <div className="trello-header">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('boards')}>
          ← Board
        </button>
        <h2 className="trello-section-title">{selectedBoard?.name}</h2>
      </div>

      {loading && <p className="trello-loading">Caricamento…</p>}
      {error && <p className="trello-error">{error}</p>}

      {resultBlob && (
        <div className="trello-attach-panel">
          <h3 className="trello-attach-title">
            💾 Salva video su Trello
          </h3>
          <p className="trello-attach-hint">
            File: <strong>{resultFilename}</strong>
          </p>
          <form onSubmit={handleSaveCard} className="trello-card-form">
            <input
              className="trello-input"
              value={newCardName}
              onChange={(e) => setNewCardName(e.target.value)}
              placeholder="Nome della card"
              required
            />
            <select
              className="trello-select"
              value={newCardList}
              onChange={(e) => setNewCardList(e.target.value)}
              required
            >
              <option value="">Seleziona lista…</option>
              {lists.map((l) => (
                <option key={l.id} value={l.id}>{l.name}</option>
              ))}
            </select>
            <button type="submit" className="btn btn-trello" disabled={saving}>
              {saving ? 'Creazione…' : '+ Crea Card con allegato'}
            </button>
          </form>
          {savedMsg && <p className="trello-success">{savedMsg}</p>}
        </div>
      )}

      <div className="trello-lists">
        {lists.map((list) => (
          <div key={list.id} className="trello-list">
            <h3 className="trello-list-title">{list.name}</h3>
            <div className="trello-list-cards">
              {(cardsByList[list.id] ?? []).map((card) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trello-card-item"
                >
                  <span className="trello-card-name">{card.name}</span>
                  {card.labels.length > 0 && (
                    <div className="trello-card-labels">
                      {card.labels.map((lbl) => (
                        <span
                          key={lbl.id}
                          className="trello-label-chip"
                          style={{ background: labelColor(lbl.color) }}
                        >
                          {lbl.name || lbl.color}
                        </span>
                      ))}
                    </div>
                  )}
                  {card.due && (
                    <span className="trello-card-due">
                      📅 {new Date(card.due).toLocaleDateString('it-IT')}
                    </span>
                  )}
                </a>
              ))}
              {(cardsByList[list.id] ?? []).length === 0 && (
                <p className="trello-list-empty">Nessuna card</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function labelColor(color: string): string {
  const map: Record<string, string> = {
    green: '#1f845a', yellow: '#946f00', orange: '#c9530f',
    red: '#ae2e24', purple: '#6e5dc6', blue: '#0055cc',
    sky: '#0c66e4', lime: '#4c6b1f', pink: '#943d73', black: '#44546f',
  }
  return map[color] ?? '#44546f'
}
