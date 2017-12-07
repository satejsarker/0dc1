import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthonitiPage } from './orthoniti';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    OrthonitiPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(OrthonitiPage),

  ],

})
export class OrthonitiPageModule {}
