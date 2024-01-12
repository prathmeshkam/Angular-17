import { Directive ,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMakeRed]',
  standalone: true
})
export class MakeRedDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="red";
  }
      
}
