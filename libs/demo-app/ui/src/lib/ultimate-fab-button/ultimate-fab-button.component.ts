import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-ultimate-fab-button',
  templateUrl: './ultimate-fab-button.component.html',
  styleUrls: ['./ultimate-fab-button.component.scss']
})
export class UltimateFabButtonComponent {
@Input() icon:string;

}
