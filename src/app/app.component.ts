import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgbAlertModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngBootstrap';

  taskdetail:any[] = [];


  addtask(item:string)
  {
    this.taskdetail.push({id:this.taskdetail.length,name:item})
    
  }

  Remove(id:number)
  {
    this.taskdetail = this.taskdetail.filter(i => i.id!==id);
  }
}
