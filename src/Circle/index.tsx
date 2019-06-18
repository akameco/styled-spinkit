import * as React from 'react'
import { getRange, roundTo } from '../util'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Child, StyledCircle } from './styles'

const Circle: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  const count = 12
  const speed = 1.2

  const circles = getRange(count).map(k => {
    const transform = roundTo((360 / count) * (k + 1), 1)
    const delay = roundTo(-speed + (speed / count) * k, 1)
    return <Child key={delay} delay={delay} transform={transform} />
  })

  return (
    <StyledCircle className={className} size={size} color={color}>
      {circles}
    </StyledCircle>
  )
}

export default Circle
