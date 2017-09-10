// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { Child, StyledDoubleBounce } from '../styles'

test('render Child', () => {
  const wrapper = shallow(<Child />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('render without props', () => {
  const wrapper = shallow(<StyledDoubleBounce size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
