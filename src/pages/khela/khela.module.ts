import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KhelaPage } from './khela';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [
    KhelaPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(KhelaPage),
    DirectivesModule

  ],
  exports:[
    KhelaPage
  ]
})
export class KhelaPageModule {}
