
interface Links {
    current: string
    last: string
    next: string
    self: string
}

interface Pagination {
    current: number
    last: number
    next: number
    records: number
}

interface Meta {
    copyright: string
    generated_at: string
    pagination: Pagination
}

export interface ResponseData<T = Record<string, unknown>> {
    attributes: T
    id: string
    links: {
        self: string
    }
    relationships?: Record<string, unknown>
    type: string
}

export interface Response {
    data: ResponseData[]
    links: Links
    meta: Meta
}

export type NullableType<T> = T | null