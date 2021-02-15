import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import copy from '@barusu/rollup-plugin-copy';
import clear from 'rollup-plugin-clear';
import genImageSizes from 'rollup-generate-image-sizes';
import manifestJson from 'rollup-plugin-manifest-json';
import html from '@rollup/plugin-html';
import templateExternalFiles from './templateExternalFiles';

import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;
const nodeEnv = production ? 'production' : 'development';
process.env.NODE_ENV = nodeEnv;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    dir: production ? 'build' : '.dev',
    entryFileNames: `bundle${(production && '.[hash]') || ''}.js`,
  },
  plugins: [
    html({
      title: pkg.name.toUpperCase(),
      template: templateExternalFiles([{ type: 'css', file: 'bundle.css' }]),
      fileName: production ? 'popup.html' : 'index.html',
    }),
    svelte({
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      preprocess: require('./svelte.config').preprocess,
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    postcss({
      extract: 'bundle.css',
      minimize: production,
      sourceMap: !production,
    }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    production
      ? typescript({
          sourceMap: true,
          inlineSources: !production,
        })
      : esbuild({
          sourceMap: true,
          define: {
            __VERSION__: JSON.stringify(pkg.version),
            __DEV__: 'true',
          },
          loaders: {
            '.json': 'json',
          },
        }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('.dev'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
    production && clear({ targets: ['build'] }),
    copy({
      targets: [
        {
          src: 'public/icon.png',
          dest: production ? 'build/images' : '.dev',
          rename: production ? 'icon.png' : 'favicon.png',
        },
      ],
      copyOnce: !production,
    }),

    production &&
      genImageSizes({
        dir: 'build/images',
        size: [16, 32, 48, 96, 128],
        outputFormat: 'png',
        quality: 100,
      }),

    manifestJson({
      input: 'public/manifest.json',
      manifest: {
        name: pkg.name,
        version: pkg.version,
        author: pkg.author.name,
        homepage_url: 'https://github.com/hewel/faibu',
        action: {
          default_popup: production ? 'popup.html' : 'index.html',
          default_title: pkg.name,
          default_icon: production
            ? {
                16: '/images/icon@16.png',
                32: '/images/icon@32.png',
                48: '/images/icon@48.png',
                128: '/images/icon@128.png',
              }
            : 'favicon.png',
        },
        icons: production
          ? {
              16: '/images/icon@16.png',
              32: '/images/icon@32.png',
              48: '/images/icon@48.png',
              128: '/images/icon@128.png',
            }
          : {
              128: 'favicon.png',
            },
      },
    }),
  ],
  watch: {
    clearScreen: false,
  },
};
