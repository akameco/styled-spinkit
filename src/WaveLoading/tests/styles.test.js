/**
 * @jest-environment node
*/
// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { Rect, StyledWave } from '../styles'

test('render Child', () => {
  const wrapper = shallow(<Rect />)
  expect(toJson(wrapper)).toMatchStyledComponentsSnapshot()
})

test('render without props', () => {
  const wrapper = shallow(<StyledWave size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchStyledComponentsSnapshot()
})
