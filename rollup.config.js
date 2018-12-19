import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import pkg from './package.json';

const babelConfig = {
  ...babelrc({ addExternalHelpersPlugin: false }),
  exclude: 'node_modules/**',
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
};

export default [
  // browser-friendly UMD build

  {
    input: 'src/index.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'smart-bool',
    },
    // All the used libs needs to be here
    external: [
      'mobx',
    ],
    plugins: [
      resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
      babel(babelConfig),
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },


  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    external: [
      'ms',
      'mobx',
    ],
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }), // so Rollup can find `ms`
      babel(babelConfig),
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },
];
