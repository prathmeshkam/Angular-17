import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // url = "https://jsonplaceholder.typicode.com/todos/";
  constructor() { }
  user(){
    return [
      {name:'Prathmesh',age:25},
      {name:'Vikas',age:26},
      {name:'Vivek',age:30}
    ]
  }

}
