import React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Child, StyledThreeBounce } from './styles'

export const ThreeBounce: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => {
  return (
    <StyledThreeBounce size={size} color={color}>
      <Child delay={-0.32} />
      <Child delay={-0.16} />
      <Child delay={0} />
    </StyledThreeBounce>
  )
}

export default ThreeBounce
