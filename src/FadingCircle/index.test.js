// @flow
import * as React from 'react'
import renderer from 'react-test-renderer';
import Comp from '.'

test('render without props', () => {
  const tree = renderer.create(<Comp />).toJSON()
  expect(tree).toMatchSnapshot()
})
