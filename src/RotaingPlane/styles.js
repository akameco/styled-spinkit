// @flow

import styled, { keyframes } from 'styled-components'
import { propSize, propBgColor, propMargin } from '../util'

const spin = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`

const StyledRotaingPlain = styled.div`
  ${propSize};
  ${propBgColor};
  ${propMargin};
  animation: ${spin} ${p => p.speed}s infinite ease-in-out;
`

export default StyledRotaingPlain
