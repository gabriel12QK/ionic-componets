import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {
valid=false
  constructor(private toastController: ToastController,
    private loadingCtrl: LoadingController) {}


  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro Exitoso',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 2000,
      
    });
    loading.present();
      this.valid=true
      if(this.valid){
        this.presentToast()
      }
  }
}
