// @flow
import styled, { keyframes } from 'styled-components'
import { propSize, size, propBgColor, propMargin } from '../util'

const locate = keyframes`
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`

export const Child = styled.div`
  float: left;
  ${size('50%')};
  position: relative;
  transform: scale(1.1) rotateZ(${p => p.scale}deg);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    ${size('100%')};
    animation: ${locate} ${p => p.duration}s infinite linear both
      ${p => p.delay}s;
    transform-origin: 100% 100%;
  }
`

export const StyledFoldingCube = styled.div`
  ${propSize};
  ${propMargin};
  position: relative;
  transform: rotateZ(45deg);

  > ${Child} {
    &::before {
      ${propBgColor};
    }
  }
`
