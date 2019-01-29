// @flow
import * as React from 'react'
import renderer from 'react-test-renderer'
import { Rect, StyledWave } from './styles'

test('render Child', () => {
  const tree = renderer.create(<Rect />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render without props', () => {
  const tree = renderer.create(<StyledWave size={40} color={'#333'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
