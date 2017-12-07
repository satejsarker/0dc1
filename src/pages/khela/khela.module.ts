import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KhelaPage } from './khela';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    KhelaPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(KhelaPage),

  ],
  exports:[
    KhelaPage
  ]
})
export class KhelaPageModule {}
