// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import roundTo from 'round-to'
import {
  prefix,
  size,
  propMargin,
  propBgColor,
  getRange,
  propDelay,
} from '../util'

const anim = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`

const Rect = styled.div`
  ${size('7px', '100%')}
  margin: 0 3px 0 0;
  display: inline-block;
  ${propDelay}
`

const StyledWave = styled.div`
  ${propMargin}
  ${p => size(`${p.size * 1.25}px`, `${p.size}px`)}
  text-align: center;
  font-size: 10px;

  > ${Rect} {
    ${propBgColor}
    animation-name: ${anim};
    animation-duration: ${p => p.speed}s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class Wave extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `${prefix}Wave`

  render() {
    const speed = 1.2
    const rectCount = 5
    const delayRange = 0.4

    const rects = getRange(rectCount).map(v => (
      <Rect
        delay={roundTo(-speed + delayRange / (rectCount - 1) * v, 1)}
        key={v}
      />
    ))

    return (
      <StyledWave speed={speed} {...this.props}>
        {rects}
      </StyledWave>
    )
  }
}

export default Wave
