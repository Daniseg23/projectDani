import { StorageService } from 'src/app/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelperService } from 'src/app/services/helper.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  correo:string = "";
  contrasena:string = "";
  telefono:string = "";
  nombre:string = "";
  imagen:any;

  constructor(private firebase:FirebaseService, 
              private usuarioService: UsuarioService,
              private helper:HelperService,
              private router:Router,
              private storageService:StorageService) { }

  ngOnInit() {
  }

  async registro(){
    const userFirebase = await this.firebase.registro(this.correo, this.contrasena);
    const token = await userFirebase.user?.getIdToken();


    if(token){
      await this.storageService.setItem('token', token);
      const req = await this.usuarioService.agregarUsuario(
        {
          p_correo_electronico:this.correo,
          p_nombre:this.nombre,
          p_telefono:this.telefono,
          token:token
        },
        this.imagen
      )
    }

    await this.helper.showAlert("Has ingresado exitosamente :D.", "Muy Bien");
    await this.router.navigateByUrl('login');
  }



  async takePhoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    
    if (image.webPath){
      const response = await fetch(image.webPath);
      const blob = await response.blob();

      this.imagen = {
        fname: 'foto' + image.format,
        src: image.webPath,
        file: blob
      }
    }


    var imageUrl = image.webPath;
    this.imagen.src = imageUrl;
  }

}