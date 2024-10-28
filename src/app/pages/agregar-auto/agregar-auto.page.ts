import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewDidEnter, ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';
import { AnimationController, Animation, IonCard } from '@ionic/angular';
import { VehiculoService } from 'src/app/services/vehiculo.service'; // Servicio para manejar vehículos
import { HelperService } from 'src/app/services/helper.service'; // Para mostrar alertas
import { StorageService } from 'src/app/services/storage.service'; // Para gestionar el almacenamiento local
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera'; // Para tomar fotos
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.page.html',
  styleUrls: ['./agregar-auto.page.scss'],
})
export class AgregarAutoPage implements OnInit {
  marca: string = '';
  modelo: string = '';
  anio: number = 0;
  color: string = '';
  //capacidadPasajero: string = '';
  patente: string = '';
  tipo_combustible: string = '';
  imagen: any;
  constructor(
    private vehiculoService: VehiculoService, // Servicio para manejar vehículos
    private animationCtrl: AnimationController,
    private helper: HelperService, // Para mostrar alertas
    private router: Router, // Para la navegación
    private storageService: StorageService, // Para obtener el token almacenado
    private location: Location
  ) { }

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLModElement> | undefined;
  private animation: Animation | undefined;

  ngOnInit() { }

  // Método para registrar el vehículo
  async registroVehiculo() {
    const dataStorage = await this.storageService.obtenerStorage();
    const token = await this.storageService.getItem('token');
    const id_usuario = dataStorage[0]?.id_usuario;
    
    if(token) {
      const req = await this.vehiculoService.agregarVehiculo(
        {
          p_marca: this.marca,
          p_modelo: this.modelo,
          p_color: this.color,
          p_patente: this.patente,
          token: token,
          p_id_usuario: id_usuario,
          p_anio: this.anio,
          p_tipo_combustible: this.tipo_combustible
        },
        this.imagen
      );
      await this.helper.showAlert("Vehículo agregado exitosamente.", "Éxito");
    } else {
      await this.helper.showAlert("Token no encontrado, inicia sesión nuevamente.", "Error");
    }
    this.router.navigate(['/vehiculo'])
  }

  // Método para tomar la foto del vehículo
  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    
    if (image.webPath) {
      const response = await fetch(image.webPath);
      const blob = await response.blob();

      this.imagen = {
        fname: 'foto' + image.format,
        src: image.webPath,
        file: blob
      };
    }

    var imageUrl = image.webPath;
    this.imagen.src = imageUrl;
  }

  ionViewDidLeave(): void {
    console.log("view did leave");
    
  }
  ionViewWillLeave(): void {
    console.log("view will leave");
    
  }

ionViewDidEnter(): void {
    console.log("view did enter");
    if (this.card) {
      this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
    }
  }

  ionViewWillEnter(): void {
    console.log("view will enter");
  }
  
  clickPerfil(){
    this.router.navigate(['/perfil'])
  }

  clickViaje(){
    this.router.navigate(['/viaje'])
  }

  clickAyuda(){
    this.router.navigate(['/ayuda'])
  }

  clickInicio(){
    this.router.navigate(['/inicio'])
  }

  goBack() {
    this.location.back();
  }

  /*registrarVehiculo() {
    const nuevoVehiculo = {

      marca: this.marca,
      modelo: this.modelo,
      anio: this.anio,
      color: this.color,
      capacidadPasajero: this.capacidadPasajero,
      patente: this.patente,
    };
    this.vehiculoService.agregarVehiculo(nuevoVehiculo);
    // Limpiar los campos después de registrar el vehículo
    this.marca = '';
    this.modelo = '';
    this.anio = '';
    this.color ='';
    this.capacidadPasajero = '';
    this.patente = '';

  };*/
}