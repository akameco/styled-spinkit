// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import roundTo from 'round-to'
import { prefix, propSize, size, propBgColor, propMargin } from '../util'

const locate = keyframes`
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`

const Child = styled.div`
  float: left;
  ${size('50%')}
  position: relative;
  transform: scale(1.1) rotateZ(${p => p.scale}deg);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    ${size('100%')}
    animation: ${locate} ${p => p.duration}s infinite linear both ${p => p.delay}s;
    transform-origin: 100% 100%;
  }
`

const StyledFoldingCube = styled.div`
  ${propSize}
  ${propMargin}
  position: relative;
  transform: rotateZ(45deg);

  > ${Child} {
    &:before {
      ${propBgColor}
    }
  }
`

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

FoldingCube.displayName = `${prefix}FoldingCube`
export default FoldingCube
