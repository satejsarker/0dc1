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
//1 jatiow
  getData(){
//  return this.http.get('http://182.48.84.88:8080/dbc');
return this.http.get('http://182.48.84.88:8080/j');
  }
//2 rajniti
  getraj(){

  return this.http.get('http://182.48.84.88:8080/r');

}
//3 krishi
getkrishi(){

    return this.http.get('http://182.48.84.88:8080/kr');

  }
  // antorjatik 5
  getinternational(){
    return this.http.get('http://182.48.84.88:8080/a');
  }
  //6 khela
  getsports(){
    return this.http.get('http://182.48.84.88:8080/k');
  }
  //7 orthoniti
  geteeconomy(){
    return this.http.get('http://182.48.84.88:8080/o');
  }
  //8 shongskiriti
  getCulture(){
    return this.http.get('http://182.48.84.88:8080/sn');
  }
  //9  saradesh
getsaradesh(){
  return this.http.get('http://182.48.84.88:8080/sa');
}
//10 nari
getWomen(){
  return this.http.get('http://182.48.84.88:8080/n');
}
//probash **
getprobash(){
  return this.http.get('http://182.48.84.88:8080/p');
}
//11 special
getspecial(){
  return  this.http.get('http://182.48.84.88:8080/s');
}
//12 voganti
getvoganti(){
  return  this.http.get('http://182.48.84.88:8080/v');
}

//search
search(key){
  return this.http.get('localhost:4000/search/?headline='+key+"");
}


}
