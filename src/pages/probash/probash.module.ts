import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProbashPage } from './probash';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [
    ProbashPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ProbashPage),
    DirectivesModule
  ],
})
export class ProbashPageModule {}
