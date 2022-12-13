import axios from 'axios'
import type { GetParams } from './types/getParams'
import type { Quote } from './types/quote'
import type { QuoteApiResponse } from './types/response'

const { get } = axios.create({
  baseURL: import.meta.env.VITE_QUOTES_BASE_URL,
})

export class QuotesApi {
  get(params: GetParams) {
    // return get<QuoteApiResponse<Quote>>('/quotes', { params })
    return delay(MOCK.quotes)
  }

  getRandom() {
    // return get<QuoteApiResponse<Quote>>('/quotes/random')

    rqi = rqi === 0 ? 1 : 0
    return delay(MOCK.randomQuotes[rqi])
  }
}

function delay<T>(result: T, ms: number = 500): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms))
}

let rqi = 0 // random quote index
const MOCK: {
  randomQuotes: { data: QuoteApiResponse<Quote> }[]
  quotes: { data: QuoteApiResponse<Quote> }
  // quote
} = {
  randomQuotes: [
    {
      data: {
        statusCode: 200,
        message: 'Random quotes',
        pagination: {
          currentPage: 1,
          nextPage: null,
          totalPages: 1,
        },
        totalQuotes: 1,
        data: [
          {
            _id: '5eb17ab3b69dc744b4e81942',
            quoteText:
              'I think the thing we see is that as people are using video games more, they tend to watch passive TV a bit less. And so using the PC for the Internet, playing video games, is starting to cut into the rather unbelievable amount of time people spend watching TV.',
            quoteAuthor: 'Bill Gates',
            quoteGenre: 'time',
          },
        ],
      },
    },
    {
      data: {
        statusCode: 200,
        message: 'Random quotes',
        pagination: {
          currentPage: 1,
          nextPage: null,
          totalPages: 1,
        },
        totalQuotes: 1,
        data: [
          {
            _id: '5eb17aaeb69dc744b4e72a4a',
            quoteText:
              'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
            quoteAuthor: 'Bill Gates',
            quoteGenre: 'business',
          },
        ],
      },
    },
  ],
  quotes: {
    data: {
      statusCode: 200,
      message: 'Quotes',
      pagination: {
        currentPage: 1,
        nextPage: null,
        totalPages: 1,
      },
      totalQuotes: 4,
      data: [
        {
          _id: '5eb17ab3b69dc744b4e81942',
          quoteText:
            'I think the thing we see is that as people are using video games more, they tend to watch passive TV a bit less. And so using the PC for the Internet, playing video games, is starting to cut into the rather unbelievable amount of time people spend watching TV.',
          quoteAuthor: 'Bill Gates',
          quoteGenre: 'time',
        },

        {
          _id: '5eb17aaeb69dc744b4e72a4a',
          quoteText:
            'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
          quoteAuthor: 'Bill Gates',
          quoteGenre: 'business',
        },
      ],
    },
  },
}
