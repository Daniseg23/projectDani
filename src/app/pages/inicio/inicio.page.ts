//En este apartado se crean funciones
//Se crean métodos
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  correo: string = "";
  activateRouter: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.correo = this.activateRouter.snapshot.params["correo"];
    console.log("PARAMETRO URL ---> ", this.correo);
  }
  clickFunction() {
    console.log('Card clicked!');
  }

  clickFunctionPerfil() {
    this.router.navigate(['/perfil']);
  }

  clickFunctionViaje() {
    this.router.navigate(['/viaje']);
  }

  clickFunctionVehiculo() {
    this.router.navigate(['/vehiculo']);
  }

  clickFunctionAyuda() {
    this.router.navigate(['/ayuda']);
  }

}
