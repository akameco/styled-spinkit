// @flow
import * as React from 'react'
import roundTo from 'round-to'
import { getRange } from '../util'
import { Child, StyledForldingCircle } from './styles'

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class ForldingCircle extends React.PureComponent<Props, void> {
  static defaultProps = {
    size: 40,
    color: '#333',
  }

  static displayName = `__styled-spinkit__ForldingCircle`

  render() {
    const count = 12
    const range = 1.2
    const circles = getRange(count).map(v => (
      <Child
        key={v}
        rotate={roundTo(360 / count * v, 1)}
        delay={roundTo(range - range / count * v, 2)}
      />
    ))

    return (
      <StyledForldingCircle {...this.props}>{circles}</StyledForldingCircle>
    )
  }
}

export default ForldingCircle
