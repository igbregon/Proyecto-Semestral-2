import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Kevin',
      apellido: 'Espinel',
      correo: 'ke.espinel@duocuc.cl',
      nickname: 'spinelk',
      rut: '24147693-2',
      numeroLicencia: 'AE2344F312'
    },
    {
      id: 2,
      nombre: 'Tomás',
      apellido: 'Paz de la Vega',
      correo: 'to.pazdelavega@duocuc.cl',
      nickname: 'Obito5',
      rut: '21342138-7',
      numeroLicencia: 'AFJKE48312'
    },
    {
      id: 3,
      nombre: 'Bastian',
      apellido: 'Bonilla',
      correo: 'ba.bonilla@duocuc.cl',
      nickname: 'Bregon'
    }
  ]


  constructor() { }

}
