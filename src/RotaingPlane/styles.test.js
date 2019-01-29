// @flow
import * as React from 'react'
import renderer from 'react-test-renderer'
import StyledRotaingPlain from './styles'

test('render without props', () => {
  const tree = renderer
    .create(<StyledRotaingPlain size={40} color={'#333'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
