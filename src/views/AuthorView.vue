<script setup lang="ts">
import QuoteText from '@/components/QuoteText.vue'
import { useQuotesStore } from '@/stores/quotes'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const author = useRoute().params.author as string

const quotesStore = useQuotesStore()
const quotes = storeToRefs(quotesStore).quotes

onMounted(() => {
  quotesStore.get({ author })
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
