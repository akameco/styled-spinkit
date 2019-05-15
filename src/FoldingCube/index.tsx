import React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Child, StyledFoldingCube } from './styles'
import { roundTo } from '../util'

const FoldingCube: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  const duration = 2.4
  const range = duration / 2
  const cubeCount = 4

  const cubes = [0, 1, 3, 2].map(v => (
    <Child
      scale={90 * v}
      key={v}
      delay={roundTo((range / cubeCount) * v, 2)}
      duration={duration}
    />
  ))

  return (
    <StyledFoldingCube className={className} size={size} color={color}>
      {cubes}
    </StyledFoldingCube>
  )
}

export default FoldingCube
