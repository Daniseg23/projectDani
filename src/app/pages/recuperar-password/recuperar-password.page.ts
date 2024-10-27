import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  correo: string = "";

  constructor(private firebase: FirebaseService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async registro() {
    // Llama al método resetPassWord y espera su respuesta
    const response = await this.firebase.resetPassWord(this.correo);

    // Muestra un mensaje según la respuesta
    if (response.success) {
      this.mostrarAlerta('Éxito', response.message);
    } else {
      this.mostrarAlerta('Error', response.message);
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}
