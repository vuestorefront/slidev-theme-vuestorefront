<template>
  <div
    class="slidev-layout grid gap-y-3 gap-x-5 default"
    :class="[
      $attrs.titleRow ? 'grid-flow-row auto-rows-max' : null,
      gridColsSize,
    ]"
  >
    <div
      v-if="$attrs.titleRow"
      class="vsf-header"
      :class="attrs.cols ? 'col-span-2' : null"
    >
      <slot name="subtitle">
        <h3 v-if="attrs.contextTitle">{{ $attrs.contextTitle }}</h3>
      </slot>
      <slot name="title">
        <h1 v-if="$attrs.title || $attrs.name">
          {{ $attrs.title || $attrs.name }}
        </h1>
      </slot>
      <slot name="text">
        <p v-if="$attrs.text">
          {{ $attrs.text }}
        </p>
      </slot>
    </div>
    <div class="flex flex-col justify-center">
      <slot />
    </div>
    <div v-if="$attrs.cols && $slots.right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Titles from '/@slidev/titles.md';
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

<style lang="postcss"></style>
