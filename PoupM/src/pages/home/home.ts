import { Component } from '@angular/core';
import { IonicPage,NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
  public navParams: NavParams) {

  }
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Boas vindas ${data.email}`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: 'Não foi possível autenticar.',
          duration: 3000
        }).present();
      }
    });
}

}
