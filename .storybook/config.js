import { configure, addParameters, addDecorator } from '@storybook/vue'
import { configureActions } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'

import './style.scss'

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

configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module)
