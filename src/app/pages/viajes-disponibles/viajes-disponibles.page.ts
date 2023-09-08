import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes-disponibles',
  templateUrl: './viajes-disponibles.page.html',
  styleUrls: ['./viajes-disponibles.page.scss'],
})
export class ViajesDisponiblesPage implements OnInit {

  constructor(private router: Router) { }

  Vehiculos = [
    {
      id: 1,
      nombre: 'Tomás',
      apellido: 'Arévalo',
      modelo: '508',
      marca: 'peugeot',
      anno: '2023',
      patente: 'BJ-H1-22',
      foto: 'https://img.remediosdigitales.com/4745f3/peugeot-508-2023-gris/1366_2000.jpeg'
    },
    {
      id: 2,
      nombre: 'Ignacio',
      apellido: 'Rojas',
      modelo: 'RX8',
      marca: 'mazda',
      anno: '2011',
      patente: 'XY-L3-42',
      foto: 'https://www.rutamotor.com/wp-content/uploads/2017/10/Mazda-RX-8-2009-1600-04.jpg'
    },
    {
      id: 3,
      nombre: 'Wilson',
      apellido: 'Cárdenas',
      modelo: 'Spark',
      marca: 'chevrolet',
      anno: '2012',
      patente: 'BG-KR-53',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/0_Chevrolet_Spark_%28M400%29_0.jpg'
    }
  ];

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
