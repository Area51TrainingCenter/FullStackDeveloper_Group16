import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducidorPalabras'
})
export class ReducidorPalabrasPipe implements PipeTransform {

  transform(value: string, limitePalabras: number, textoFinal: string = "... leer más"): string {

    const arr = value.split(" ")
    if (arr.length > limitePalabras) return arr.slice(0, limitePalabras).join(" ") + textoFinal

    return value;
  }

}
