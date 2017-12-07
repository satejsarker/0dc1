import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShongskritiPage } from './shongskriti';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    ShongskritiPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ShongskritiPage),
  ],
})
export class ShongskritiPageModule {}
