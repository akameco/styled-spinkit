// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { Child, StyledFoldingCube } from '../styles'

test('render Child', () => {
  const wrapper = shallow(<Child />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('render Child second=true', () => {
  const wrapper = shallow(<Child second />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('render without props', () => {
  const wrapper = shallow(<StyledFoldingCube size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
