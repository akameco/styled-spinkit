// @flow
import styled, { keyframes } from 'styled-components'
import {
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

export const Child = styled.div`
  ${size('100%')}
  border-radius: 50%;
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  animation: ${debounce} 2s infinite ease-in-out;
  ${p => p.isDelay && animationDelay(-1)}
`

export const StyledDoubleBounce = styled.div`
  ${propSize}
  position: relative;
  ${propMargin}
  > ${Child} {
    ${propBgColor}
  }
`
