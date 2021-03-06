import { Component, ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MaindataProvider } from '../providers/maindata/maindata';




@Component({
  templateUrl: 'app.html',

})
export class MyApp {
  rootPage:string = 'TabsPage';
  @ViewChild(Nav) nav:Nav;
  pages: Array<{title: string, component: any}>;

  dataS:any;


constructor(platform : Platform, statusBar : StatusBar, splashScreen : SplashScreen, public datalink : MaindataProvider) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages=[
          {title: "জাতীয়",component:'JatiowPage'},
                {title:'রাজনীতি',component:'RajnitiPage'},
                 {title:'আন্তর্জাতিক',component:'AntorjatikPage'},
                {title:'অর্থনীতি',component:'OrthonitiPage'},
                {title:"খেলা",component:'KhelaPage'},
                {title:"কৃষি",component:'KrishiPage'},
                {title:"নারী",component:'NariPage'},
                {title:"প্রবাস",component:'ProbashPage'},
                {title:"স্পেশাল",component:'SpecialPage'},
                {title:"সারাদেশ", component:'SaradeshPage'},
                {title:"সংস্কৃতি",component:'ShongskritiPage'},
                {title:"ভোগান্তি",component:'VogantiPage'},

   ];
             });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
  search(){
    this.nav.push('SearchPage');

  }




}
