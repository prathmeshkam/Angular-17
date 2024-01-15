import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  user(){
    return [
      {name:'Prathmesh',age:25},
      {name:'Vikas',age:26},
      {name:'Vivek',age:30}
    ]
  }
}
