// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import StyledRotaingPlain from '../styles'

test('render without props', () => {
  const wrapper = shallow(<StyledRotaingPlain size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
