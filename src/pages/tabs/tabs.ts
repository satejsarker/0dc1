import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';



@IonicPage({
  name:'TabsPage'
})
@Component({
  templateUrl: 'tabs.html',


})
export class TabsPage {
public toggled : boolean = false;

  rajniti:any = 'RajnitiPage';
  jatiow:any = 'JatiowPage';
   antorjatik:any="AntorjatikPage";
  Khela:any = 'KhelaPage';
  krishi:any='KrishiPage';
  nari: any = 'NariPage';
  Orthoniti:any='OrthonitiPage';
  probash:any='ProbashPage';
  saradesh:any='SaradeshPage';
  shongskriti:any='ShongskritiPage';
  voganti:any ='VogantiPage';



  constructor() {
this.toggled = false;
  }


public toggle() : void {
  this.toggled = this.toggled
    ? false
    : true;
}

cancelSearch($event){
  this.toggle();
}

}
