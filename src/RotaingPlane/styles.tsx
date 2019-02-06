import styled, { keyframes } from 'styled-components'
import {
  propSize,
  propBgColor,
  propMargin,
  SizeProps,
  BgColorProps,
} from '../util'

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

interface Props {
  speed: number
}

const StyledRotaingPlain = styled.div<Props & SizeProps & BgColorProps>`
  ${propSize};
  ${propBgColor};
  ${propMargin};
  animation: ${spin} ${p => p.speed}s infinite ease-in-out;
`

export default StyledRotaingPlain
