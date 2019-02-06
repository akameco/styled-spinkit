import React from 'react'
import { Child, StyledThreeBounce } from './styles'

interface Props {
  size: number
  color: string
}

class ThreeBounce extends React.PureComponent<Props> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `__styled-spinkit__ThreeBounce`

  render() {
    return (
      <StyledThreeBounce {...this.props}>
        <Child delay={-0.32} />
        <Child delay={-0.16} />
        <Child delay={0} />
      </StyledThreeBounce>
    )
  }
}

export default ThreeBounce
