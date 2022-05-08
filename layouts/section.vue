<template>
  <div class="slidev-layout section">
    <div
      class="flex flex-col justify-center h-full z-2 max-w-[750px] pl-5 text-center"
    >
      <div class="mb-4 text-5xl relative">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .slidev-layout.section {
    & ::v-deep(h1) {
      @apply text-5xl light:text-vblue;
    }
  }

  [data-quote-container]::before {
    /* prettier-ignore */
    content: ' \ „ ';
    @apply text-8xl absolute -bottom-3 -left-12 font-serif;
  }
</style>
