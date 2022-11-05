<script setup lang="ts">
import { useQuotesStore } from '@/stores/quotes'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const quotesStore = useQuotesStore()
const { loading: loadingQuote } = storeToRefs(quotesStore.random)

function getRandomQuote() {
  if (loadingQuote.value) return

  if (route.name !== 'home') router.push({ name: 'home' })

  quotesStore.random.get()
}
</script>

<template>
  <header>
    <div class="wrapper">
      <button :class="{ loading: loadingQuote }" @click="getRandomQuote">
        <span> random </span>

        <Icon icon="material-symbols:autorenew" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: $bg;
    color: $on-bg;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 0.25rem 0.5rem;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: $on-bg;
    }

    &.loading {
      color: $primary;

      span {
        background: $primary-gradient;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      svg {
        animation: spin 1s linear infinite;
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
