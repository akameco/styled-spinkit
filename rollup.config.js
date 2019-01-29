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
    presets: [
      ['@babel/preset-env', { loose: true, modules: false }],
      '@babel/preset-react',
    ],
    plugins: [
      'flow-react-proptypes',
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'styled-components',
        {
          displayName: false,
        },
      ],
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
