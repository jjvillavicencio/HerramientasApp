import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

// Importar instancia servicio
import { MapsService } from '../providers/maps-service';


@Injectable()
export class LocationTracker {

  public watch: any;    
  public lat: number = 0;
  public lng: number = 0;
  todo = {};


  constructor(public http: Http, 
  public zone: NgZone, 
  public backgroundGeolocation: BackgroundGeolocation, 
  public geolocation: Geolocation, 
  public mapsService: MapsService) {
    console.log('Hello LocationTracker Provider');
  }

  startTracking() {
 
  // Background Tracking
 
  let config = {
    desiredAccuracy: 0,
    stationaryRadius: 1,
    distanceFilter: 1, 
    debug: false,
    interval: 1000 
  };
 
  this.backgroundGeolocation.configure(config).subscribe((location) => {
 
    console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
 
    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = location.latitude;
      this.lng = location.longitude;
    });
 
  }, (err) => {
 
    console.log(err);
 
  });
 
  // Turn ON the background-geolocation system.
  this.backgroundGeolocation.start();
 
 
  // Foreground Tracking
 
let options = {
  frequency: 2000, 
  enableHighAccuracy: true
};
 
this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
 
  console.log(position);
 
  // Run update inside of Angular's zone
  this.zone.run(() => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    this.todo = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    this.mapsService.postCoordenadas(this.todo);
  });
 
});
 
}
 
stopTracking() {
 
  console.log('stopTracking');
 
  this.backgroundGeolocation.finish();
  this.watch.unsubscribe();
 
}

}
