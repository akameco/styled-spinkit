// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  prefix,
  size,
  propSize,
  propBgColor,
  propMargin,
  animationDelay,
} from '../util'

const debounce = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`

const Child = styled.div`
  ${size('100%')}
  border-radius: 50%;
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  animation: ${debounce} 2s infinite ease-in-out;
  ${p => p.isDelay && animationDelay(-1)}
`

const StyledDoubleBounce = styled.div`
  ${propSize}
  position: relative;
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

class DoubleBounce extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `${prefix}DoubleBounce`

  render() {
    return (
      <StyledDoubleBounce {...this.props}>
        <Child />
        <Child isDelay />
      </StyledDoubleBounce>
    )
  }
}

export default DoubleBounce
