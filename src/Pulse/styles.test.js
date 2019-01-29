// @flow
import * as React from 'react'
import renderer from 'react-test-renderer'
import StyledPulse from './styles'

test('render without props', () => {
  const tree = renderer.create(<StyledPulse size={40} color={'#333'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
