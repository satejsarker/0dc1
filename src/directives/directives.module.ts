import { NgModule } from '@angular/core';

import { OtherhideDirective } from './otherhide/otherhide';
import { HidebarDirective } from './hidebar/hidebar';
@NgModule({
	declarations: [HidebarDirective,
    OtherhideDirective],
	imports: [],
	exports: [HidebarDirective,
    OtherhideDirective]
})
export class DirectivesModule {}
