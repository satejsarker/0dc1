import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NariPage } from './nari';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    NariPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(NariPage),

  ],
})
export class NariPageModule {}
