import { Injectable } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private viajes: Viaje[] = [

  ]

  constructor() { }

  arrayViajes(){
    return this.viajes;
  }

}
