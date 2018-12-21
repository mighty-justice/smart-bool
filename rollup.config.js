import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import pkg from './package.json';

const name = 'smart-bool'
  , input = 'src/index.ts'
  , extensions = ['.js', '.jsx', '.ts', '.tsx']
  , babelConfig = {
    ...babelrc({ addExternalHelpersPlugin: false }),
    exclude: 'node_modules/**',
    extensions,
  };

export default [
  // browser-friendly UMD build
  {
    input,
    output: {
      file: pkg.browser,
      format: 'umd',
      name,
    },
    external: [
      'mobx',
    ],
    plugins: [
      resolve({ extensions }),
      babel(babelConfig),
      commonjs(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    external: [
      'ms',
      'mobx',
    ],
    plugins: [
      resolve({ extensions }),
      babel(babelConfig),
      commonjs(),
    ],
  },
];
