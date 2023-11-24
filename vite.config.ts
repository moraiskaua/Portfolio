import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssConfig from './postcss.config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: postcssConfig,
  },
});
