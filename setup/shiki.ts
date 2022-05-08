import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup(async ({ loadTheme }) => ({
  theme: {
    dark: await loadTheme(require.resolve('shiki/themes/material-darker.json')),
    light: await loadTheme(
      require.resolve('shiki/themes/material-default.json'),
    ),
  },
}));
