// @flow
import * as React from 'react'
import renderer from 'react-test-renderer'
import { Child, StyledFoldingCube } from './styles'

test('render Child', () => {
  const tree = renderer.create(<Child />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render Child second=true', () => {
  const tree = renderer.create(<Child second />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render without props', () => {
  const tree = renderer
    .create(<StyledFoldingCube size={40} color={'#333'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
