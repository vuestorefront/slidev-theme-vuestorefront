import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';
import RemoteAssets from 'vite-plugin-remote-assets';

export default defineConfig({
  plugins: [svgLoader(), RemoteAssets()],
});
