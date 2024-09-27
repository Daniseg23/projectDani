import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contrasena: String | undefined;
  correo: String | undefined;

  constructor(private router:Router, private firebase:ServiciosService, private helper:HelperService) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(["/registro-user"])
  }

  login() {
    if (this.correo == "") {
      this.helper.showAlert("Ingrese el correo", "Error de validación")
      return;
    }
    if (this.contrasena == "") {
      this.helper.showAlert("Ingrese la contraseña", "Error de validación")
      alert("Ingrese una contraseña");
      return;
    }
    if (this.correo == "duocsanjoaquin@duocuc.cl" && this.contrasena == 'duoc123') {
      this.router.navigateByUrl('/inicio/' + 100);
    } else {
      alert("Credenciales incorrectas.");
    }

    this.firebase.login(this.correo, this.contrasena);
  }
}
