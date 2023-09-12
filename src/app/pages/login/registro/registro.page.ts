import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FuncionesService } from 'src/app/services/alertas/funciones.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string = "";
  contrasena: string = "";
  confirmarContrasena: string = "";

  constructor(
    private router: Router, 
    private navController: NavController,
    private funcionesService:FuncionesService,
    private auth: AngularFireAuth
    ) { }

  ngOnInit() {
  }

  async registro(){
    if (this.email === "" || this.contrasena === "") {
      this.funcionesService.showAlert("Debe ingresar un email y una contraseña.", "ERROR");
      return;
    }

    if (this.contrasena !== this.confirmarContrasena) {
      this.funcionesService.showAlert("Las contraseñas no son iguales.", "ERROR");
      return;
    }

    try {
      await this.auth.createUserWithEmailAndPassword(this.email, this.contrasena);
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
