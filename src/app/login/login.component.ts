import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;
  auth2:  any;
  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || ''; // Valida si es undefined , asigna cadena vacia
    console.log('this.email');
    console.log(this.email);
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    console.log('entra sig in');
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        clientid: '704123346768-and7bo28bsf1j5sstl7qfcmrvohq14t5.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  attachSignin( element ) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token)
    .subscribe( () =>  window.location.href = '#/dashboard');
      console.log(token);

    });
  }

  ingresar(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    const usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login(usuario, forma.value.recuerdame)
    .subscribe( correcto =>  this.router.navigate(['/dashboard']));
    console.log(forma.valid);
    console.log(forma.value);
  }

}
