import { reactRouter } from '@react-router/dev/vite';
// import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import imagePlaceholder from 'vite-plugin-image-placeholder';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // root: resolve(__dirname, 'app'),
  plugins: [
    // not working
    // react({
    //   babel: {
    //     plugins: [['babel-plugin-react-compiler']],
    //     shouldPrintComment(commentContents) {
    //       return commentContents.includes('use no memo');
    //     },
    //   },
    // }),
    reactRouter(),
    tsconfigPaths(),
    imagePlaceholder(),
    devtoolsJson(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
});
