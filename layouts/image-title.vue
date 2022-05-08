<template>
  <div
    class="slidev-layout image-title full-slide slide-content grid gap-x-2"
    :class="[gridColsSize]"
  >
    <h1
      v-if="$attrs.showTitle !== false && $attrs.title"
      class="text-center !text-5xl"
    >
      {{ $attrs.title }}
    </h1>
    <div class="flex flex-col justify-end">
      <slot />
    </div>
    <div class="overflow-hidden flex flex-col justify-center">
      <img :src="$attrs.image" class="h-100" />
    </div>
    <div v-if="$attrs.cols && $slots.right">
      <slot name="right" />
    </div>
    <div
      data-x="links"
      class="text-white absolute bottom-8 left-4 flex flex-col gap-2"
    >
      <div v-if="$attrs.twitter" data-x="twitter">
        <logos-twitter class="inline-block mr-3" />
        <a
          ref="noopener noreferrer"
          :href="twitterUrl($attrs.twitter)"
          target="_blank"
        >
          {{ $attrs.twitter }}
        </a>
      </div>
      <div v-if="$attrs.github" data-x="github">
        <logos-twitter class="inline-block mr-3" />
        <a
          ref="noopener noreferrer"
          :href="twitterUrl($attrs.twitter)"
          target="_blank"
        >
          {{ $attrs.twitter }}
        </a>
      </div>
      <div v-if="$attrs.website" data-x="site">
        <uim-house-user class="inline-block mr-3" />
        <a
          ref="noopener noreferrer"
          :href="urlify($attrs.website)"
          target="_blank"
          >{{ $attrs.website }}</a
        >
      </div>
      <div v-if="$attrs.repository" data-x="repo">
        <logos-github-icon class="inline-block mr-3" />
        <a
          ref="noopener noreferrer"
          :href="urlify($attrs.repository)"
          target="_blank"
          >{{ $attrs.repository }}</a
        >
      </div>
      <div v-if="$attrs.hostedSlides" data-x="slides">
        <ri-slideshow-line class="inline-block mr-3" />
        <a
          ref="noopener noreferrer"
          :href="urlify($attrs.hostedSlides)"
          target="_blank"
        >
          Slides: {{ $attrs.hostedSlides }}
        </a>
      </div>

      <div v-if="$attrs.linkedin" data-x="linkedin">
        <uim-linkedin-alt class="inline-block mr-3 text-blue-600" />
        <a
          ref="noopener noreferrer"
          :href="urlify($attrs.linkedin)"
          target="_blank"
          >{{ $attrs.linkedin }}</a
        >
      </div>

      <div
        v-if="$attrs.polywork"
        ref="noopener noreferrer"
        data-x="polywork"
        target="_blank"
      >
        Polywork <a :href="urlify($attrs.polywork)">{{ $attrs.polywork }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, useAttrs } from 'vue';
  import { urlify, twitterUrl } from '../utils/urlManipulation';

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
