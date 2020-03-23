import styled, { keyframes } from 'styled-components'
import {
  propSize,
  propBgColor,
  propDelay,
  SizeProps,
  DelayProps,
  BgColorProps,
  roundTo,
} from '../util'

const createAnim = (cubeDistance = 42) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: translateX(${cubeDistance}px) rotate(-90deg) scale(0.5);
  }
  50% {
    /* Hack to make FF rotate in the right direction */
    transform: translateX(${cubeDistance}px) translateY(${cubeDistance}px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(${cubeDistance}px) translateY(${cubeDistance}px) rotate(-180deg);
  }
  75% {
    transform: translateX(0) translateY(${cubeDistance}px) rotate(-270deg) scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
  }
`

export const Child = styled.div<SizeProps & DelayProps>`
  ${propSize};
  ${propDelay};
  position: absolute;
  top: 0;
  left: 0;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`

export const StyledWanderingCubes = styled.div<
  { speed: number } & SizeProps & BgColorProps
>`
  margin: ${(p) => roundTo(p.size * 0.8, 1)}px auto;
  ${propSize};
  text-align: center;
  font-size: 10px;
  position: relative;

  > ${Child} {
    ${propBgColor};
    animation-name: ${(p) => createAnim(roundTo(p.size * 0.8, 1))};
    animation-duration: ${(p) => p.speed}s;
  }
`
