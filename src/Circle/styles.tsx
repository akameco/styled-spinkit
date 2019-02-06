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
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`

type ChildProps = { transform: number } & DelayProps

export const Child = styled.div<ChildProps>`
  ${size('100%')};
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(${p => p.transform}deg);

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    ${size('15%')};
    border-radius: 100%;
    animation: ${scale} 1.2s ease-in-out ${p => p.delay}s infinite both;
  }
`

export const StyledCircle = styled.div<SizeProps & BgColorProps>`
  ${propMargin};
  ${propSize};
  position: relative;

  > ${Child} {
    &::before {
      ${propBgColor};
    }
  }
`
