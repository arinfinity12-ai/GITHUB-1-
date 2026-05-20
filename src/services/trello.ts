const BASE = 'https://api.trello.com/1'

export interface TrelloBoard {
  id: string
  name: string
  url: string
  prefs: { backgroundTopColor: string }
}

export interface TrelloList {
  id: string
  name: string
  idBoard: string
}

export interface TrelloLabel {
  id: string
  name: string
  color: string
}

export interface TrelloCard {
  id: string
  name: string
  desc: string
  url: string
  idList: string
  due: string | null
  labels: TrelloLabel[]
}

export class TrelloAPI {
  private key: string
  private token: string

  constructor(key: string, token: string) {
    this.key = key
    this.token = token
  }

  private async call<T>(path: string, options?: RequestInit): Promise<T> {
    const sep = path.includes('?') ? '&' : '?'
    const url = `${BASE}${path}${sep}key=${this.key}&token=${this.token}`
    const res = await fetch(url, options)
    if (!res.ok) throw new Error(`Trello ${res.status}: ${res.statusText}`)
    return res.json() as Promise<T>
  }

  getBoards() {
    return this.call<TrelloBoard[]>(
      '/members/me/boards?filter=open&fields=name,url,prefs'
    )
  }

  getLists(boardId: string) {
    return this.call<TrelloList[]>(`/boards/${boardId}/lists?filter=open`)
  }

  getCards(boardId: string) {
    return this.call<TrelloCard[]>(
      `/boards/${boardId}/cards?fields=name,desc,url,idList,due,labels`
    )
  }

  createCard(listId: string, name: string, desc = '') {
    const body = new URLSearchParams({ idList: listId, name, desc })
    return this.call<TrelloCard>('/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
  }

  attachFile(cardId: string, file: File) {
    const fd = new FormData()
    fd.append('file', file, file.name)
    fd.append('name', file.name)
    return this.call(`/cards/${cardId}/attachments`, { method: 'POST', body: fd })
  }
}

const STORAGE_KEY = 'trello_creds'

export function saveCreds(key: string, token: string) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ key, token }))
}

export function loadCreds(): { key: string; token: string } | null {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try { return JSON.parse(raw) } catch { return null }
}

export function clearCreds() {
  localStorage.removeItem(STORAGE_KEY)
}
