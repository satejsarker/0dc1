import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RajnitiPage } from './rajniti';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';



@NgModule({
  declarations: [
    RajnitiPage,
  ],
  imports: [
    IonicPageModule.forChild(RajnitiPage),
PipesModule,
DirectivesModule
  ],
})
export class RajnitiPageModule {}
