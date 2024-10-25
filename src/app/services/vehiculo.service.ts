import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
marca: any;
modelo: any;
anio: any;
color: any;
capacidadPasajero: any;
patente: any;

  constructor(private http: HttpClient) { }

  // Método para agregar un auto
  async agregarVehiculo(datosAuto: dataBodyAuto, imgFileAuto: any) {
    try {
      const formData = new FormData();

      // Agregar los datos del auto al formData
      formData.append('p_id_usuario', datosAuto.p_id_usuario.toString());
      formData.append('p_marca', datosAuto.p_marca);
      formData.append('p_modelo', datosAuto.p_modelo);
      formData.append('p_color', datosAuto.p_color);
      formData.append('p_patente', datosAuto.p_patente);
      formData.append('p_anio', datosAuto.p_anio.toString());
      formData.append('p_tipo_combustible', datosAuto.p_tipo_combustible );
      if (datosAuto.token) {
        formData.append('token', datosAuto.token);
      }

      // Agregar la imagen del auto al formData
      formData.append('image', imgFileAuto.file, imgFileAuto.name); //Importa que el nombre de la var sea identico al nombre que tienen asignado en el apiURL, es indiferene si tiene el mismo nombre que el modelo (usuario.ts)

      // Enviar el request a la API para agregar el auto
      const response = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'vehiculo/agregar', formData));
      return response;

    } catch (error) {
      throw error;
    }
  }

  // Método para obtener un auto por su patente
  async obtenerVehiculo(data: dataGetAuto) {
    try {
      const params = {
        p_patente: data.p_patente,
        token: data.token,
        p_id_usuario: data.p_id_usuario,
        p_marca: data.p_marca,
        p_modelo: data.p_modelo,
        p_anio: data.p_anio,
        p_color: data.p_color,
        p_tipo_combustible: data.p_tipo_combustible,
        p_id_vehiculo: data.p_id_vehiculo
      };

      // Enviar el request a la API para obtener los datos del auto
      const response = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'vehiculo/obtener', { params }));
      return response;
    } catch (error) {
      throw error;
    }
  }

  async obtenerVehiculoViaje(parToken:string) {
    try {
      const params = {
        token: parToken,
      };
      // Enviar el request a la API para obtener los datos del auto
      const response = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'vehiculo/obtener', { params }));
      return response;
    } catch (error) {
      throw error;
    }
  }
}



// Interface para los datos del auto en el cuerpo de la petición
interface dataBodyAuto {
  p_id_usuario: number;
  p_patente: string;
  p_marca: string;
  p_modelo: string;
  p_anio: number;
  p_color: string;
  p_tipo_combustible: string;
  token?: string;
}

// Interface para los datos necesarios para obtener un auto
interface dataGetAuto {
  p_id_usuario: number;
  p_patente: string;
  p_marca: string;
  p_modelo: string;
  p_anio: number;
  p_color: string;
  p_tipo_combustible: string;
  p_id_vehiculo: number;
  token: string;
}