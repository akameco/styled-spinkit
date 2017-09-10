// @flow
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import StyledPulse from '../styles'

test('render without props', () => {
  const wrapper = shallow(<StyledPulse size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
