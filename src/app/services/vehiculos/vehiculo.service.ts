import { Injectable } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private vehiculos: Vehiculo[] = [
    {
      id: 1,
      marca: 'Peugeot',
      modelo: '508',
      anno: 2023,
      patente: 'MG-J9-14',
      img: 'https://img.remediosdigitales.com/4745f3/peugeot-508-2023-gris/1366_2000.jpeg'
    },
    {
      id: 2,
      marca: 'Mazda',
      modelo: 'RX8',
      anno: 2009,
      patente: 'XY-L3-42',
      img: 'https://www.rutamotor.com/wp-content/uploads/2017/10/Mazda-RX-8-2009-1600-04.jpg'
    },
    {
      id: 3,
      marca: 'Chevrolet',
      modelo: 'Spark',
      anno: 2012,
      patente: 'BG-KR-53',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/0_Chevrolet_Spark_%28M400%29_0.jpg'
    },
    {
      id: 4,
      marca: 'Mazda',
      modelo: 'MX-5',
      anno: 1990,
      patente: 'XU-RI-21',
      img: 'https://s1.cdn.autoevolution.com/images/news/gallery/tofu-delivery-1990-mazda-mx-5-has-hdmi-civic-exhaust_2.jpg'
    }
  ];

  constructor() { }

  arrayVehiculos(){
    return this.vehiculos;
  }

  getVehiculoByPatente(patente: string){
    return this.vehiculos.find(vehiculo => vehiculo.patente === patente)
  };
}
