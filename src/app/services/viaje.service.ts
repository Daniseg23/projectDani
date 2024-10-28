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
    // Crear el objeto JSON con los datos del viaje
      const body = {
      p_id_usuario: datosViaje.p_id_usuario,
      p_ubicacion_origen: datosViaje.p_ubicacion_origen,
      p_ubicacion_destino: datosViaje.p_ubicacion_destino,
      p_costo: datosViaje.p_costo,
      p_id_vehiculo: datosViaje.p_id_vehiculo,
      p_fecha: datosViaje.p_fecha.toISOString(),
      p_nombre_proyecto: datosViaje.p_nombre_proyecto,
      p_id: datosViaje.p_id,
      token: datosViaje.token
    };


      // Enviar el request a la API para agregar el auto
      const response = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'viaje/agregar', body));
      return response;

    } catch (error) {
      throw error;
    }
  }

  async obtenerViaje(parToken:string){
    try {
      const params = {
        token:parToken
      };
      console.log("Enviando solicitud a la API con token:", parToken); // Verificar el token
      const response = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'viaje/obtener',{params}));
      return response;
    } catch (error) {
      throw error;
    }
  }

  async obtenerViajeEnRuta(data: dataGetViaje) {
    try {
      const params = {
        p_id: -1,
        p_id_usuario: data.p_id_usuario,
        token: data.token  // si o si necesito agregar el token en el parametro, pero se supone que si obtengo el token solo me debiese mostrar los viajes de la pagina (endpoint), gracias al id me esta mostrando todos los viajes en ruta, no el token (investigar)

      };
      const response = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'viaje/obtener',{params}));
      return response;
    } catch (error) {
      throw error;
    }
  }

  async actualizarEstadoViaje(data: dataBodyActualizarViaje) {
    try {
      const body = {
        p_id: data.p_id,
        p_id_estado: data.p_id_estado,
        token:  data.token
      };
      
      const response = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'viaje/actualiza_estado_viaje', body));
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
  p_id: number;
  token?: string;
}

// Interface para los datos necesarios para obtener un auto
interface dataGetViaje {
  p_id_usuario: number;
  p_id: number;
  token: string;
}

interface dataBodyActualizarViaje {
  p_id_estado: number;
  p_id: number;
  token?: string;
}