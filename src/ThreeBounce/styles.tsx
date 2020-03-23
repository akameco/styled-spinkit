import styled, { keyframes } from 'styled-components'
import {
  sizePx,
  propMargin,
  propBgColor,
  SizeProps,
  BgColorProps,
  DelayProps,
} from '../util'

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

export const Child = styled.div<DelayProps>`
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.4s ease-in-out ${(p) => p.delay}s infinite both;
`

export const StyledThreeBounce = styled.div<SizeProps & BgColorProps>`
  width: ${(p) => p.size}px;
  ${propMargin};
  text-align: center;
  border-radius: 100%;
  > ${Child} {
    ${(p) => sizePx(p.size / 4)};
    ${propBgColor};
  }
`
