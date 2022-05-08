import { resolve } from 'path';
import { defineWindiSetup } from '@slidev/types';
import aspectRatio from 'windicss/plugin/aspect-ratio';
import colors from 'windicss/colors';

export default defineWindiSetup(() => ({
  darkMode: 'class',
  extract: {
    include: [resolve(__dirname, '../**/*.{vue,ts}')],
  },
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.neutral,
        red: '#B6023E',
        yellow: '#EAC800',
        purple: '#420CA9',
        green: '#00AD46',
      },
      fontFamily: {
        sans: [
          '"Red Hat Text"',
          '"Red Hat Display"',
          'system-ui',
          'sans-serif',
        ],
        title: ['"Red Hat Display"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace'],
      },
    },
  },
  plugins: [aspectRatio],
}));
