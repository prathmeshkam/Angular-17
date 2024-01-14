import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtwo',
  standalone: true
})
export class AddtwoPipe implements PipeTransform {

  transform(value: number, currency: string = ''): number {
    
    if(currency==='USD'){
      return Math.floor(value/70);
    }
    if(currency==='GBP'){
      return value * 0.0095;
    }

    return 0;
  }

}
