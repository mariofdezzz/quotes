import type { Quote } from '@/apis/quotes/types/quote'

export interface RandomQuoteState {
  quote?: Quote
  loading: boolean
}
