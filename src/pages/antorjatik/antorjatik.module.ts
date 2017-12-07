import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntorjatikPage } from './antorjatik';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    AntorjatikPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(AntorjatikPage),
  ],
  exports:[
AntorjatikPage
  ]
})
export class AntorjatikPageModule {}
