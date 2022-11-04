<script setup lang="ts">
import type { Quote } from '@/apis/quotes/types/quote'
import QuoteAuthor from './QuoteAuthor.vue'
import QuoteText from './QuoteText.vue'

defineProps<{
  quote?: Quote
}>()
</script>

<template>
  <article>
    <QuoteText :text="quote?.quoteText" />
    <QuoteAuthor :author="quote?.quoteAuthor" :genre="quote?.quoteGenre" />
  </article>
</template>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
