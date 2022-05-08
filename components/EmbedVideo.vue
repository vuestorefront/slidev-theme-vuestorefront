<template>
  <iframe
    :src="url"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="w-full h-[420px]"
  ></iframe>
</template>

<script setup lang="ts">
  import { computed, ref, onMounted, watch } from 'vue';

  const props = defineProps<{
    src?: string;
    params?: Record<never, unknown>;
  }>();
  const url = ref('');
  const players = ref<
    {
      reg: RegExp;
      url: string;
      params: Record<string, unknown>;
      clearUrl?: (url: string) => string;
    }[]
  >([
    {
      reg: /^((?:https?:)?\/\/)?((?:www|m)\.)?(?:youtube\.com|youtu.be)(\/(?:[\w-]+\?v=|embed\/|v\/)?)(?<videoId>([\w-]+))?$/i,
      url: 'https://www.youtube.com/embed/$5',
      params: {},
      clearUrl(u: string) {
        return `${u?.replace(this.reg, this.url)}`;
      },
    },
    {
      reg: /^.*vimeo.com\/(\d+)($|\/|\b)/i,
      url: 'https://player.vimeo.com/video/$1',
      params: {
        title: 0,
        byline: 0,
        portrait: 0,
      },
    },
    {
      reg: /^.*(?:\/video|dai.ly)\/([A-Za-z0-9]+)([^#&?]*).*/i,
      url: 'https://www.dailymotion.com/embed/video/$1',
      params: {
        autoplay: 0,
      },
    },
    {
      reg: /^.*coub.com\/(?:embed|view)\/([A-Za-z0-9]+)([^#&?]*).*/i,
      url: 'https://coub.com/embed/$1',
      params: {
        autoplay: 0,
      },
    },
  ]);

  function parse() {
    if (props.src) {
      [...players.value].forEach((player) => {
        if (player.reg.exec(props.src)) {
          const params = { ...player.params, ...props.params };
          const query = Object.keys(params)
            .map((key) => `${key}=${params[key]}`)
            .join('&');

          const and = player.url.indexOf('?') >= 0 ? '&' : '?';

          url.value = `${
            player.clearUrl && props.src
              ? player.clearUrl(props.src)
              : props?.src?.replace(player.reg, player.url)
          }${query.length ? `${and}${query}` : ''}`;
        }
      });
    }
  }

  watch(
    () => computed(() => props.src),
    () => {
      parse();
    },
  );

  onMounted(() => {
    parse();
  });
</script>
