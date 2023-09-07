import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, NavController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private animation!: Animation;

  constructor(
    private router: Router, 
    private navController: NavController,
    private animationCtrl: AnimationController) { }



  ngOnInit() {
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll(".cardTwo"))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
  
  Inicio(){
    this.router.navigateByUrl("inicio");
  }

  BuscarViaje(){
    this.router.navigateByUrl("viajes-disponibles");
  }
  CrearViaje(){
    this.router.navigateByUrl("crear-viaje");
  }

}
