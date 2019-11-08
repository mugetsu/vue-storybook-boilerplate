import requireContext from 'require-context.macro'
import { configure, addParameters, addDecorator } from '@storybook/vue'
import { configureActions } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import './style.scss'

const req = requireContext('../stories', true, /\.stories\.(js|mdx)$/)

addDecorator(withA11y)

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    panelPosition: 'bottom'
  },
  docs: {
    inlineStories: true
  },
  backgrounds: [
    { name: 'dark', value: '#000000' }
  ]
})

configureActions({
  limit: 5
})

configure(req, module)
