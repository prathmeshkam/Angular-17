import { Component,Output , EventEmitter ,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
name = "Prathmesh";
@Output() public event = new EventEmitter();

fire()
{
  this.event.emit(this.name);
}

@Input() greetData:string='';
}
