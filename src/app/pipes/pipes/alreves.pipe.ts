import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'alreves'
})
export class AlrevesPipe implements PipeTransform {

  transform(value: string): string {

    if ( value.length > 0 ) {
      return value.split('').reverse().join('');
    }


    return value;
  }

}
