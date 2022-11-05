<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useQuotesStore } from '@/stores/quotes'
import Quote from '@/components/Quote.vue'

const quotesStore = useQuotesStore()
const quote = storeToRefs(quotesStore.random).quote

onMounted(() => {
  if (quote?.value === undefined) quotesStore.random.get()
})
</script>

<template>
  <section>
    <Transition name="quote" mode="out-in">
      <Quote :key="quote?.quoteText" :quote="quote" />
    </Transition>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>

<style>
.quote-enter-active,
.quote-leave-active {
  transition: opacity 1s;
}
</style>
