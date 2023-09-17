import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/login/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/login/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/login/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'menu/:correo',
    loadChildren: () => import('./pages/main/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'viajes-disponibles',
    loadChildren: () => import('./pages/main/viajes-disponibles/viajes-disponibles.module').then( m => m.ViajesDisponiblesPageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./pages/main/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'detalle-viaje/:patente',
    loadChildren: () => import('./pages/main/detalle-viaje/detalle-viaje.module').then( m => m.DetalleViajePageModule)
  },
  {
    path: 'registrar-vehiculo',
    loadChildren: () => import('./pages/main/registrar-vehiculo/registrar-vehiculo.module').then( m => m.RegistrarVehiculoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
