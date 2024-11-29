import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculo-detalles',
  templateUrl: './vehiculo-detalles.component.html',
  styleUrls: ['./vehiculo-detalles.component.scss'],
})
export class VehiculoDetallesComponent {
  @Input() vehiculo: any;
  


  constructor(private modalController: ModalController) {}

  cancel() {
    this.modalController.dismiss();
  }

  confirm() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
