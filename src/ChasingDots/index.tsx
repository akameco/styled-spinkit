import React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { StyledChangeDots, Child } from './styles'

const ChangeDots: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  return (
    <StyledChangeDots className={className} size={size} color={color}>
      <Child />
      <Child second />
    </StyledChangeDots>
  )
}

export default ChangeDots
