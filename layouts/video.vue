<template>
  <Default v-bind="defaultAttrs">
    <div class="w-full h-[440px]">
      <slot />
      <embed-video :src="`${$attrs.video}`" :params="$attrs.videoEmbedParams" />
    </div>
  </Default>
</template>

<script setup lang="ts">
  import { computed, useAttrs } from 'vue';
  import omit from 'lodash-es/omit';
  import Default from './default.vue';

  const attrs = useAttrs();

  const defaultAttrs = computed(() => ({
    ...omit(attrs, 'video'),
    ...attrs,
  }));
</script>

<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>
