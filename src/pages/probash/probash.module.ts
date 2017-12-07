import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProbashPage } from './probash';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    ProbashPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ProbashPage),
  ],
})
export class ProbashPageModule {}
