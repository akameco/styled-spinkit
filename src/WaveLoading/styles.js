// @flow
import styled, { keyframes } from 'styled-components'
import { size, propMargin, propBgColor, propDelay } from '../util'

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

export const Rect = styled.div`
  ${size('7px', '100%')}
  margin: 0 3px 0 0;
  display: inline-block;
  ${propDelay}
`

export const StyledWave = styled.div`
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
