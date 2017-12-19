import { Component} from '@angular/core';
import { IonicPage, ModalController,AlertController } from 'ionic-angular';
import { MaindataProvider } from '../../providers/maindata/maindata';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the JatiowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jatiow',
  templateUrl: 'jatiow.html',


})
export class JatiowPage {
  newsAll:any=[];
  item:string[];
  data: any;
users=[];
status:any='';
fullData:any;
totalData = 0;
totalPage = 0;
  constructor(public dataSource:MaindataProvider,public modalCtral:ModalController,private nav:NavController,
  private network:Network, private alertCtrl:AlertController) {
    //   for (let i=0;i<2;i++){
    //   this.item.push(this.newsAll);
    //  }
    //  console.log(this.item)
     this.network.onDisconnect().subscribe(() => {
   console.log('network was disconnected :-(');

      setTimeout(() => {
      this.status='disconnected';
        this.presentAlert(this.status);
      }, 4000);


   });

    // this.network.onConnect().subscribe(()=>{
    //   console.log('network connected!');
    //   this.status='connected '



    //   setTimeout(() => {
    //     // if (this.network.type === 'wifi') {
    //     //   console.log('we got a wifi connection, woohoo!');
    //     //   this.status='wifi'
    //     //   this.presentAlert(this.status);
    //     // }
    //     // else{
    //       this.presentAlert(this.status);
    //     //}
    //   }, 1000);
    // });
   this.doRefresh(0);
    console.log(this.dataFatch())
  }

  doRefresh(refresh){
    this.dataFatch();

    if (refresh !=0){
      setTimeout(() => {
        console.log('Async operation has ended');
        refresh.complete();
      }, 1000);

    }


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad JatiowPage');
    // this.dataSource.getData().subscribe(data=>{
    //   this.newsAll=data;

    // })
  }
  dataFatch(){
    this.dataSource.getData().subscribe(res=>{
      this.data = res;
      for (let j=0;j<10;j++){
        this.users.push(this.data[j]);
      }



    })
  }
  presentAlert(value) {
    let alert = this.alertCtrl.create({
      title: 'Network',
      subTitle: value,
      buttons: ['Dismiss']
    });
    alert.present();
  }



  doInfinite(infiniteScroll) {
  setTimeout(() => {
    console.log('Async operation has started');
   this.dataSource.getData()
       .subscribe(
         res => {
           this.data = res;

           this.totalData=this.data.length;
           this.totalPage=this.users.length;
           console.log(this.totalPage+ " -"+this.totalData);
           console.log(this.users.length);
           if(this.users.length<this.data.length){
              for(let i=this.totalPage; i<this.totalPage+10; i++) {
             this.users.push(this.data[i]);
           }

           }

         }
       );

    console.log('Async operation has ended');
    infiniteScroll.complete();

  }, 500);

}
 details(data){
  //  let modal=this.modalCtral.create('DetailsPage',{datas:data});
  //  modal.present();
this.nav.push('DetailsPage',{datas:data})

 }




}
