import React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Child, StyledThreeBounce } from './styles'

const ThreeBounce: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  return (
    <StyledThreeBounce className={className} size={size} color={color}>
      <Child delay={-0.32} />
      <Child delay={-0.16} />
      <Child delay={0} />
    </StyledThreeBounce>
  )
}

export default ThreeBounce
