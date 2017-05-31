// @flow
import styled, { keyframes } from 'styled-components'
import { sizePx, propMargin, propBgColor } from '../util'

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

export const Child = styled.div`
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.4s ease-in-out ${p => p.delay}s infinite both;
`

export const StyledThreeBounce = styled.div`
  width: ${p => p.size}px;
  ${propMargin}
  text-align: center;
  border-radius: 100%;
  > ${Child} {
    ${p => sizePx(p.size / 4)}
    ${propBgColor}
  }
`
