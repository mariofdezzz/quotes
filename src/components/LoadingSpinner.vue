<template>
  <div id="loading-spinner"></div>
</template>

<style scoped lang="scss">
$size: 2rem;
#loading-spinner {
  margin: auto;
  width: $size;
  height: $size;
  border: 3px solid $secondary;
  border-left-color: transparent;
  border-radius: 50%;
  animation: spin 1s cubic-bezier(0.8, 0.4, 0.4, 0.8) infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
