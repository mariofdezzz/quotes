<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <div id="quote-text">
    <p>
      {{ text }}
    </p>
  </div>
</template>

<style scoped lang="scss">
$boder-size: 0.5rem;

#quote-text {
  position: relative;

  & > p::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $bg;
    // border: 1px solid black;
    top: 0;
    left: calc(-100% + $boder-size);
    border-right: $boder-size solid $secondary;
  }
}

p {
  border-left: $boder-size solid $secondary;
  padding: 0 3rem;
  font-size: 1.65rem;
}

$time: 1s;
.quote-enter-active {
  & > #quote-text {
    animation: quote $time reverse;

    & > p::before {
      animation: quote-slide $time reverse;
    }
  }
}

.quote-leave-active {
  & > #quote-text {
    animation: quote $time;

    & > p::before {
      animation: quote-slide $time;
    }
  }
}

.quote-enter-from,
.quote-leave-to {
  & > #quote-text {
    opacity: 0;
  }
}

@keyframes quote {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes quote-slide {
  0% {
    left: calc(-100% + $boder-size);
    border-right-color: $secondary;
  }
  50% {
    left: 0;
    border-right-color: $secondary;
  }
  100% {
    left: 0;
    border-right-color: transparent;
  }
}

@media (min-width: 768px) {
  p {
    font-size: 2.25rem;
  }
}
</style>
