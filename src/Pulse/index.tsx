import React from 'react'
import StyledPulse from './styles'

interface Props {
  size: number
  color: string
}

class Pulse extends React.PureComponent<Props> {
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
