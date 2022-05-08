<template>
  <div class="slidev-layout outro">
    <div class="absolute left-12 top-[200px] right-12">
      <slot></slot>
    </div>
    <div data-x="links" class="absolute bottom-8 left-4 flex flex-col gap-2">
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
      <div v-if="$attrs.linkedin" data-x="linkedin">
        <uim-linkedin-alt class="inline-block mr-3 text-blue-600" />
        <a
          ref="noopener noreferrer"
          :href="linkedinUrl($attrs.linkedin)"
          target="_blank"
          >{{ $attrs.linkedin }}</a
        >
      </div>
      <div v-if="$attrs.github" data-x="github">
        <logos-github-icon class="inline-block mr-3" />
        <a
          ref="noopener noreferrer"
          :href="githubUrl($attrs.github)"
          target="_blank"
        >
          {{ $attrs.github }}
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
        <mdi-source-repository-multiple class="inline-block mr-3" />
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
          {{ $attrs.hostedSlides }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    urlify,
    twitterUrl,
    githubUrl,
    linkedinUrl,
  } from '../utils/urlManipulation';
</script>

<style lang="postcss">
  .slidev-layout.outro {
    @apply bg-bottom bg-right;
  }
</style>
