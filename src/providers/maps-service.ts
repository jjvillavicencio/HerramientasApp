import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MapsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MapsService {
  constructor(public http: Http) {
    console.log('Hello MapsService Provider');

  }

  getCoordenadas(){
    return this.http.get('http://190.111.83.39/sw/TaxiKlix_Testing/getUbicacion.php')
    .map(res => res.json() );
  }

  postCoordenadas(coor) {
    console.log(coor);

    let link = 'http://190.111.83.39/sw/TaxiKlix_Testing/setUbicacion.php';
    let data = JSON.stringify(coor);
    console.log(data);

    this.http.post(link, data)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log("Oooops!");
    });

      
  }
}
