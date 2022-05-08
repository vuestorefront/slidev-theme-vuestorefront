import { computed } from 'vue';
import vsfHorizontalSvg from '../public/logo/vsf-css-dyn-horizontal-logo.svg?component';
import vsfVerticalSvg from '../public/logo/vsf-css-dyn-vertical-logo.svg?component';
import sfuiSvg from '../public/logo/sfui-css-dyn-logo.svg?component';

export type Logos = 'vsfHorizontal' | 'vsfVertical' | 'sfui';

const logoComponents = {
  vsfHorizontal: vsfHorizontalSvg,
  vsfVertical: vsfVerticalSvg,
  sfui: sfuiSvg,
};

export const useDynamicLogo = (logo: Logos) => {
  const logoUrl = computed(() => logoComponents[logo]);

  return {
    logoUrl,
  };
};
