<template>
  <div class="absolute" style="height: 100vh; width: 100vw; top: 0; left: 0">
    <component :is="backgroundSvg" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { Backgrounds, useDynamicBg } from '../composables/useDynamicBg';

  const props = withDefaults(
    defineProps<{
      background?: Backgrounds;
      position?: string;
      image?: string;
    }>(),
    {
      background: 'bigRight',
      position: 'center',
    },
  );

  const { backgroundSvg } = useDynamicBg(props.background);

  const imageBg = computed(() => props.image);
  const imagePosition = computed(() => props.position);
</script>

<style>
  .image-cover {
    background-image: v-bind(imageBg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: v-bind(imagePosition);
  }
</style>
