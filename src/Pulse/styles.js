// @flow
import styled, { keyframes } from 'styled-components'
import { propSize, propBgColor, propMargin } from '../util'

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`

const StyledPulse = styled.div`
  ${propSize};
  ${propBgColor};
  ${propMargin};
  border-radius: 100%;
  animation: ${scaleOut} 1s ease-in-out infinite;
`

export default StyledPulse
