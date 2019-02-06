import React from 'react'
import roundTo from 'round-to'
import { Child, StyledCubeGrid } from './styles'

interface Props {
  size: number
  color: string
}

class CubeGrid extends React.PureComponent<Props> {
  static defaultProps = {
    size: 40,
    color: '#333',
  }

  static displayName = `__styled-spinkit__CubeGrid`

  render() {
    const range = 0.4
    const cubes = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]
      .map(v => roundTo(range * v, 2))
      .map((v, k) => <Child key={k} delay={v} />)

    return <StyledCubeGrid {...this.props}>{cubes}</StyledCubeGrid>
  }
}

export default CubeGrid
