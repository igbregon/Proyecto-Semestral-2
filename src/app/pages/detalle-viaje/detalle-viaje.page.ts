import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Volver() {
    this.router.navigateByUrl("viajes-disponibles");
  }

}
