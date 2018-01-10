// @flow
import * as React from 'react'
import StyledRotaingPlain from './styles'

const speed = 1.2

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class RotaingPlain extends React.PureComponent<Props, void> {
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
