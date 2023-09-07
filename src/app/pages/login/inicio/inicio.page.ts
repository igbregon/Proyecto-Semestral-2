import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    if (this.email == "") {
      alert("Debe ingresar un email.");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña.")
      return;
    }
    
    if (this.email == "micorreo" && this.contrasena == "123") {
      //alert("Login correcto.");
      this.router.navigateByUrl("menu");
    }else{
      alert("Crdeneciales no validas.");
    }
    
  }

  Registro(){
    this.router.navigateByUrl("registro");
  }

  Recuperar(){
    this.router.navigateByUrl("recuperacion");
  }
}
