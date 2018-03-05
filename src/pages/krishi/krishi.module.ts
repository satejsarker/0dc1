import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KrishiPage } from './krishi';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [
    KrishiPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(KrishiPage),
    DirectivesModule

  ],
})
export class KrishiPageModule {}
