import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCrtl: ToastController
  ) {
    
  }

  public async presentLoading(){
    this.loading = await this.loadingCtrl.create({ message: "Por favor, aguarde..." });
    return this.loading.present();
  }

  public async presentToast(message: string){
    const toast = await this.toastCrtl.create({ message,  duration: 3000 });
    toast.present();
  }  
}
