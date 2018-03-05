import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaradeshPage } from './saradesh';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [
    SaradeshPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SaradeshPage),
    DirectivesModule
  ],
})
export class SaradeshPageModule {}
