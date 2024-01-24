import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { InvalidComponent } from './invalid/invalid.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,MatButtonModule,AdminComponent,AdminloginComponent,ContactComponent,UserComponent,InvalidComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

constructor(private router:Router,){}
  admin(){
    this.router.navigate(['admin']);
  }
  contact(){
    this.router.navigate(['contact']);
   
  }
  user(){
    this.router.navigate(['user']);
  }








  

}
