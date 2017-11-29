import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RajnitiPage } from './rajniti';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    RajnitiPage,
  ],
  imports: [
    IonicPageModule.forChild(RajnitiPage),
PipesModule
  ],
})
export class RajnitiPageModule {}
