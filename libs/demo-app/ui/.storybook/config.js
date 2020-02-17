import { configure, addParameters, addDecorator } from '@storybook/angular';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

const newViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '100%',
      height: '100%',
    },
    type: 'desktop',
  },
};

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  viewport: {
    defaultViewport: 'desktop',
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});

configure(require.context('../src/lib', true, /\.stories\.ts?$/), module);
