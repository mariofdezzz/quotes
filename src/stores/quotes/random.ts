import { QuotesApi } from '@/apis'
import type { Quote } from '@/apis/quotes/types/quote'
import { defineStore } from 'pinia'
import type { RandomQuoteState } from './types/randomQuoteState'

const api = new QuotesApi()

export const useRandomQuoteStore = defineStore('randomQuote', {
  state: (): RandomQuoteState => ({
    quote: undefined,
    loading: false,
  }),
  actions: {
    async get(): Promise<Quote> {
      this.loading = true

      const { data: response } = await api.getRandom()
      const quote = response.data[0]

      this.loading = false
      this.quote = quote
      return quote
    },
  },
})
