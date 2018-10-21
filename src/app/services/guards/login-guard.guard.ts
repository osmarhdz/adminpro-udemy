import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(public _usuarioService: UsuarioService, public router: Router) {}

  canActivate() {
    console.log('Paso por login guard');
    if (this._usuarioService.estaLogueado()) {
      console.log('PASO EL GUARD');
      return true;
    } else {
      console.log('BLOQUEADO X EL GUARD');
      this.router.navigate(['/login']);
    }
  }
}
