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

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    background: $primary-gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
