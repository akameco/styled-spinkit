/**
 * @jest-environment node
*/
// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { Child, StyledChangeDots } from '../styles'

test('render Child', () => {
  const wrapper = shallow(<Child />)
  expect(toJson(wrapper)).toMatchStyledComponentsSnapshot()
})

test('render Child second=true', () => {
  const wrapper = shallow(<Child second />)
  expect(toJson(wrapper)).toMatchStyledComponentsSnapshot()
})

test('render without props', () => {
  const wrapper = shallow(<StyledChangeDots size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchStyledComponentsSnapshot()
})
