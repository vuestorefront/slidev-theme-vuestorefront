import { computed } from 'vue';
import topRightPhotoSvg from '../public/bg-diamond-top-right-photo.svg?component';
import bigRightSvg from '../public/bg-diamond-top-right.svg?component';

export type Backgrounds = 'topRightPhoto' | 'bigRight';

const logoComponents = {
  topRightPhoto: topRightPhotoSvg,
  bigRight: bigRightSvg,
};

export const useDynamicBg = (logo: Backgrounds) => {
  const backgroundSvg = computed(() => logoComponents[logo]);

  return {
    backgroundSvg,
  };
};
