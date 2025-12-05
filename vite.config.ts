import { reactRouter } from '@react-router/dev/vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
import { reactRouterDevTools } from 'react-router-devtools';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteCompression from 'vite-plugin-compression';
import devtoolsJson from 'vite-plugin-devtools-json';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import imagePlaceholder from 'vite-plugin-image-placeholder';
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from 'vite-tsconfig-paths';

const isDev = process.env.NODE_ENV === 'development' ? true : false;

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // console.log('VITE_API_URL:', env);
  return {
    build: {
      chunkSizeWarningLimit: 1600,
      outDir: 'build',
      minify: 'terser',
      manifest: true,
      sourcemap: false,
      reportCompressedSize: true,
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: 'assets/[name].[ext]',
          manualChunks(id) {
            // if (id.includes('src/constants/') || id.includes('src/utils/')) {
            //   return 'shared';
            // }
            if (id.includes('node_modules')) {
              const modulePath = id.split('node_modules/')[1];
              const topLevelFolder = modulePath.split('/')[0];
              if (topLevelFolder !== '.pnpm') {
                return topLevelFolder;
              }
              const scopedPackageName = modulePath.split('/')[1];
              const chunkName =
                scopedPackageName.split('@')[
                  scopedPackageName.startsWith('@') ? 1 : 0
                ];
              return chunkName;
            }
          },
        },
      },
    },
    plugins: [
      chunkSplitPlugin({
        strategy: 'single-vendor',
        customChunk: (args) => {
          let { file } = args;
          if (file.startsWith('app/')) {
            file = file.substring(4);
            file = file.replace(/\.[^.$]+$/, '');
            return file;
          }
          return null;
        },
      }),
      // nodePolyfills({
      //   // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      //   include: ['crypto'],
      //   // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
      //   exclude: [
      //     'http', // Excludes the polyfill for `http` and `node:http`.
      //   ],
      //   // Whether to polyfill specific globals.
      //   globals: {
      //     Buffer: true, // can also be 'build', 'dev', or false
      //     global: true,
      //     process: true,
      //   },
      //   // Override the default polyfills for specific modules.
      //   overrides: {
      //     // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
      //     fs: 'memfs',
      //   },
      //   // Whether to polyfill `node:` protocol imports.
      //   protocolImports: true,
      // }),
      Inspect({
        dev: isDev,
        // build: true,
        // outputDir: '.vite-inspect',
        // open: true,
      }),
      imagePlaceholder({
        prefix: 'image/placeholder',
      }),
      reactRouterDevTools({
        // client: {
        //   breakpoints: {

        //   }
        // },
        includeInProd: {
          devTools: false,
          server: true,
        },
        // editor: {
        //   name: 'Vite',
        //   open(path, lineNumber) {
        //     // Open the file in the editor
        //     console.log(`Opening ${path} at line ${lineNumber}`);
        //   },
        // },
        // server: {
        //   logs: true,
        // }
      }),
      // tailwindcss(),
      reactRouter(),
      tsconfigPaths({ ignoreConfigErrors: true }),
      devtoolsJson({ uuid: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b' }),
      ViteImageOptimizer(),
      visualizer({
        open: true,
        filename: 'stats.html',
        template: 'network',
      }), // Generates a visual report
      viteCompression({ deleteOriginFile: false }), // Compresses the build files
    ],
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.ts': 'tsx',
        },
      },
      // exclude: [
      //   'vite-plugin-node-polyfills/shims/buffer',
      //   'vite-plugin-node-polyfills/shims/global',
      //   'vite-plugin-node-polyfills/shims/process',
      //   'node_modules/.vite/deps/chunk-BFY6W2HS.js',
      // ],
    },
    ssr: {
      noExternal: [/odometer/],
    },
  };
});

// export default defineConfig({
//   // root: resolve(__dirname, 'app'),
//   plugins: [
//     // not working
//     // react({
//     //   babel: {
//     //     plugins: [['babel-plugin-react-compiler']],
//     //     shouldPrintComment(commentContents) {
//     //       return commentContents.includes('use no memo');
//     //     },
//     //   },
//     // }),
//     reactRouter(),
//     tsconfigPaths(),
//     imagePlaceholder(),
//     devtoolsJson(),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './app'),
//     },
//   },
// });
