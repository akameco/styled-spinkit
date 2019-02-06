import React from 'react'
import StyledRotaingPlain from './styles'

const speed = 1.2

interface Props {
  size: number
  color: string
}

class RotaingPlain extends React.PureComponent<Props> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `__styled-spinkit__RotaingPlain`

  render() {
    return <StyledRotaingPlain {...this.props} speed={speed} />
  }
}

export default RotaingPlain
