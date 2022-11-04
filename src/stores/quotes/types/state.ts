import type { Quote } from '@/apis/quotes/types/quote'

export interface State {
  quotes: Quote[]
  random?: Quote
  loading: boolean
}
