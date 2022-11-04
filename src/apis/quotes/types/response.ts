import { Pagination } from './pagination'

export interface QuoteApiResponse<T> {
  statusCode: number
  message: string
  pagination: Pagination
  totalQuotes: number
  data: T[]
}
