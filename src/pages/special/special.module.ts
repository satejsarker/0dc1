import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialPage } from './special';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    SpecialPage,
  ],
  imports: [
    PipesModule,
    DirectivesModule,
    IonicPageModule.forChild(SpecialPage),
  ],
})
export class SpecialPageModule {}
