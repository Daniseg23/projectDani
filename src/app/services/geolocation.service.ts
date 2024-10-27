import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      return null;
    }
  }

  async isLocationEnabled(): Promise<boolean> {
    try {
      // Intenta obtener la posición para verificar si está habilitada
      const position = await Geolocation.getCurrentPosition();
      return !!position;  // Retorna verdadero si se obtuvo la posición
    } catch (error) {
      // Si falla, significa que la ubicación está desactivada o los permisos no están concedidos
      return false;
    }
  }
}
