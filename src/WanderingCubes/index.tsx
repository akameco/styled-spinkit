import * as React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { roundTo } from '../util'
import { Child, StyledWanderingCubes } from './styles'

const WanderingCubes: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  const speed = 1.8
  const cubeSize = roundTo(size / 4, 2)

  return (
    <StyledWanderingCubes
      speed={speed}
      className={className}
      size={size}
      color={color}
    >
      <Child delay={speed} size={cubeSize} />
      <Child delay={speed / 2} size={cubeSize} />
    </StyledWanderingCubes>
  )
}

export default WanderingCubes
