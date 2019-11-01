import { actions } from '@storybook/addon-actions';
import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton
};

export const Default = () => ({
  components: { MyButton },
  template: '<my-button label="I\'m a button!" @click="click" @dblclick="dblclick">(Double) click me to log the action</my-button>',
  methods: actions({ click: 'clicked', dblclick: 'double clicked' })
});
