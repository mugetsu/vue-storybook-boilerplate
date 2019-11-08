import { actions } from '@storybook/addon-actions'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import setCentered from '@storybook/addon-centered/vue'
import MyButton from 'components/MyButton/index.vue'

export default {
	title: 'MyButton',
	decorators: [ withKnobs, setCentered ],
	component: MyButton,
	parameters: {
		componentSubtitle: 'This is MyButton'
	}
}

export const Default = () => ({
	components: { MyButton },
	template: `<my-button
      :label="label"
      :color="color"
      :rounded="rounded"
      @click="click"
      @dblclick="dblclick" />`,
	methods: actions({ click: 'clicked', dblclick: 'double clicked' }),
	props: {
		label: {
			default: text('Label', '(Double) Click me to log the action')
		},
		color: {
			default: text('Color', '#DDDDDD')
		},
		rounded: {
			default: boolean('Is rounded?', false)
		}
	}
})

export const Rounded = () => ({
	components: { MyButton },
	template: '<my-button :rounded="true">Rounded</my-button>'
})

Rounded.story = {
	parameters: {
		docs: {
			storyDescription: 'hell roundz'
		}
	}
}

export const Colored = () => ({
	components: { MyButton },
	template: '<my-button color="#000000">Colored</my-button>'
})

Colored.story = {
	parameters: {
		docs: {
			storyDescription: 'meh colour3d'
		}
	}
}
