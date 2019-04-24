import React from 'react'
import { SpinkitProps, DEFAULT_SIZE, DEFAULT_COLOR } from '../types'
import StyledRotaingPlain from './styles'

const speed = 1.2

const RotaingPlain: React.FC<SpinkitProps> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
}) => {
  return <StyledRotaingPlain className={className} size={size} color={color} speed={speed} />
}

export default RotaingPlain
