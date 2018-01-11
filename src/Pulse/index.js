// @flow
import * as React from 'react'
import StyledPulse from './styles'

type Props = {
  size: number,
  color: string,
}

class Pulse extends React.PureComponent<Props, void> {
  static defaultProps = {
    size: 40,
    color: '#333',
  }

  static displayName = `__styled-spinkit__Pulse`

  render() {
    return <StyledPulse {...this.props} />
  }
}

export default Pulse
