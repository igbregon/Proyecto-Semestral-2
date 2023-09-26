import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.page.html',
  styleUrls: ['./registrar-vehiculo.page.scss'],
})
export class RegistrarVehiculoPage{

  marca: string = "";
  modelo: string = "";
  anno: number = 0;
  patente: string = "";
  

  constructor(private navController: NavController, private vehiculoService: VehiculoService) { }

  ngOnInit() {
  }

  registrarVehiculo() {
    if (this.marca && this.modelo && this.anno && this.patente) {
      this.vehiculoService.registrarAuto(this.marca, this.modelo, this.anno, this.patente);
      this.marca = '';
      this.modelo = '';
      this.anno = 0;
      this.patente = '';
      

      console.log(this.vehiculoService.obtenerAutos());

    } else {
      console.log("Faltan campos");
    }
  }

  
  volver(){
    this.navController.back();
  }

}
