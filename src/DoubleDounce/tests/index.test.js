// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Comp from '../'

test('render without props', () => {
  const wrapper = shallow(<Comp />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
