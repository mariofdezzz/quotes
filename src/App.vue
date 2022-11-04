<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div id="app">
    <TheHeader />

    <main>
      <RouterView></RouterView>
    </main>

    <TheFooter />
  </div>
</template>

<style lang="scss">
body {
  background-color: $bg;
  color: $on-bg;
}

#app {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template: auto 1fr auto / 1fr min($max-text-width, calc(100% - 2rem)) 1fr;
  gap: 2rem 1rem;

  header,
  footer {
    grid-column: 1/4;

    display: grid;
    grid-template-columns: 1fr min($max-text-width, calc(100% - 2rem)) 1fr;
    gap: 2rem 1rem;
    background-color: $bg;
    color: $on-bg;

    .wrapper {
      grid-column: 2;
      padding: 1rem 0;
    }
  }

  main {
    grid-column: 2;
  }
}
</style>
