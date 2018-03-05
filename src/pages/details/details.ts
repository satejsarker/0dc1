import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  text:any;
  link:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,
    private social:SocialSharing) {
    this.DATA=(this.navParams.get('datas'));
    this.text=this.DATA.headline;
    this.link="https://www.dbcnews.tv/paper/"+this.DATA.news_id;
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad DetailsPage');
    console.log(this.link)
    

  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  fbShare(){
    // this.social.shareViaFacebookWithPasteMessageHint(this.link,null,this.link,"go for it ").then(() => {
    //   console.log("message sent ");
    // }).catch((error)=>{
    //   console.log(error);
    // });

    this.social.shareWithOptions({message:this.text,subject:this.DATA.headline,chooserTitle:this.text,url:this.link,files:this.DATA.photo}).then(()=>
    {console.log("message sent ")}).catch((error)=>{
      console.log(error);
    })
    // this.social.canShareVia('imo',this.link,this.DATA.headline,this.DATA.photo,this.link).then(() => {
    //   console.log("message sent ");
    // }).catch((error)=>{
    //   console.log(error);
    // });
 

  }

}
