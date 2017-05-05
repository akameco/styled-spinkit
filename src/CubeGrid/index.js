// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import roundTo from 'round-to'
import { prefix, size, propSize, propMargin, propBgColor } from '../util'

const scale = keyframes`
  0%,
  70%,
  100% {
    transform: scale3d(1, 1, 1);
  }

  35% {
    transform: scale3d(0, 0, 1);
  }
`

const Child = styled.div`
  ${size('33.33%')}
  float: left;
  animation: ${scale} 1.3s infinite ease-in-out ${p => p.delay}s;
`

const StyledCubeGrid = styled.div`
  ${propSize}
  ${propMargin}

  > ${Child} {
    ${propBgColor}
  }
`

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class CubeGrid extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    size: 40,
    color: '#333',
  }

  static displayName = `${prefix}CubeGrid`

  render() {
    const range = 0.4
    const cubes = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]
      .map(v => roundTo(range * v, 2))
      .map((v, k) => <Child key={k} delay={v} />)

    return (
      <StyledCubeGrid {...this.props}>
        {cubes}
      </StyledCubeGrid>
    )
  }
}

export default CubeGrid
