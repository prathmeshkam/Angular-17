import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() item=0;
@Input() user:{name:string,age:number,email:string}={name:"",age:-1,email:''};

}
