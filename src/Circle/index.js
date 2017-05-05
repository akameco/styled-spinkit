// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import roundTo from 'round-to'
import {
  prefix,
  size,
  propSize,
  propMargin,
  propBgColor,
  getRange,
} from '../util'

const scale = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`

const Child = styled.div`
  ${size('100%')}
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(${p => p.transform}deg);

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    ${size('15%')}
    border-radius: 100%;
    animation: ${scale} 1.2s ease-in-out ${p => p.delay}s infinite both;
  }
`

const StyledCircle = styled.div`
  ${propMargin}
  ${propSize};
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

class Circle extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `${prefix}Circle`

  render() {
    const count = 12
    const speed = 1.2

    const circles = getRange(count).map(k => {
      const transform = roundTo(360 / count * (k + 1), 1)
      const delay = roundTo(-speed + speed / count * k, 1)
      return <Child key={delay} delay={delay} transform={transform} />
    })

    return (
      <StyledCircle {...this.props}>
        {circles}
      </StyledCircle>
    )
  }
}

export default Circle
