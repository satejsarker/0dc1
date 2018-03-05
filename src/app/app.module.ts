import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MaindataProvider } from '../providers/maindata/maindata';
import{HttpClientModule} from '@angular/common/http'
import   {Network} from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MaindataProvider,
    SocialSharing
  ],
})
export class AppModule {
  constructor(private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);


    // set status bar to white
    this.statusBar.backgroundColorByHexString('#C82027');
    this.statusBar.show();
   }
}
