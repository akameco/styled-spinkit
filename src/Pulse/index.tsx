import React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import StyledPulse from './styles'

const Pulse: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => {
  return <StyledPulse size={size} color={color} />
}

export default Pulse
