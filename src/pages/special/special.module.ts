import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialPage } from './special';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SpecialPage,
  ],
  imports: [
    PipesModule
    ,
    IonicPageModule.forChild(SpecialPage),
  ],
})
export class SpecialPageModule {}
