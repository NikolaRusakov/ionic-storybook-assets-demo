import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UltimateFabButtonModule } from '@app/demo-app/ui';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UltimateFabButtonModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
