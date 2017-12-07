import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KrishiPage } from './krishi';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    KrishiPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(KrishiPage),

  ],
})
export class KrishiPageModule {}
