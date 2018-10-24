import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsService, SidebarService, SharedService, UsuarioService} from './service.index';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { SubirArchivoService } from './subir-archivo/subir-archivo.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService
  ],
  declarations: []
})
export class ServiceModule { }
