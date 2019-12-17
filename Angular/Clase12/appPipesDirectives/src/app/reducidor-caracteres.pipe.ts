import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducidorCaracteres'
})
export class ReducidorCaracteresPipe implements PipeTransform {

  transform(value: string, limiteCaracteres: number, textoFinal: string = "... ver más"): string {
    if (value.length > limiteCaracteres) return value.substring(0, limiteCaracteres) + " " + textoFinal

    return value
  }

}
