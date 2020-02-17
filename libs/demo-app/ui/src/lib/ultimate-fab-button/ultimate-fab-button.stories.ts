import { storiesOf } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';
import { UltimateFabButtonModule } from './ultimate-fab-button.module';
import { UltimateFabButtonComponent } from './ultimate-fab-button.component';

storiesOf('Toggle Icon Ionic story', module).add('Dynamic icon Demo', () => ({
  moduleMetadata: {
    imports: [UltimateFabButtonModule],
  },
  component: UltimateFabButtonComponent,
  props: {
    icon:
      text('Rename to "search" and see network tab, remote cdn asset loads', 'searching')
  },
}));
