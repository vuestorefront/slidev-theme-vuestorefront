<template>
  <div class="slidev-layout section">
    <div class="flex flex-col justify-center h-full z-2 max-w-[750px] pl-5">
      <div data-quote-container class="mb-4 text-5xl relative">
        <slot />
      </div>
      <hr class="w-48 border-t-5 border-b-red-100 mb-2" />
      <p v-if="$attrs.author" class="italic text-xl font-extralight">
        {{ $attrs.author }}
      </p>
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
