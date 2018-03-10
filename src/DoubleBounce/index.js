// @flow
import * as React from 'react'
import { Child, StyledDoubleBounce } from './styles'

type Props = {
  size: number,
  color: string,
}

class DoubleBounce extends React.PureComponent<Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `__styled-spinkit__DoubleBounce`

  render() {
    return (
      <StyledDoubleBounce {...this.props}>
        <Child />
        <Child isDelay />
      </StyledDoubleBounce>
    )
  }
}

export default DoubleBounce
