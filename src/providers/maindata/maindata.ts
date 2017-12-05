import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MaindataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MaindataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MaindataProvider Provider');
  }

  getData(){
 return this.http.get('http://bdsportsnews71.com/homenational');
  }

  getraj(){

  return this.http.get('http://bdsportsnews71.com/homepolitics');

}
}
