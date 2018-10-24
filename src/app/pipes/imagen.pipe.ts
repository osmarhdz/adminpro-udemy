import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    console.log('pie imagen');
console.log(tipo);
    let url = URL_SERVICIOS + '/img';
    if (!img) {
      return url + '/usuarios/xxx';
    }



    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
       url += '/usuarios/' + img;
      break;

      case 'medico':
      url += '/medicos/' + img;
      break;

      case 'hospital':
      url += '/hospitales/' + img;
      break;

      default:
      console.log('tipo de imagen no existe');
      url += '/usuarios/xxx';
    }
    console.log('url imagen');
    
    console.log(url);
    return url;
  }

}
