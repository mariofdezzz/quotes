import type { Quote } from '@/apis/quotes/types/quote'
import type { useRandomQuoteStore } from '../random'

export interface QuoteState {
  quotes: Quote[]
  random: ReturnType<typeof useRandomQuoteStore>
  loading: boolean
  page?: number
  author?: string
  totalPages?: number
}
