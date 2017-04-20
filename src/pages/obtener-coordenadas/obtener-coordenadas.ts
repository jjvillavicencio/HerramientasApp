import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// Importar instancia servicio
import { MapsService } from '../../providers/maps-service';


@Component({
  selector: 'page-obtener-coordenadas',
  templateUrl: 'obtener-coordenadas.html',
  providers: [MapsService]
})
export class ObtenerCoordenadas {

  public listCoor: any;

  constructor(
    public mapsService: MapsService,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.listCoor = [];

  }

  ionViewDidLoad() {
    this.mapsService.getCoordenadas()
      .subscribe(coordenadas => {
        this.listCoor.push(coordenadas);
      });

    console.log(this.listCoor);
    console.log('ionViewDidLoad ObtenerCoordenadas');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
