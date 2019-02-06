import React from 'react'
import roundTo from 'round-to'
import { getRange } from '../util'
import { Child, StyledCircle } from './styles'

interface Props {
  size: number
  color: string
}

class Circle extends React.PureComponent<Props> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `__styled-spinkit__Circle`

  render() {
    const count = 12
    const speed = 1.2

    const circles = getRange(count).map(k => {
      const transform = roundTo((360 / count) * (k + 1), 1)
      const delay = roundTo(-speed + (speed / count) * k, 1)
      return <Child key={delay} delay={delay} transform={transform} />
    })

    return <StyledCircle {...this.props}>{circles}</StyledCircle>
  }
}

export default Circle
