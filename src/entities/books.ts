export interface BookAttributes {
    author: string
    cover: string
    dedication: string
    pages: number
    release_date: string
    slug: string
    summary: string
    title: string
    wiki: string
  }

export interface BookData {
    attributes: BookAttributes
    id: string
    links: {
        self: string
    }
    relationships: {
        chapters: {
            data: {
                id: string
                type: string
            }[]
        }
    }
    type: 'book'
}


export interface ResponseData {
    data: BookData[]
    links: Record<string, unknown>
    meta: Record<string, unknown>
  }