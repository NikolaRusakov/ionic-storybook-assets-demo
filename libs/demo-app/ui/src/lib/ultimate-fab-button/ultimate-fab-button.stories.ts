import { storiesOf } from '@storybook/angular';
import { text, date, boolean } from '@storybook/addon-knobs';
import { UltimateFabButtonModule } from './ultimate-fab-button.module';
import { UltimateFabButtonComponent } from './ultimate-fab-button.component';

storiesOf('Main Slider stories', module).add('Main Slider', () => ({
  moduleMetadata: {
    imports: [UltimateFabButtonModule],
  },
  component: UltimateFabButtonComponent,
  props: {
    icon:
      text('Icon toggle', 'searching')
  },
}));
