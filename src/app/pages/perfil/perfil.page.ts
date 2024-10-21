import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';

import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserModel } from 'src/app/models/usuario';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave {
  correo: string = "";
  nombre: string = "";
  telefono: string = "";
  nombre_proyecto: string = "";
  loaded: boolean = false;
  usuario: UserModel[]=[];

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLModElement> | undefined;
  private animation: Animation | undefined;

  constructor(private router:Router,
              private activateRoute:ActivatedRoute,
              private animationCtrl: AnimationController,
              private firebase:FirebaseService,
              private usuarioService:UsuarioService,
              private storage:StorageService,
              private helper:HelperService
  ) { }


  async cargarUsuario(){
    let dataStorage = await this.storage.obtenerStorage();
    
    const req = await this.usuarioService.obtenerUsuario(
      {
        p_correo:dataStorage[0].usuario_correo,
        token:dataStorage[0].token
      }
    );
    this.usuario = req.data;
    this.correo = this.usuario[0].correo_electronico;
    this.nombre = this.usuario[0].nombre;
    this.telefono = this.usuario[0].telefono;
    this.nombre_proyecto = this.usuario[0].nombre_proyecto;
    console.log("DATA INICIO USUARIO ", this.usuario);
    console.log("DATA INICIO USUARIO ", this.usuario);
  }


  ngOnInit() {
    this.cargarUsuario();
    this.correo = this.activateRoute.snapshot.params["correo"];
    console.log("PARAMETRO URL ---> ", this.correo);

    setTimeout(() =>{
      this.loaded = true;
    },4000)

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

  clickViaje(){
    this.router.navigate(['/viaje'])
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

}
