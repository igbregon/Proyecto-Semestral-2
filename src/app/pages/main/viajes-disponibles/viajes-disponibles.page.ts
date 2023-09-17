import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-viajes-disponibles',
  templateUrl: './viajes-disponibles.page.html',
  styleUrls: ['./viajes-disponibles.page.scss'],
})
export class ViajesDisponiblesPage implements OnInit {

  constructor(
    private router: Router,
    private vehiculoService: VehiculoService,
    private navController : NavController,
    private auth: AngularFireAuth
    ) { }

    Vehiculos = this.vehiculoService.arrayVehiculos();

  ngOnInit() {
    
  }

  MenuVolver(){
    //this.navController.back();
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.navController.setDirection('back');
        this.router.navigateByUrl('menu/' + user.email)
      }
    })
  }

  Siguiente(patente: string){
    this.router.navigateByUrl("detalle-viaje/" + patente);
    console.log("recibo:" + patente);
  }
}
