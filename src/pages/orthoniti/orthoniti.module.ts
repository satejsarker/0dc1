import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthonitiPage } from './orthoniti';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [
    OrthonitiPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(OrthonitiPage),
    DirectivesModule

  ],

})
export class OrthonitiPageModule {}
