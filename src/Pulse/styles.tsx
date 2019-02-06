import styled, { keyframes } from 'styled-components'
import {
  propSize,
  propBgColor,
  propMargin,
  SizeProps,
  BgColorProps,
} from '../util'

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`

type Props = SizeProps & BgColorProps

const StyledPulse = styled.div<Props>`
  ${propSize};
  ${propBgColor};
  ${propMargin};
  border-radius: 100%;
  animation: ${scaleOut} 1s ease-in-out infinite;
`

export default StyledPulse
