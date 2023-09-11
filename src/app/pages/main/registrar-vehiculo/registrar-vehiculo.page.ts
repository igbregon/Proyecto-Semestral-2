import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.page.html',
  styleUrls: ['./registrar-vehiculo.page.scss'],
})
export class RegistrarVehiculoPage implements OnInit {

  marca: string = "";
  modelo: string = "";
  anno: number = 0;
  patente: string = "";
  img: string = "";

  constructor(
    private navController: NavController
    ) { }

  ngOnInit() {
  }

  volver(){
    this.navController.back();
  }

}
