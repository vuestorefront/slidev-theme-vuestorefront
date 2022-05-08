<template>
  <component :is="logoUrl" />
</template>

<script setup lang="ts">
  import { computed, defineProps } from 'vue';
  import { Logos, useDynamicLogo } from '../composables/useDynamicLogo';

  const props = withDefaults(
    defineProps<{
      color?: string;
      text?: string;
      ui?: string;
      logo?: Logos;
    }>(),
    {
      color: '#02c652',
      text: '#000000',
      ui: '#ffffff',
      logo: 'vsfHorizontal',
    },
  );

  const { logoUrl } = useDynamicLogo(props.logo);
  const configsLogo = $slidev?.themeConfigs?.logo;

  const logoColor = computed(
    () => configsLogo?.color || props.color || 'var(--logo-color)',
  );
  const uiColor = computed(
    () => configsLogo?.ui || props.ui || 'var(--logo-ui-color)',
  );
  const textColor = computed(
    () => configsLogo?.text || props.text || 'var(--logo-text-color)',
  );
</script>

<style>
  :root {
    --logo-color: #02c652;
    --logo-ui-color: #ffffff;
    --logo-text-color: #000000;
  }

  .logoColorClass {
    fill: v-bind(logoColor);
  }
  .logoUiClass {
    fill: v-bind(uiColor);
  }
  .logoTextClass {
    fill: v-bind(textColor);
  }
</style>
