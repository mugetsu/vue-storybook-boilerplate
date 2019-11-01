import { configure, addParameters, addDecorator } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

addParameters({
  options: {
    hierarchyRootSeparator: /\|/
  },
  docs: {
    inlineStories: true
  }
});

configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);
