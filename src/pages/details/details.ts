import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  DATA:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.DATA=(this.navParams.get('datas'));
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
