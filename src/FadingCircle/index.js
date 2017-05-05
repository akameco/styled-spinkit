// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import roundTo from 'round-to'
import {
  prefix,
  propSize,
  size,
  propMargin,
  propBgColor,
  getRange,
} from '../util'

const opacity = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
`

const Child = styled.div`
  ${size('100%')}
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(${p => p.rotate}deg);
  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    ${size('15%')}
    border-radius: 100%;
    animation: ${opacity} 1.2s infinite ease-in-out both -${p => p.delay}s;
  }
`

const StyledForldingCircle = styled.div`
  ${propSize}
  ${propMargin}
  position: relative;

  > ${Child} {
    &::before {
      ${propBgColor}
    }
  }
`

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class ForldingCircle extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    size: 40,
    color: '#333',
  }

  static displayName = `${prefix}ForldingCircle`

  render() {
    const count = 12
    const range = 1.2
    const circles = getRange(count).map(v => (
      <Child
        key={v}
        rotate={roundTo(360 / count * v, 1)}
        delay={roundTo(range - range / count * v, 2)}
      />
    ))

    return (
      <StyledForldingCircle {...this.props}>
        {circles}
      </StyledForldingCircle>
    )
  }
}

export default ForldingCircle
