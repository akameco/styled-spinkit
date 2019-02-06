import React from 'react'
import renderer from 'react-test-renderer'
import { StyledFoldingCube } from './styles'

test('render without props', () => {
  const tree = renderer
    .create(<StyledFoldingCube size={40} color={'#333'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
