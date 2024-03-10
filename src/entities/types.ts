
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

export interface Response<T = Record<string, unknown>> {
    data: T extends Array<infer U> ? ResponseData<U>[] : ResponseData<T>;
    links: Links;
    meta: Meta;
}

export type NullableType<T> = T | null