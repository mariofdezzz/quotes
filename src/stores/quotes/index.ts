import { QuotesApi } from '@/apis'
import type { GetParams } from '@/apis/quotes/types/getParams'
import type { Quote } from '@/apis/quotes/types/quote'
import { defineStore } from 'pinia'
import { useRandomQuoteStore } from './random'
import type { QuoteState } from './types/quoteState'

const api = new QuotesApi()

export const useQuotesStore = defineStore('quotes', {
  state: (): QuoteState => ({
    quotes: [],
    random: useRandomQuoteStore(),
    loading: false,
  }),
  actions: {
    async get({ author }: GetParams): Promise<Quote[]> {
      this.loading = true

      const { data: response } = await api.get({ author })
      const quotes = response.data

      this.loading = false
      this.quotes = quotes
      return quotes
    },
  },
})
