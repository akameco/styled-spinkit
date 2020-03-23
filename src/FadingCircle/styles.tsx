import styled, { keyframes } from 'styled-components'
import {
  propSize,
  size,
  propMargin,
  propBgColor,
  SizeProps,
  BgColorProps,
  DelayProps,
} from '../util'

const opacity = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
`

export const Child = styled.div<{ rotate: number } & DelayProps>`
  ${size('100%')};
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(${(p) => p.rotate}deg);
  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    ${size('15%')};
    border-radius: 100%;
    animation: ${opacity} 1.2s infinite ease-in-out both -${(p) => p.delay}s;
  }
`

export const StyledForldingCircle = styled.div<SizeProps & BgColorProps>`
  ${propSize};
  ${propMargin};
  position: relative;

  > ${Child} {
    &::before {
      ${propBgColor};
    }
  }
`
