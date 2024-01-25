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
import { Observable, Subscription } from 'rxjs';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';

import { DataserviceService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,MatButtonModule,AdminComponent,AdminloginComponent,
    ContactComponent,UserComponent,
    InvalidComponent,DataComponent,HttpClientModule],
  providers:[DataserviceService],
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
  db(){
    this.router.navigate(['data']);
  }
  

  observ:any;
  promise:any;
  sub:any;
  create()
  {
    this.observ = new Observable<string>(o => {
      console.log("Observable declare");
      // o.next("Observable");
      // o.next("Observable1");
      // o.next("Observable2");
      // o.next("Observable3");
      // o.next("Observable4");
      // setInterval(()=>{
      //   o.next("Observable resolve");
      // },1000)
      setTimeout(()=>{
        o.next("Observable resolve set timeout");
      },1000)

    })

    this.promise = new Promise<string>(resolve=>{
      console.log("Promise Declare");
      // resolve("Promise Created");
      // resolve("Promise Created1");
      // resolve("Promise Created2");
      // resolve("Promise Created3");
      // setInterval(()=>{
      //   resolve("Promise Resolve")
      // },1000)

      setTimeout(()=>{
        resolve("Promise Resolve set timeout")
      },1000)
    }
    )
  }
  execute()
  {
    this.sub = this.observ.subscribe((data: any) => {
      console.log(data);
    })

    this.promise.then((data:any) => {
      console.log(data);
    })
  }

  cancel()
  {
    this.sub.unsubscribe();
  }

  name:string='';







}
