import { NgModule } from '@angular/core';


import { DateformPipe } from './dateform/dateform';
import { StPipe } from './st/st';
@NgModule({
	declarations: [
    DateformPipe,
    StPipe
  ],
	imports: [],
	exports: [
    DateformPipe,
    StPipe,
  ]
})
export class PipesModule {}
