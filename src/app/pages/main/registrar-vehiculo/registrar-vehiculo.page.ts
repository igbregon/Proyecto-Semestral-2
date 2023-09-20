import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { Vehiculo } from 'src/app/models/vehiculo';
import { FuncionesService } from 'src/app/services/alertas/funciones.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.page.html',
  styleUrls: ['./registrar-vehiculo.page.scss'],
})
export class RegistrarVehiculoPage implements OnInit {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    nickname: '',
  }
  vehiculo: Vehiculo = {
    id: 0,
    marca: '',
    modelo: '',
    anno: 0,
    patente: '',
    img: '',
    conductor: this.usuario
  }


  constructor(
    private navController: NavController,
    private vehiculosService: VehiculoService,
    private usuarioService: UsuarioService,
    private funcionesService: FuncionesService,
    private auth: AngularFireAuth
    ) { }

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Hay usuario:', user.email)
      }

      if (user?.email) {
        const correoUsuario = this.usuarioService.getUsuarioByCorreo(user.email);
      }
    })
  }

  volver(){
    this.navController.back();
  }

  async registrarVehiculo(){
    if (this.vehiculo.marca === "") {
      this.funcionesService.showAlert("Debe ingresar una marca.", "ERROR");
      return;
    }
    if (this.vehiculo.modelo === "") {
      this.funcionesService.showAlert("Debe ingresar un modelo.", "ERROR");
      return;
    }
    if (this.vehiculo.anno === 0) {
      this.funcionesService.showAlert("Debe ingresar un año", "ERROR");
      return;
    }
    if (this.vehiculo.patente === "") {
      this.funcionesService.showAlert("Debe ingresar una patente.", "ERROR");
      return;
    }

    this.vehiculo.id = this.vehiculosService.setVehiculoNuevoID();
    /* this.vehiculo.conductor = this.usuarioService.getUsuarioByCorreo(this.usuario); */

    try {
      this.vehiculosService.setVehiculoNuevo(this.vehiculo)
      console.log(this.vehiculo);
      this.funcionesService.showAlert("Ha sido registrado exitosamente.", "REGISTRADO");
      this.navController.back();
    } catch (error) {
      this.funcionesService.showAlert("Ocurrió un problema en el registro", "ERROR");
    }

  };

}
