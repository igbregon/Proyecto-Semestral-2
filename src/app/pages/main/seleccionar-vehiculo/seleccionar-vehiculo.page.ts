import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { Vehiculo } from 'src/app/models/vehiculo';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-seleccionar-vehiculo',
  templateUrl: './seleccionar-vehiculo.page.html',
  styleUrls: ['./seleccionar-vehiculo.page.scss'],
})
export class SeleccionarVehiculoPage implements OnInit {

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
    conductor: null
  }

  constructor(
    private router: Router,
    private vehiculoService: VehiculoService,
    private navController : NavController,
    private auth: AngularFireAuth,
    private usuarioService: UsuarioService,

    ) { }

  Vehiculos = this.vehiculoService.arrayVehiculos();

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {

      if (user === null) {
        return;
      }

      if (user.email === null) {
        return;
      }

      const usuarioFound = this.usuarioService.getUsuarioByCorreo(user.email);
      console.log('Usuario Encontrado:' + user.email);
      if (!usuarioFound) {

        console.log('No se encontró al usuario: ' + user.email);
        return;
      }
      this.vehiculo.conductor = usuarioFound;
      console.log(this.vehiculo.conductor)
    });
  }

  volver(){
    this.navController.back();
  }

  seleccionar(patente: string){
    this.router.navigateByUrl("crear-viaje");
    console.log("patente: " + patente);
  }
}
