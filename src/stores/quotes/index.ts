import { QuotesApi } from '@/apis'
import type { GetParams } from '@/apis/quotes/types/getParams'
import type { Quote } from '@/apis/quotes/types/quote'
import { defineStore } from 'pinia'
import type { State } from './types/state'

const api = new QuotesApi()

export const useQuotesStore = defineStore('quotes', {
  state: (): State => ({
    quotes: [],
    random: undefined,
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
    async getRandom() {
      this.loading = true

      const { data: response } = await api.getRandom()
      const quote = response.data[0]

      this.loading = false
      this.random = quote
      return quote
    },
  },
})
