import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/usuario';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ViewDidEnter, ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave {

  correo: string = "gaben@valvesoftware.com";
  contrasena: string = "1234567";
  token: string ="";
  usuario: UserModel[]=[];

  constructor(private router:Router,
              private firebase:FirebaseService, 
              private helper:HelperService,
              private storage:StorageService,
              private cdr: ChangeDetectorRef,
              private usuarioService:UsuarioService) { }

  ngOnInit() {
    
  }

  /*register(){
    this.router.navigate(["/registro-user"])
  } 
  */

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

    //if (this.correo == "duocsanjoaquin@duocuc.cl" && this.contrasena == 'duoc123') {

    const loader = await this.helper.showLoader("Cargando");
    try{

      const reqFirebase = await this.firebase.login(this.correo, this.contrasena);
      //solicitud get user
      const token = await reqFirebase.user?.getIdToken();

      if(token){
        this.token = token;
        const req = await this.usuarioService.obtenerUsuario(
          {
            p_correo: this.correo,
            token: token
          }
        );
        this.usuario = req.data;
        console.log("Data Usuario", this.usuario[0].id_usuario);

      }
        
      loader.dismiss();
    } catch (error:any){

      let msg = "Ocurrió un error al iniciar sesión";
          
      if(error.code =="auth/invalid-credentiall"){
        msg = "La credencial es incorrecta";
      }else if(error.code == "auth/wrong-passwrod"){
        msg = "La contrasña es incorrecta";
      }else if(error.code == "auth/invalid-email"){
        msg = "El correo es incorrecto";
      }

      this.helper.showAlert(msg,"Aceptar");
      loader.dismiss();
    }
        
        
    const jsonToken =
    [
      {
        "token": this.token,
        "id_usuario": this.usuario[0].id_usuario,
        "usuario_correo": this.usuario[0].correo_electronico
      }
    ];
  
    this.storage.agregarToken(jsonToken);


    //Obtenemos la info que guardamos en el storage
    let token = await this.storage.obtenerStorage();
    console.log(token[0].usuario_correo);

    await this.helper.showToast("Login correcto!");
    this.router.navigateByUrl("inicio");
  }



  recPassword(){
    this.router.navigateByUrl("recuperar-password");
  }
      
  registro(){
    this.router.navigateByUrl("registro-user");
  }

  ionViewDidLeave(): void {
    console.log("view did leave");
    
  }
  ionViewWillLeave(): void {
    console.log("view will leave");
    
  }
  isLoaded = false;
  ionViewDidEnter(): void {
    setTimeout(() => {
      this.isLoaded = true;
  }, 100);
  }


  ionViewWillEnter(): void {
    this.firebase.logout();

   }

    
}
