// @flow
import styled, { keyframes, css } from 'styled-components'

import {
  size,
  propSize,
  propMargin,
  propBgColor,
  animationDelay,
} from '../util'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const bounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.0);
  }
`

const duration = 2

export const Child = styled.div`
  ${size('60%')};
  display: inline-block;
  position: absolute;
  top: 0;
  border-radius: 100%;
  animation: ${bounce} ${duration}s infinite ease-in-out;
  ${p =>
    p.second &&
    css`
      top: auto;
      bottom: 0;
      ${animationDelay(-duration / 2)};
    `};
`

export const StyledChangeDots = styled.div`
  ${propSize};
  ${propMargin};
  position: relative;
  text-align: center;
  animation: ${rotate} ${duration}s infinite linear;

  > ${Child} {
    ${propBgColor};
  }
`
