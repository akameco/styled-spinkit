import React from 'react'
import renderer from 'react-test-renderer'
import { StyledForldingCircle } from './styles'

test('render without props', () => {
  const tree = renderer
    .create(<StyledForldingCircle size={40} color={'#333'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
