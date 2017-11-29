import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { MaindataProvider } from '../../providers/maindata/maindata';


@IonicPage()
@Component({
  selector: 'page-rajniti',
  templateUrl: 'rajniti.html',
})
export class RajnitiPage {
  newsAll:any=[];
  item:string[];
  data: any;
users=[];
fullData:any;
totalData = 0;
totalPage = 0;

  constructor(public modalCtral:ModalController,public dataSource:MaindataProvider) {
    this.dataFatch();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RajnitiPage');
  }

  dataFatch(){
    this.dataSource.getraj().subscribe(res=>{
      this.data = res;
      for (let j=0;j<10;j++){
        this.users.push(this.data[j]);
      }



    })
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      console.log('Async operation has started');
     this.dataSource.getraj()
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
