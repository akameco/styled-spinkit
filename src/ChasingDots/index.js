// @flow
import * as React from 'react'
import { StyledChangeDots, Child } from './styles'

type Props = {
  size: number,
  color: string,
}

class ChangeDots extends React.PureComponent<Props, void> {
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
