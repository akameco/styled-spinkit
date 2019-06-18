import * as React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Child, StyledDoubleBounce } from './styles'

const DoubleBounce: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  return (
    <StyledDoubleBounce className={className} size={size} color={color}>
      <Child />
      <Child isDelay />
    </StyledDoubleBounce>
  )
}

export default DoubleBounce
