import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
  standalone: true
})
export class SplitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split("");
  }

}
