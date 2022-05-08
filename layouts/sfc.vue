<template>
  <div class="slidev-layout default">
    <div class="grid justify-items-stretch items-center w-full h-full">
      <slot />
      <div class="overflow-hidden text-center self-end">
        <iframe
          :src="exampleLink()"
          frameborder="0"
          width="960"
          height="460"
          class="-mt-14 mb-2"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { inject, useAttrs } from 'vue';

  const attrs = useAttrs();

  const examples = inject('sfc-examples', {});

  function exampleLink() {
    if (typeof window === 'undefined') return '';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const src = examples[attrs.example];

    const content =
      typeof src === 'object'
        ? src
        : {
            'App.vue': src,
          };

    const encoded = window.btoa(JSON.stringify(content));

    return `https://sfc.vuejs.org/#${encoded}`;
  }
</script>
