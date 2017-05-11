import { configure, setAddon, addDecorator } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import backgrounds from 'react-storybook-addon-backgrounds'
// import { setOptions } from '@kadira/storybook-addon-options'

setAddon(infoAddon)
// setOptions({ downPanelInRight: true })

addDecorator(
  backgrounds([
    { name: 'Default', value: 'white', default: true },
    { name: 'Dark', value: '#2c3e50' },
  ])
)

addDecorator(withKnobs)

// const context = require.context('../src/', true, /example\.js$/)
// function loadStories() {
//   context.keys().forEach(context)
// }

configure(() => {
  require('./example')
}, module)
