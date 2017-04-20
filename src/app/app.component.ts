import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ObtenerCoordenadas } from '../pages/obtener-coordenadas/obtener-coordenadas';
import { AlmacenarCoordenadas } from '../pages/almacenar-coordenadas/almacenar-coordenadas';
import { Geolocalizador } from '../pages/geolocalizador/geolocalizador';
import { ConfirmarSms } from '../pages/confirmar-sms/confirmar-sms';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  paginas: Array<{titulo: string, component: any}>;

  constructor(platform: Platform, 
  statusBar: StatusBar, 
  splashScreen: SplashScreen) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    this.paginas = [
      { titulo: 'Obtener Coordenadas', component: ObtenerCoordenadas },
      { titulo: 'Almacenar Coordenadas', component: AlmacenarCoordenadas },
      { titulo: 'Geolocalizador', component: Geolocalizador },
      { titulo: 'Confirmar SMS', component: ConfirmarSms }
    ];

  }
  irPagina(pagina){
    console.log(pagina.component);
		this.nav.setRoot(pagina.component);
	}
}

