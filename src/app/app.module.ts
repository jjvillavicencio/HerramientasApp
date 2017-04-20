import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ObtenerCoordenadas } from '../pages/obtener-coordenadas/obtener-coordenadas';
import { AlmacenarCoordenadas } from '../pages/almacenar-coordenadas/almacenar-coordenadas';
import { Geolocalizador } from '../pages/geolocalizador/geolocalizador';
import { ConfirmarSms } from '../pages/confirmar-sms/confirmar-sms';
import { LocationTracker } from '../providers/location-tracker';
import { MapsService } from '../providers/maps-service';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ObtenerCoordenadas,
    AlmacenarCoordenadas,
    Geolocalizador,
    ConfirmarSms
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ObtenerCoordenadas,
    AlmacenarCoordenadas,
    Geolocalizador,
    ConfirmarSms
  ],
  providers: [
    LocationTracker,
    BackgroundGeolocation,
    Geolocation,
    MapsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
