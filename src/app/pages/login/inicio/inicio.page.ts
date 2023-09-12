import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FuncionesService } from 'src/app/services/alertas/funciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(
    private router:Router,
    private auth: AngularFireAuth,
    private funcionesService:FuncionesService) { }

  ngOnInit() {
  }

/*   login(){
    if (this.email == "") {
      this.funcionesService.showAlert("Debe ingresar un email.","Error");
      return;
    }
    if (this.contrasena == "") {
      this.funcionesService.showAlert("Debe ingresar una contraseña.","Error");
      return;
    }
    
    if (this.email == "pgy4121-003d" && this.contrasena == "pgy4121-003d") {
      this.funcionesService.showAlertNoButton("Validando credenciales...", "");

    setTimeout(() => {
      
      this.funcionesService.showAlert("Bienvenido a TeLlevoAPP.", "");
      this.router.navigateByUrl("menu");
    }, 2000);
    }else{
      this.funcionesService.showAlert("Credenciales inválidas.","Error");
    }
    
  } */

  async login(){
    if (this.email === "" || this.contrasena === "") {
      this.funcionesService.showAlert("Debe ingresar un email y una contraseña.", "ERROR");
      return;
    }

    try {
      await this.auth.signInWithEmailAndPassword(this.email, this.contrasena);
      this.funcionesService.showAlertNoButton("Validando credenciales...", "");

      setTimeout(() => {
      
        this.funcionesService.showAlert("Bienvenido a TeLlevoAPP.", "");
        this.router.navigateByUrl("menu");
      }, 1000);

    } catch (error) {
      this.funcionesService.showAlert("Usuario y contraseña no válidos.", "ERROR");
    }

  }

  Registro(){
    this.router.navigateByUrl("registro");
  }

  Recuperar(){
    this.router.navigateByUrl("recuperacion");
  }

  

}
