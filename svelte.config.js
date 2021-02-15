/* eslint-disable @typescript-eslint/no-require-imports */
const sveltePreprocess = require('svelte-preprocess');
const { optimizeCarbonImports } = require('carbon-components-svelte/preprocess');

const pkg = require('./package.json');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  preprocess: [
    sveltePreprocess({
      sourceMap: !production,
      defaults: {
        script: 'typescript',
        style: 'sass',
      },
      replace: [
        ['__VERSION__', JSON.stringify(pkg.version)],
        ['process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV)],
      ],
    }),
    optimizeCarbonImports(),
  ],
};
