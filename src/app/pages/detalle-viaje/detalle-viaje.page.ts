import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {

  patente:string | undefined;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.patente = this.activatedRoute.snapshot.params['id'];
    console.log("patente: ", this.patente);
  }

  Volver() {
    this.router.navigateByUrl("viajes-disponibles");
  }


}
