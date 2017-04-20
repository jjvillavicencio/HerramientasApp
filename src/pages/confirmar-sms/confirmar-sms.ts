import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Importar instancia servicio
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-confirmar-sms',
  templateUrl: 'confirmar-sms.html',
  providers: [InAppBrowser]
})
export class ConfirmarSms {

  constructor(
    public inAppBrowser: InAppBrowser,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarSms');
  }

    verificarSms() {
    const options = {
      accentColor: '#ff0000',
      backgroundColor: '#ffffff',
    };

    this.inAppBrowser.create('https://ionic.io').executeScript("window.plugins.digits.authenticate(options,  (oAuthHeaders) => {    console.log(oAuthHeaders); },  (error) => {    console.warn('[Digits]', 'Login failed', error);  });");

  }

}
