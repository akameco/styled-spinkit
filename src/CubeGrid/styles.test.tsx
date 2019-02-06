import React from 'react'
import renderer from 'react-test-renderer'
import { StyledCubeGrid } from './styles'

test('render without props', () => {
  const tree = renderer
    .create(<StyledCubeGrid size={40} color={'#333'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
