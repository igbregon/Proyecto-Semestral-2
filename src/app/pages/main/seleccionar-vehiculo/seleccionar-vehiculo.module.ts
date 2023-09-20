import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarVehiculoPageRoutingModule } from './seleccionar-vehiculo-routing.module';

import { SeleccionarVehiculoPage } from './seleccionar-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarVehiculoPageRoutingModule
  ],
  declarations: [SeleccionarVehiculoPage]
})
export class SeleccionarVehiculoPageModule {}
