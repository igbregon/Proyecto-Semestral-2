import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarVehiculoPage } from './seleccionar-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarVehiculoPageRoutingModule {}
