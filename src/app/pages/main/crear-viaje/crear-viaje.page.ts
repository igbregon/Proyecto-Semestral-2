import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FuncionesService } from 'src/app/services/alertas/funciones.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor(
    private router: Router,
    private funcionesService: FuncionesService,
    private navController: NavController,
    private auth: AngularFireAuth) { }

  parametronumeoUno:number | undefined;
  n1: number | undefined;
  n2: number | undefined;
  resultado: number | undefined;

  ngOnInit() {
  }

  Inicio(){
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.navController.setDirection('back');
        this.router.navigateByUrl('menu/' + user.email)
      }
    })
  }

  registrarVehiculo(){
    this.router.navigateByUrl("registrar-vehiculo");
    
  }

  calcularMultiplicacion(){

    if(this.n1 !== undefined && this.n2 !== undefined){
      this.resultado = this.funcionesService.Multiplicacion(this.n1, this.n2)
    }

  }
}
