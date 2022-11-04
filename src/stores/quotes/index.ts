import { QuotesApi } from '@/apis'
import type { GetParams } from '@/apis/quotes/types/getParams'
import type { Quote } from '@/apis/quotes/types/quote'
import { defineStore } from 'pinia'
import { useRandomQuoteStore } from './random'
import type { QuoteState } from './types/quoteState'

const api = new QuotesApi()
const INITIAL_PAGE = 1

export const useQuotesStore = defineStore('quotes', {
  state: (): QuoteState => ({
    quotes: [],
    random: useRandomQuoteStore(),
    loading: false,
    author: undefined,
    page: undefined,
    totalPages: undefined,
  }),
  actions: {
    async get({ author }: GetParams): Promise<Quote[]> {
      if (
        this.page === undefined ||
        author === undefined ||
        author !== this.author
      ) {
        this.author = author
        this.page = INITIAL_PAGE
      }

      if (this.totalPages !== undefined && this.page > this.totalPages)
        return this.quotes

      this.loading = true

      const { data: response } = await api.get({ author, page: this.page++ })

      const quotes = response.data
      this.totalPages = response.pagination.totalPages

      this.loading = false

      if (this.page > 1) this.quotes.push(...quotes)
      else this.quotes = quotes

      return this.quotes
    },
  },
})
