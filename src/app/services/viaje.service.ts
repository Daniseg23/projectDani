import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private http:HttpClient) { }

  async agregarViaje(datosViaje: dataBodyViaje) {
    try {
      const formData = new FormData();

      // Agregar los datos del auto al formData
      formData.append('p_id_usuario', datosViaje.p_id_usuario.toString());
      formData.append('p_ubicacion_origen', datosViaje.p_ubicacion_origen);
      formData.append('p_ubicacion_destino', datosViaje.p_ubicacion_destino);
      formData.append('p_costo', datosViaje.p_costo.toString());
      formData.append('p_id_vehiculo', datosViaje.p_id_vehiculo.toString());
      formData.append('p_fecha', datosViaje.p_fecha.toISOString());
      formData.append('p_id_estado', datosViaje.p_id_estado.toString());
      formData.append('p_nombre_proyecto', datosViaje.p_nombre_proyecto);
      if (datosViaje.token) {
        formData.append('token', datosViaje.token);
      }

      // Enviar el request a la API para agregar el auto
      const response = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'viaje/agregar', formData));
      return response;

    } catch (error) {
      throw error;
    }
  }

  // Método para obtener un auto por su patente
  async obtenerViaje(data: dataGetViaje) {
    try {
      const params = {
        token: data.token,
        p_id_usuario: data.p_id_usuario,
        p_ubicacion_origen: data.p_ubicacion_origen,
        p_ubicacion_destino: data.p_ubicacion_destino,
        p_costo: data.p_costo,
        p_id_vehiculo: data.p_id_vehiculo,
        p_fecha: data.p_fecha.toISOString(),
        p_nombre_proyecto: data.p_nombre_proyecto,
      };

      // Enviar el request a la API para obtener los datos del auto
      const response = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'viaje/obtener', { params }));
      return response;
    } catch (error) {
      throw error;
    }
  }
}



// Interface para los datos del auto en el cuerpo de la petición
interface dataBodyViaje {
  p_id_usuario: number;
  p_ubicacion_origen: string;
  p_ubicacion_destino: string;
  p_costo: number;
  p_id_vehiculo: number;
  p_fecha: Date;
  p_id_estado: number;
  p_nombre_proyecto: string;
  token?: string;
}

// Interface para los datos necesarios para obtener un auto
interface dataGetViaje {
  p_id_usuario: number;
  p_ubicacion_origen: string;
  p_ubicacion_destino: string;
  p_costo: number;
  p_id_vehiculo: number;
  p_fecha: Date;
  p_id_estado: number;
  p_nombre_proyecto: string;
  token: string;
}