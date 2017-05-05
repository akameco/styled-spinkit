// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { prefix, propSize, propBgColor, propMargin } from '../util'

const spin = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`

const speed = 1.2

const StyledRotaingPlain = styled.div`
  ${propSize}
  ${propBgColor}
  ${propMargin}
  animation: ${spin} ${p => p.speed}s infinite ease-in-out;
`

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class RotaingPlain extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `${prefix}RotaingPlain`

  render() {
    return <StyledRotaingPlain {...this.props} speed={speed} />
  }
}

export default RotaingPlain
