import axios from 'axios'
import type { GetParams } from './types/getParams'
import type { Quote } from './types/quote'
import type { QuoteApiResponse } from './types/response'

const { get } = axios.create({
  baseURL: import.meta.env.VITE_QUOTES_BASE_URL,
})

export class QuotesApi {
  get(params: GetParams) {
    return get<QuoteApiResponse<Quote>>('/quotes', { params })
  }

  getRandom() {
    return get<QuoteApiResponse<Quote>>('/quotes/random')
  }
}
