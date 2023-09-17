import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-viajes-disponibles',
  templateUrl: './viajes-disponibles.page.html',
  styleUrls: ['./viajes-disponibles.page.scss'],
})
export class ViajesDisponiblesPage implements OnInit {

  constructor(
    private router: Router,
    private vehiculoService: VehiculoService
    ) { }

    Vehiculos = this.vehiculoService.arrayVehiculos();

  ngOnInit() {
    
  }

  MenuVolver(){
    this.router.navigateByUrl("menu");
  }

  Siguiente(id: string){
    this.router.navigateByUrl("detalle-viaje/" + id);
    console.log("recibo:" + id);
  }
}
