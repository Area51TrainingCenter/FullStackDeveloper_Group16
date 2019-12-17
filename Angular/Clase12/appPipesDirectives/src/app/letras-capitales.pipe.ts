import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letrasCapitales'
})
export class LetrasCapitalesPipe implements PipeTransform {

  transform(value: string): string {
    let arr = value.split(" ")
    arr = arr.map(el => `
      ${el[0].toUpperCase()}${el.slice(1, el.length)}
    `)

    return arr.join(" ")
  }

}
