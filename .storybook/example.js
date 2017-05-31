import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import * as Components from '../src'

const removePrefix = (name /* : string */) =>
  name.replace('__styled-spinkit__', '')

Object.keys(Components).forEach(key => {
  const Component = Components[key] // eslint-disable-line import/namespace

  storiesOf(`${removePrefix(Component.displayName)}`, module)
    .addWithInfo(
      'render',
      () => (
        <Component color={text('color', '#333')} size={number('number', 40)} />
      ),
      { inline: true }
    )
    .addWithInfo(
      'render magenta 60',
      () => (
        <Component
          color={text('color', 'magenta')}
          size={number('number', 60)}
        />
      ),
      { inline: true }
    )
})
