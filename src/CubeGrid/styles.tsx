import styled, { keyframes } from 'styled-components'

import {
  size,
  propSize,
  propMargin,
  propBgColor,
  SizeProps,
  BgColorProps,
  DelayProps,
} from '../util'

const scale = keyframes`
  0%,
  70%,
  100% {
    transform: scale3d(1, 1, 1);
  }

  35% {
    transform: scale3d(0, 0, 1);
  }
`

export const Child = styled.div<DelayProps>`
  ${size('33.33%')};
  float: left;
  animation: ${scale} 1.3s infinite ease-in-out ${(p) => p.delay}s;
`

export const StyledCubeGrid = styled.div<SizeProps & BgColorProps>`
  ${propSize};
  ${propMargin};
  > ${Child} {
    ${propBgColor};
  }
`
