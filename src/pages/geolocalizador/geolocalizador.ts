import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-geolocalizador',
  templateUrl: 'geolocalizador.html',
})
export class Geolocalizador {

  constructor(
    public locationTracker: LocationTracker,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Geolocalizador');
  }

  start() {
    this.locationTracker.startTracking();
  }

  stop() {
    this.locationTracker.stopTracking();
  }

}
