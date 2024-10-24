import { Component, OnInit } from '@angular/core';
import { ViajeService } from 'src/app/services/viaje.service'; 
import { HelperService } from 'src/app/services/helper.service'; // Para mostrar alertas
import { StorageService } from 'src/app/services/storage.service'; // Para gestionar el almacenamiento local
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera'; // Para tomar fotos

@Component({
  selector: 'app-viaje-agregar',
  templateUrl: './viaje-agregar.page.html',
  styleUrls: ['./viaje-agregar.page.scss'],
})
export class ViajeAgregarPage implements OnInit {
  ubicacion_origen: string = '';
  ubicacion_destino: string = '';
  costo: string = '';
  id_vehiculo: number = 0;
  imagen: any;

  constructor(
    private viajeService: ViajeService, // Servicio para manejar vehículos
    private helper: HelperService, // Para mostrar alertas
    private router: Router, // Para la navegación
    private storageService: StorageService, // Para obtener el token almacenado
  ) { }

  ngOnInit() { }

  // Método para registrar el vehículo
  async registroViaje() {
    const dataStorage = await this.storageService.obtenerStorage();
    const token = await this.storageService.getItem('token');
    const id_usuario = dataStorage[0]?.id_usuario;
    
    if(token) {
      const req = await this.viajeService.agregarViaje(
        {
          p_ubicacion_origen: this.ubicacion_origen,
          p_ubicacion_destino: this.ubicacion_destino,
          p_costo: this.costo,
          p_id_vehiculo: this.id_vehiculo,
          token: token,
          p_id_usuario: id_usuario
        },
        this.imagen
      );
      await this.helper.showAlert("Viaje agregado exitosamente.", "Éxito");
    } else {
      await this.helper.showAlert("Token no encontrado, inicia sesión nuevamente.", "Error");
    }
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
}