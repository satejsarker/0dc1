import { NgModule } from '@angular/core';
import { DatePipe } from './date/date';
import { DateFPipe } from './date-f/date-f';
@NgModule({
	declarations: [DatePipe,
    DateFPipe],
	imports: [],
	exports: [DatePipe,
    DateFPipe]
})
export class PipesModule {}
