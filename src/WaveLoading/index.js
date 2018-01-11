// @flow
import * as React from 'react'
import roundTo from 'round-to'
import { getRange } from '../util'
import { Rect, StyledWave } from './styles'

type Props = {
  size: number,
  color: string,
}

class Wave extends React.PureComponent<Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `__styled-spinkit__Wave`

  render() {
    const speed = 1.2
    const rectCount = 5
    const delayRange = 0.4

    const rects = getRange(rectCount).map(v => (
      <Rect
        delay={roundTo(-speed + delayRange / (rectCount - 1) * v, 1)}
        key={v}
      />
    ))

    return (
      <StyledWave speed={speed} {...this.props}>
        {rects}
      </StyledWave>
    )
  }
}

export default Wave
