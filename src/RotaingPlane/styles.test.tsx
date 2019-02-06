import React from 'react'
import renderer from 'react-test-renderer'
import StyledRotaingPlain from './styles'

test('render without props', () => {
  const tree = renderer
    .create(<StyledRotaingPlain speed={1.2} size={40} color={'#333'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
