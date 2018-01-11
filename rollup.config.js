// @flow weak
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'

const plugins = [
  flow(),
  nodeResolve(),
  babel({
    babelrc: false,
    presets: [['env', { loose: true, modules: false }], 'react'],
    plugins: [
      'flow-react-proptypes',
      'transform-flow-strip-types',
      ['transform-class-properties', { loose: true }],
      [
        'styled-components',
        {
          displayName: false,
        },
      ],
      'external-helpers',
    ].filter(Boolean),
    ignore: ['*.test.js'],
  }),
  commonjs({ ignoreGlobal: true }),
]

export default {
  plugins,
  external: ['react', 'styled-components'],
  input: 'src/index.js',
  output: {
    file: 'dist/styled-spinkit.es.js',
    format: 'es',
    exports: 'named',
    globals: { react: 'React' },
  },
}
