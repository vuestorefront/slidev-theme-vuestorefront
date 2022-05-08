<template>
  <div
    class="slidev-layout grid gap-y-3 gap-x-5 default"
    :class="[
      !$attrs.hideTitleRow ? 'grid-rows-[60px,1fr]' : null,
      gridColsSize,
    ]"
  >
    <div v-if="!$attrs.hideTitleRow" :class="$attrs.cols ? 'col-span-2' : null">
      <h1>{{ $attrs.title }}</h1>
    </div>
    <div>
      <slot />
    </div>
    <div v-if="$attrs.cols">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, useAttrs } from 'vue';

  const attrs = useAttrs();

  const gridColsSize = computed(() => {
    if (!attrs.cols) return null;
    switch (attrs.cols) {
      case '1-1':
        return 'grid-cols-2';
      case '1-2':
        return 'grid-cols-[1fr,2fr]';
      case '2-1':
        return 'grid-cols-[2fr,1fr]';
      default:
        return attrs.cols;
    }
  });
</script>
