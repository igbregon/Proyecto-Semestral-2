import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, NavController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { FuncionesService } from 'src/app/services/alertas/funciones.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private animation!: Animation;
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    nickname: '',
  }

  constructor(
    private router: Router,
    private navController: NavController,
    private animationCtrl: AnimationController,
    private funcionesService: FuncionesService,
    private activatedRoute:ActivatedRoute,
    private usuarioService: UsuarioService,
    private auth: AngularFireAuth) { }



  ngOnInit() {
  }

  ionViewDidEnter(){
    this.activatedRoute.params.subscribe(params => {
      this.usuario.correo = params['correo'];
      const usuarioCorreo = this.usuarioService.getUsuarioByCorreo(this.usuario.correo);

      //esto es para que no de error el angular por la posibildad de que no exista el objeto deseado
      if (usuarioCorreo !== undefined) {
        this.usuario = usuarioCorreo;
      }else{
        console.log("señorita con h");
      }
    });
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


  async Inicio(){
    //
    var confirmar = await this.funcionesService.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if (confirmar == true) {
      this.auth.signOut();
      await this.router.navigateByUrl("inicio");
    }
  }

  BuscarViaje(){
    this.router.navigateByUrl("viajes-disponibles");
  }

  CrearViaje(){
    this.router.navigateByUrl("crear-viaje");
  }

}
