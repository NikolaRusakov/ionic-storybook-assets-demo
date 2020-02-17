import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimateFabButtonComponent } from './ultimate-fab-button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UltimateFabButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UltimateFabButtonComponent],
})
export class UltimateFabButtonModule { }
