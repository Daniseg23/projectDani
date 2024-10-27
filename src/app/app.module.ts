import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { provideHttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VehiculoDetallesComponent } from './pages/modal/vehiculo-detalles/vehiculo-detalles.component';
import { FormsModule } from '@angular/forms';
import { GeolocationService } from 'src/app/services/geolocation.service';

@NgModule({
  declarations: [AppComponent, VehiculoDetallesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(),
    GeolocationService // Agregar GeolocationService aquí
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
