// @flow
import React from 'react'
import { StyledChangeDots, Child } from './styles'

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class ChangeDots extends React.PureComponent<DefaultProps, Props, void> {
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
