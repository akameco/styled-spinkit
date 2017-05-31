import { configure, setAddon, addDecorator } from '@storybook/react'
import infoAddon from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

setAddon(infoAddon)
addDecorator(withKnobs)

configure(() => {
  require('./example')
}, module)
