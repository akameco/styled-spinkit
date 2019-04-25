import React from 'react'
import roundTo from 'round-to'
import { getRange } from '../util'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import { Rect, StyledWave } from './styles'

const speed = 1.2
const rectCount = 5
const delayRange = 0.4

const Wave: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  const rects = getRange(rectCount).map(v => (
    <Rect
      delay={roundTo(-speed + (delayRange / (rectCount - 1)) * v, 1)}
      key={v}
    />
  ))

  return (
    <StyledWave speed={speed} className={className} size={size} color={color}>
      {rects}
    </StyledWave>
  )
}

export default Wave
