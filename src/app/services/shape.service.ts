import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor() { }

  getClassName(shape:any, color:any) {
    return shape + '-' + color;
  }
}
