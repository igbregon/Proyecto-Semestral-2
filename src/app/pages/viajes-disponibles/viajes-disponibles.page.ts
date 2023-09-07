import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes-disponibles',
  templateUrl: './viajes-disponibles.page.html',
  styleUrls: ['./viajes-disponibles.page.scss'],
})
export class ViajesDisponiblesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  MenuVolver(){
    this.router.navigateByUrl("menu");
  }

  Siguiente(){
    this.router.navigateByUrl("detalle-viaje");
  }

}
