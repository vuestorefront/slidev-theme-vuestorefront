<template>
  <span
    class="inline-block px-1 text-sm border rounded-sm font-bold"
    :class="style"
  >
    <slot />
  </span>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { ColorsEnum } from '../enums/colors';

  const props = withDefaults(
    defineProps<{
      type?: string;
    }>(),
    {
      type: 'default',
    },
  );

  const style = computed(
    () => ColorsEnum[props.type as keyof typeof ColorsEnum],
  );
</script>
