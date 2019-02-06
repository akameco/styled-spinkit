import React from 'react'
import renderer from 'react-test-renderer'
import { StyledWave } from './styles'

test('render without props', () => {
  const tree = renderer
    .create(<StyledWave size={40} color={'#333'} speed={0} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
