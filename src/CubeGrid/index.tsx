import React from 'react'
import roundTo from 'round-to'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Child, StyledCubeGrid } from './styles'

const CubeGrid: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  const range = 0.4
  const cubes = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]
    .map(v => roundTo(range * v, 2))
    .map((v, k) => <Child key={k} delay={v} />)

  return (
    <StyledCubeGrid className={className} size={size} color={color}>
      {cubes}
    </StyledCubeGrid>
  )
}

export default CubeGrid
