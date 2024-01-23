import { Component} from '@angular/core';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminloginComponent,RouterOutlet,RouterLink,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
constructor(){
  localStorage.setItem('contact','false');
}
check(h:string){
  if(h==='access')
  {
    localStorage.setItem('contact','true');
    console.warn("AccessDone");
  }
  else{
    localStorage.setItem('contact','false');
    console.warn("Done");
  }
  console.warn(h)
}
}
