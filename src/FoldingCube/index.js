// @flow
import React from 'react'
import roundTo from 'round-to'
import { Child, StyledFoldingCube } from './styles'

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class FoldingCube extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    size: 40,
    color: '#333',
  }

  static displayName = `__styled-spinkit__FoldingCube`

  render() {
    const duration = 2.4
    const range = duration / 2
    const cubeCount = 4

    const cubes = [0, 1, 3, 2].map(v => (
      <Child
        scale={90 * v}
        key={v}
        delay={roundTo(range / cubeCount * v, 2)}
        duration={duration}
      />
    ))

    return (
      <StyledFoldingCube {...this.props}>
        {cubes}
      </StyledFoldingCube>
    )
  }
}

export default FoldingCube
