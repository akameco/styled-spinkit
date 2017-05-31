import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import flow from 'rollup-plugin-flow'

const targets = [{ dest: 'dist/styled-spinkit.es.js', format: 'es' }]

const plugins = [
  flow(),
  nodeResolve({ jsnext: true }),
  commonjs(),
  babel({
    babelrc: false,
    presets: [['env', { modules: false }], 'react'],
    plugins: [
      'flow-react-proptypes',
      'transform-flow-strip-types',
      'external-helpers',
      'transform-class-properties',
      [
        'styled-components',
        {
          displayName: false,
        },
      ],
    ],
  }),
]

export default {
  entry: 'src/index.js',
  external: ['react'],
  exports: 'named',
  targets,
  plugins,
  globals: { react: 'React' },
}
