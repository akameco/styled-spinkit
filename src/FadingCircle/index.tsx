import React from 'react'
import roundTo from 'round-to'
import { getRange } from '../util'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Child, StyledForldingCircle } from './styles'

const ForldingCircle: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => {
  const count = 12
  const range = 1.2
  const circles = getRange(count).map(v => (
    <Child
      key={v}
      rotate={roundTo((360 / count) * v, 1)}
      delay={roundTo(range - (range / count) * v, 2)}
    />
  ))

  return (
    <StyledForldingCircle size={size} color={color}>
      {circles}
    </StyledForldingCircle>
  )
}

export default ForldingCircle
