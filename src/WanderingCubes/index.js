// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import roundTo from 'round-to'
import { prefix, propSize, propBgColor, propDelay } from '../util'

const createAnim = (cubeDistance: number = 42) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: translateX(${cubeDistance}px) rotate(-90deg) scale(0.5);
  }
  50% {
    /* Hack to make FF rotate in the right direction */
    transform: translateX(${cubeDistance}px) translateY(${cubeDistance}px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(${cubeDistance}px) translateY(${cubeDistance}px) rotate(-180deg);
  }
  75% {
    transform: translateX(0) translateY(${cubeDistance}px) rotate(-270deg) scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
  }
`

const Child = styled.div`
  ${propSize}
  position: absolute;
  top: 0;
  left: 0;
  ${propDelay}
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`

const StyledWanderingCubes = styled.div`
  margin: ${p => roundTo(p.size * 0.8, 1)}px auto;
  ${propSize}
  text-align: center;
  font-size: 10px;
  position: relative;

  > ${Child} {
    ${propBgColor}
    animation-name: ${p => createAnim(roundTo(p.size * 0.8, 1))};
    animation-duration: ${p => p.speed}s;
  }
`

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class WanderingCubes extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `${prefix}WanderingCubes`

  render() {
    const speed = 1.8
    const cubeSize = roundTo(this.props.size / 4, 2) // eslint-disable-line react/prop-types

    return (
      <StyledWanderingCubes speed={speed} {...this.props}>
        <Child delay={speed} size={cubeSize} />
        <Child delay={speed / 2} size={cubeSize} />
      </StyledWanderingCubes>
    )
  }
}

export default WanderingCubes
