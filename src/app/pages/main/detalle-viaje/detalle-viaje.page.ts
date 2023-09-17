import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculos/vehiculo.service';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {

  vehiculo: Vehiculo = {
    id: 0,
    marca: '',
    modelo: '',
    anno: 0,
    patente: '',
    img: ''
  }


  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private vehiculosService: VehiculoService) { }

  ngOnInit() {
    /* acá dejaré mis skeltons... SI TUVIERA ALGUNO */
  }

  ionViewDidEnter(){
    this.activatedRoute.params.subscribe(params => {
      this.vehiculo.patente = params['id'];
      const vehiculoPatente = this.vehiculosService.getVehiculoByPatente(this.vehiculo.patente);
      
      //esto es para que no de error el angular por la posibildad de que no exista el objeto deseado
      if (vehiculoPatente !== undefined) {
        this.vehiculo = vehiculoPatente;
      }else{
        console.log("te amo señorita con h");
        //acordarse de cambiar por el próximo servicio viajes disponibles
      }
    });
  }

  Volver() {
    this.router.navigateByUrl("viajes-disponibles");
  }
  

}
