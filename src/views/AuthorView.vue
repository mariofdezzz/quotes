<script setup lang="ts">
import QuoteText from '@/components/QuoteText.vue'
import { useQuotesStore } from '@/stores/quotes'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useIntersectionObserver } from '@vueuse/core'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const author = useRoute().params.author as string

const lastQuote = ref(null)
const quotesStore = useQuotesStore()
const { quotes, loading } = storeToRefs(quotesStore)

onMounted(async () => {
  await quotesStore.get({ author })

  useIntersectionObserver(lastQuote, ([{ isIntersecting }]) => {
    if (isIntersecting) quotesStore.get({ author })
  })
})
</script>

<template>
  <section>
    <h1>
      <RouterLink to="/">
        <Icon icon="material-symbols:arrow-back-rounded" />
      </RouterLink>

      <span>
        {{ author }}
      </span>
    </h1>

    <div class="quotes">
      <QuoteText
        v-for="(quote, idx) in quotes"
        :key="idx"
        :text="quote.quoteText"
      />

      <LoadingSpinner v-if="loading" />

      <div ref="lastQuote"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
h1 {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quotes {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5rem 0;
}
</style>
