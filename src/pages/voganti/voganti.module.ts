import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VogantiPage } from './voganti';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    VogantiPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(VogantiPage),
    DirectivesModule

  ],
})
export class VogantiPageModule {}
