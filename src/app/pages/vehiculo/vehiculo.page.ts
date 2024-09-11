import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  clickFunction() {
    console.log('Card clicked!');
  }

  clickViaje(){
    this.router.navigate(["/viaje"])
  }

  clickVehiculo(){
    this.router.navigate(["/vehiculo"])
  }

  clickAyuda(){
    this.router.navigate(["/ayuda"])
  }

  clickInicio(){
    this.router.navigate(["/inicio"])
  }

}
