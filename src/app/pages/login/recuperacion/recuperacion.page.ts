import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  constructor(
    private router: Router,
    private navController:NavController) { }

  ngOnInit() {
  }

  Inicio(){
    this.navController.setDirection('back');
    this.router.navigateByUrl("inicio");
  }
}
