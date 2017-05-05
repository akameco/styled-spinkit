// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { prefix, sizePx, propMargin, propBgColor } from '../util'

const bounce = keyframes`
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
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.4s ease-in-out ${p => p.delay}s infinite both;
`

const StyledThreeBounce = styled.div`
  width: ${p => p.size}px;
  ${propMargin}
  text-align: center;
  border-radius: 100%;
  > ${Child} {
    ${p => sizePx(p.size / 4)}
    ${propBgColor}
  }
`

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class ThreeBounce extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `${prefix}ThreeBounce`

  render() {
    return (
      <StyledThreeBounce {...this.props}>
        <Child delay={-0.32} />
        <Child delay={-0.16} />
        <Child delay={0} />
      </StyledThreeBounce>
    )
  }
}

export default ThreeBounce
