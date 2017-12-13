import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaradeshPage } from './saradesh';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    SaradeshPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SaradeshPage),
  ],
})
export class SaradeshPageModule {}
