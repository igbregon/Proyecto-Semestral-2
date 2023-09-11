import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionesService } from 'src/app/services/funciones.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor(
    private router: Router,
    private funcionesService: FuncionesService) { }

  parametronumeoUno:number | undefined;
  n1: number | undefined;
  n2: number | undefined;
  resultado: number | undefined;

  ngOnInit() {
  }

  Inicio(){
    this.router.navigateByUrl("menu");
    
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
