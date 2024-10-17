import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contrasena: String | undefined;
  correo: String | undefined;

  constructor(private router:Router,
              private firebase:ServiciosService, 
              private helper:HelperService,
              private storage:StorageService) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(["/registro-user"])
  }

  async login() {
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

      const loader = await this.helper.showLoader("Cargando")
      try{
        const reqFirebase = await this.firebase.login(this.correo, this.contrasena);
        //solicitud get user
        const token = await userFirebase.user?.getIdToken();
        if(token){
          this.token = token;
          const req = await this.usuarioService.obtenerUsuario(
            {
              p_correo: this.correo,
              token: token
            }
          )
          loader.dismiss();
        } catch(error:any){
          let msg = "Ocurrió un error al iniciar sesión";
          
          if(error.code =="auth/invalid-credentiall"){
            msg = "La conraseña es incorrecta";
          } else if(error.code == "auth/wrong-passwrod"){
            msg = "Contrasña incorrecta";
          }else if(error.code == "auth/invalid-email"){
            msg = "Correo no valido"
          }

          this.helper.showAlert(msg,"Aceptar");
          loader.dismiss();
        }
        
        
        const jsonToken =
        [
          {
            "token":"123123",
            "nombre": "PGY123"
          }
        ];
  
        this.storage.agregarToken(jsonToken);


        //Obtenemos la info que guardamos en el storage
        console.log(this.storage.obtenerStorage())



        this.router.navigateByUrl('/inicio/' + 100);
      } else {
      alert("Credenciales incorrectas.");
      }


    }
  }
}
