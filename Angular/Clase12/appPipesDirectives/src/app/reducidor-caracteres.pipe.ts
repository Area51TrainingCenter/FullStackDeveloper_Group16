import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducidorCaracteres'
})
export class ReducidorCaracteresPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 20)
  }

}
