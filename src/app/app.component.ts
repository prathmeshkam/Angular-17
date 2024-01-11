import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import {FormsModule} from '@angular/forms';
import { AddtwoPipe } from './pipes/addtwo.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgbAlertModule,ChildComponent,Child1Component,FormsModule,AddtwoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngBootstrap';

  taskdetail:any[] = [];

  color:string = "";
  addtask(item:string)
  {

    this.taskdetail.push({id:this.taskdetail.length,name:item}); 
    
  }
  high()
  {
    this.color = 'yellow';
  }

  Remove(id:number)
  {
    this.taskdetail = this.taskdetail.filter(i => i.id!==id);
  }

  data = 10;


  updateChild()
  {
    this.data = Math.floor(Math.random()*10);
  }

  userData = [
    {name:"Prathmesh",age:44, email:"prath@gmail.com"},
    {name:"Vikas",age:45, email:"vikas@gmail.com"},
    {name:"Anil",age:23, email:"anil@gmail.com"},
    {name:"Vivek",age:12, email:"vivek@gmail.com"},
  ]

  child1data:string = "";
  updateData(item:string)
  {
    console.warn(item);
    this.child1data = item;

  }

  binding:any;
  titleData:string = "IAmPrathmesh";
}
