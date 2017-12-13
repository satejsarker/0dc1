import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VogantiPage } from './voganti';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    VogantiPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(VogantiPage),

  ],
})
export class VogantiPageModule {}
