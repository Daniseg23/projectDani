import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';

import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ViajeService } from 'src/app/services/viaje.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserModel } from 'src/app/models/usuario';
import { HelperService } from 'src/app/services/helper.service';
//import { VehiculoDetallesComponent } from '../modal/vehiculo-detalles/vehiculo-detalles.component';
//import { Vehiculo } from 'src/app/services/servicios.service'; //ESTO FUE CLAVE PARA QUE FUNCIONARA, Por que importar vehiculo aparte si ya estoy importando todo con serviciosService?


@Component({
  selector: 'viaje-vehiculo',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave  {
  //misVehiculos: Vehiculo[] = []; //ESTO FUE CLAVE PARA QUE FUNCIONARA. Investigar por que "misVehiculos = [];" no funciona y si "misVehiculos: Vehiculo[] = []"
  p_ubicacion_origen: string = "";
  p_ubicacion_destino: string = "";
  p_costo: string = "";
  p_id_vehiculo: string = "";
  nombre_proyecto: string = "";
  loaded: boolean = false;
  viaje: UserModel[]=[];
  message: string | undefined;

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLModElement> | undefined;
  private animation: Animation | undefined;


  constructor(private router:Router,
              private activateRoute:ActivatedRoute,
              private animationCtrl: AnimationController,
              private firebase:FirebaseService,
              private viajeService:ViajeService,
              private storage:StorageService,
              private helper:HelperService,
              private modalCtrl: ModalController
  ) { }

  async cargarViaje(){
    let dataStorage = await this.storage.obtenerStorage();
    const id_usuario = dataStorage[0].id_usuario;
    const req = await this.viajeService.obtenerViaje(
      {
        p_ubicacion_origen:dataStorage[0].viaje_ubicacion_origen,
        p_id_usuario:dataStorage[0].usuario_id,
        p_ubicacion_destino:dataStorage[0].viaje_ubicacion_origen,
        p_costo:dataStorage[0].viaje_costo,
        p_id_vehiculo:dataStorage[0].viaje_id_vehiculo,
        token:dataStorage[0].token
      }
    );
    this.viaje = req.data.filter((viaje: any) => viaje.id_usuario === id_usuario);  //Lo que hace es filtrar el array de vehiculos y me devuelve el vehiculo que tiene asignado un id_usuario que coincide con el id_usuario que tengo en el storage
    console.log("Datos de todos los vehiculos:", this.viaje);
  } catch (error: any) {
    console.error("Error al cargar los datos del vehículo:", error);
  
  }


  //async openModal() {
  //  const modal = await this.modalCtrl.create({
  //    component: VehiculoDetallesComponent,
   // });
   // modal.present();

   // const { data, role } = await modal.onWillDismiss();

    //if (role === 'confirm') {
     // this.message = `Hello, ${data}!`;
   // }
 // }

 // async abrirDetalleVehiculo(vehiculo: any) {
   // //const vehiculo = this.vehiculo.find(v => v.id_vehiculo === id);
    //const modal = await this.modalCtrl.create({
     // component: VehiculoDetallesComponent,
     // componentProps: { vehiculo }
    //});
   // console.log("Datos del vehiculo" , vehiculo);
    //return await modal.present();
  //}
  

  ngOnInit() {
    //this.misVehiculos = this.vehiculoService.obtenerVehiculos();
    this.cargarViaje();
    setTimeout(() =>{
      this.loaded = true;
    },1000)
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


  viajes(){
    console.log('viajes');
    //redirige al usuario a la vista "viaje"
    this.router.navigateByUrl('viajes')
  }

  clickPerfil(){
    this.router.navigate(['/perfil'])
  }

  clickVehiculo(){
    this.router.navigate(['/vehiculo'])
  }

  clickAyuda(){
    this.router.navigate(['/ayuda'])
  }

  clickInicio(){
    this.router.navigate(['/inicio'])
  }

  clickViaje(){
    this.router.navigate(['/viaje'])
  }

  clickVehiculoListar() {
    this.router.navigate(['/viaje-listar']);
  }

}
