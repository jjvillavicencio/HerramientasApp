import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Importar instancia servicio
import { MapsService } from '../../providers/maps-service';

@Component({
  selector: 'page-almacenar-coordenadas',
  templateUrl: 'almacenar-coordenadas.html',
  providers: [MapsService],
})
export class AlmacenarCoordenadas {

  todo = {}

  constructor(
    public mapsService: MapsService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlmacenarCoordenadas');
  }

  submit() {
    console.log(this.mapsService.postCoordenadas(this.todo));
  }

}
