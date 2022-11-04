<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <p>
    {{ text }}
  </p>
</template>

<style scoped lang="scss">
p {
  border-left: 0.5rem solid $secondary;
  padding: 0 3rem;
  font-size: 1.65rem;
}

@media (min-width: 768px) {
  p {
    font-size: 2.25rem;
  }
}
</style>
