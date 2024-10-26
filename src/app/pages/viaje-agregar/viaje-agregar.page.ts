import { Component, OnInit } from '@angular/core';
import { ViajeService } from 'src/app/services/viaje.service'; 
import { HelperService } from 'src/app/services/helper.service'; // Para mostrar alertas
import { StorageService } from 'src/app/services/storage.service'; // Para gestionar el almacenamiento local
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera'; // Para tomar fotos
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { UserModel } from 'src/app/models/usuario';

@Component({
  selector: 'app-viaje-agregar',
  templateUrl: './viaje-agregar.page.html',
  styleUrls: ['./viaje-agregar.page.scss'],
})
export class ViajeAgregarPage implements OnInit {
  ubicacion_origen: string = '';
  ubicacion_destino: string = '';
  costo: number = 0;
  id_vehiculo: number = 0;
  imagen: any;
  estado: number = 0;
  vehiculo: UserModel[]=[];
  id: number = 0;

  constructor(
    private viajeService: ViajeService, // Servicio para manejar vehículos
    private helper: HelperService, // Para mostrar alertas
    private router: Router, // Para la navegación
    private storageService: StorageService, // Para obtener el token almacenado
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() { 
    this.cargarVehiculo();
  }

  async cargarVehiculo(){
    let dataStorage = await this.storageService.obtenerStorage();
    const id_usuario = dataStorage[0].id_usuario;
    const req = await this.vehiculoService.obtenerVehiculo(
      {
        p_patente:dataStorage[0].vehiculo_patente,
        p_id_usuario:dataStorage[0].usuario_id,
        p_marca:dataStorage[0].vehiculo_marca,
        p_modelo:dataStorage[0].vehiculo_modelo,
        p_anio:dataStorage[0].vehiculo_anio,
        p_color:dataStorage[0].vehiculo_color,
        p_tipo_combustible:dataStorage[0].vehiculo_tipo_combustible,
        p_id_vehiculo:dataStorage[0].id_vehiculo,
        token:dataStorage[0].token
      }
    );
    this.vehiculo = req.data.filter((vehiculo: any) => vehiculo.id_usuario === id_usuario);  //Lo que hace es filtrar el array de vehiculos y me devuelve el vehiculo que tiene asignado un id_usuario que coincide con el id_usuario que tengo en el storage
    console.log("Datos de todos los vehiculos:", this.vehiculo);
  } catch (error: any) {
    console.error("Error al cargar los datos del vehículo:", error);
  
  }

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
          p_id_vehiculo: this.id,
          p_id: this.id,
          token: token,
          p_id_usuario: id_usuario,
          p_fecha: new Date(),
          p_id_estado: this.estado,
          p_nombre_proyecto: 'francodanitesting'
        },
      );
      await this.helper.showAlert("Viaje agregado exitosamente.", "Éxito");
      this.router.navigate(['/viaje'])
    } else {
      await this.helper.showAlert("Token no encontrado, inicia sesión nuevamente.", "Error");
    }
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