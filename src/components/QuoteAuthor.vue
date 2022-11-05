<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  author?: string
  genre?: string
}>()

const authorUrl = computed(() => {
  return `/author/${props.author}`
})
</script>

<template>
  <div>
    <h2 v-if="author">
      <RouterLink :to="authorUrl"> - {{ author }} </RouterLink>
    </h2>
    <h3>{{ genre }}</h3>
  </div>
</template>

<style scoped lang="scss">
h2,
h3 {
  text-align: end;
}

h2 {
  font-size: 1.25em;
}

h3 {
  font-size: 1em;
  font-weight: normal;
}

$time: 1s;
.quote-enter-active {
  & div {
    animation: fade $time reverse;
  }
}

.quote-leave-active {
  & div {
    animation: fade $time;
  }
}

.quote-enter-from,
.quote-leave-to {
  & div {
    opacity: 0;
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
