import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { MaindataProvider } from '../../providers/maindata/maindata';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

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
fullData:any;
totalData = 0;
totalPage = 0;
  constructor(public dataSource:MaindataProvider,public modalCtral:ModalController) {
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
   let modal=this.modalCtral.create('DetailsPage',{datas:data});
   modal.present();


 }




}
