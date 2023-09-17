import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FuncionesService } from 'src/app/services/alertas/funciones.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //necesario para la creación de usuario en firebase
  contrasena: string = "";
  confirmarContrasena: string = "";
  //necesario para la creación de usuario en el array local
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    nickname: '',
  }  

  constructor(
    private router: Router, 
    private navController: NavController,
    private funcionesService:FuncionesService,
    private auth: AngularFireAuth,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit() {
  }

  async registro(){
    
    if (this.usuario.nombre === "") {
      this.funcionesService.showAlert("Debe ingresar un nombre.", "ERROR");
      return;
    }

    if (this.usuario.apellido === "") {
      this.funcionesService.showAlert("Debe ingresar un apellido.", "ERROR");
      return;
    }

    if (this.usuario.nickname === "") {
      this.funcionesService.showAlert("Debe ingresar un nombre de usuario.", "ERROR");
      return;
    }

    if (this.usuario.correo === "" || this.contrasena === "") {
      this.funcionesService.showAlert("Debe ingresar un email y una contraseña.", "ERROR");
      return;
    }

    if (this.usuarioService.getUsuarioByCorreo(this.usuario.correo)) {
      this.funcionesService.showAlert("Este correo ya está registrado", "ERROR");
      return;
    }

    if (this.contrasena !== this.confirmarContrasena) {
      this.funcionesService.showAlert("Las contraseñas no son iguales.", "ERROR");
      return;
    }

    this.usuario.id = this.usuarioService.getUsuarioNuevoID();

    try {
      await this.auth.createUserWithEmailAndPassword(this.usuario.correo, this.contrasena);
      this.usuarioService.setUsuarioNuevo(this.usuario);
      console.log(this.usuario);  
      this.funcionesService.showAlert("Ha sido registrado exitosamente.", "REGISTRADO");
      this.navController.back();
    } catch (error) {
      this.funcionesService.showAlert("Ocurrió un problema en el registro", "ERROR");
    }

  }

  Inicio(){
    this.navController.back();
  }
}
