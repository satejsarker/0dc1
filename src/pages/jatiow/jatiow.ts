import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaindataProvider } from '../../providers/maindata/maindata';

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
errorMessage: string;
page = 1;

totalData = 0;
totalPage = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataSource:MaindataProvider) {
    //   for (let i=0;i<2;i++){
    //   this.item.push(this.newsAll);
    //  }
    //  console.log(this.item);
    this.dataFatch();


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
              for(let i=this.users.length; i<this.totalPage+10; i++) {
             this.users.push(this.data[i]);
           }

           }

         }
       );

    console.log('Async operation has ended');
    infiniteScroll.complete();

  }, 500);

}
  // doInfinite(): Promise<any>{
  //   console.log('Begin async operation');

  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       for (var i = 0; i < 2; i++) {
  //         this.item.push(this.newsAll);

  //       }
  //       console.log(this.item)

  //       console.log('Async operation has ended');
  //       resolve();
  //     }, 500);
  //   })
  // }
    // console.log("loading content started ");

    // setTimeout(()=>{
    //   for (let i=0;i<2;i++){
    //     this.item.push(this.item.length+this.newsAll[this.item.length]);

    //     console.log(this.item);
    //     event.complete();
    //   }
    //   console.log("loading content stopped");
    // },3000);





}
