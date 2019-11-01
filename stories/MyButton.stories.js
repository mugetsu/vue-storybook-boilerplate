import { actions } from '@storybook/addon-actions';
import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton,
  parameters: {
    componentSubtitle: 'This is MyButton'
  }
};

export const Default = () => ({
  components: { MyButton },
  template: '<my-button label="I\'m a button!" @click="click" @dblclick="dblclick">(Double) click me to log the action</my-button>',
  methods: actions({ click: 'clicked', dblclick: 'double clicked' })
});

export const Rounded = () => ({
  components: { MyButton },
  template: '<my-button :rounded="true">Rounded</my-button>'
});

Rounded.story = {
  parameters: {
    docs: {
      storyDescription: 'hell roundz'
    }
  }
};

export const Colored = () => ({
  components: { MyButton },
  template: '<my-button color="#000000">Colred</my-button>'
});

Colored.story = {
  parameters: {
    docs: {
      storyDescription: 'meh colour3d'
    }
  }
};