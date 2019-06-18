import * as React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-dom'
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotaingPlane,
  ThreeBounce,
  WanderingCubes,
  WaveLoading,
} from '../src'

function randomColor() {
  const colors = [
    '#cc0066',
    '#eee',
    '#3399ff',
    '#99ffcc',
    '#6600ff',
    '#ff9933',
    '#cc0000',
    '#006600',
    '#ffcc00',
  ]
  const color = colors[Math.floor(colors.length * Math.random())]
  return color
}

const Box: React.FC = ({ children }) => (
  <div
    style={{ backgroundColor: '#333', padding: 24, width: 150, height: 150 }}
  >
    {children}
  </div>
)

const Text: React.FC = ({ children }) => (
  <div style={{ color: '#e3e3e3', textAlign: 'center' }}>{children}</div>
)

const ComponentName = ({ title }: { title: string }) => (
  <Text>{`<${title} />`}</Text>
)

const ShowSpinkit = ({ component: Component }) => {
  return (
    <Box>
      <Component color={randomColor()} />
      <ComponentName title={Component.name} />
    </Box>
  )
}

function App() {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        maxWidth: '960',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 'auto',
          alignItems: 'center',
        }}
      >
        {[
          ChasingDots,
          Circle,
          CubeGrid,
          DoubleBounce,
          FadingCircle,
          FoldingCube,
          Pulse,
          RotaingPlane,
          ThreeBounce,
          WanderingCubes,
          WaveLoading,
        ].map(component => (
          <ShowSpinkit component={component} key={component.name} />
        ))}
      </div>
    </div>
  )
}

render(<App />, document.querySelector('#root'))
