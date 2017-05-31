/**
 * @jest-environment node
*/
// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { Child, StyledCubeGrid } from '../styles'

test('render Child', () => {
  const wrapper = shallow(<Child />)
  expect(toJson(wrapper)).toMatchStyledComponentsSnapshot()
})

test('render without props', () => {
  const wrapper = shallow(<StyledCubeGrid size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchStyledComponentsSnapshot()
})
