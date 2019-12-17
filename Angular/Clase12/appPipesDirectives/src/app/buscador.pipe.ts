import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: Array<any>, textoABuscar: string, campo: string): any {
    return value.filter(el => el[campo].toLowerCase().indexOf(textoABuscar) > -1)
  }

}
