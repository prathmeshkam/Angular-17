import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtwo',
  standalone: true
})
export class AddtwoPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[x,y] = args;
    return x+y;
  }

}
