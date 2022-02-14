export interface CommonItem {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export interface CommonList<T> {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

export interface CommonContentsQuery {
  draftKey?: string
  limit?: number
  orders?: string
  q?: string
  fields?: string
  ids?: string
  filters?: string
  depth?: number
}

export type CommonContentQuery = Pick<
  CommonContentsQuery,
  'draftKey' | 'fields' | 'depth'
>
