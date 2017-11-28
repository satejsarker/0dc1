import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JatiowPage } from './jatiow';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    JatiowPage,

  ],
  imports: [
    IonicPageModule.forChild(JatiowPage),
    PipesModule
  ],
  exports:[
    JatiowPage
  ]
})
export class JatiowPageModule {}
