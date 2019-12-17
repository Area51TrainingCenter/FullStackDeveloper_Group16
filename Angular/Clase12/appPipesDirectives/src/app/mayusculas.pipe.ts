import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "pasarAMayusculas"
})
export class MayusculasPipe implements PipeTransform {
  transform(valor: string) {
    if (valor) {
      return valor.toUpperCase()
    } else {
      return ""
    }
  }
}

@Pipe({
  name: "pasarAMinusculas"
})
export class MinusculasPipe implements PipeTransform {
  transform(valor: string) {
    return valor.toLowerCase()
  }
}
