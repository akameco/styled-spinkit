// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { prefix, propSize, propBgColor, propMargin } from '../util'

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`

const speed = 1

const StyledPulse = styled.div`
  ${propSize}
  ${propBgColor}
  ${propMargin}
  border-radius: 100%;
  animation: ${scaleOut} ${speed}s ease-in-out infinite;
`

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class Pulse extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    size: 40,
    color: '#333',
  }

  static displayName = `${prefix}Pulse`

  render() {
    return <StyledPulse {...this.props} />
  }
}

export default Pulse
