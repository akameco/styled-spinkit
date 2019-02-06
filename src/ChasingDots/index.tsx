import React from 'react'
import { StyledChangeDots, Child } from './styles'

interface Props {
  size: number
  color: string
}

class ChangeDots extends React.PureComponent<Props> {
  static defaultProps = {
    size: 40,
    color: '#eee',
  }

  static displayName = `__styled-spinkit__ChangeDots`

  render() {
    return (
      <StyledChangeDots {...this.props}>
        <Child />
        <Child second />
      </StyledChangeDots>
    )
  }
}

export default ChangeDots
