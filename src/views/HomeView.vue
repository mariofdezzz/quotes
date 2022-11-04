<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useQuotesStore } from '@/stores/quotes'
import Quote from '@/components/Quote.vue'

const quotesStore = useQuotesStore()
const quote = storeToRefs(quotesStore).random

onMounted(() => {
  if (quote?.value === undefined) quotesStore.getRandom()
})
</script>

<template>
  <section>
    <Quote :quote="quote" />
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
