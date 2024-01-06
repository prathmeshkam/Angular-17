import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginComponent,HeaderComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {
  title = 'first';
  greet = 'Good Evening';
  display:string = "";
  getValue(val:string,ln:string)
  {
    alert("Person Name: "+val +" " +ln);
  }

  getText(tval:string)
  {
    console.warn(tval);
    this.display = tval;
  }

  tsum = 0;
  counter(val:string)
  {
    val==='sum'?this.tsum++:this.tsum--;
  }



  show = true;
  color = 'black';
  bgcolor = '';

  person = ['Prahtmesh',"aniket" , "Akshay"];
  persondetails = [
    {name:'Prathmesh' , Age:"23"},
    {name:'Vikas' , Age:"24"},
    {name:'Anil' , Age:"25"},
  ]

  studentdetail = [
    {name:'Prathmesh' , age:'68',social:['Insta','facebook']},
    {name:'Vikas' , age:'67',social:['Insta','Linedin']},
    {name:'Aniket' , age:'69',social:['LinkedIn','facebook']},
    {name:'Vivek' , age:'58',social:['Insta','facebook']},
    {name:'digivjay' , age:'59',social:['Insta','Twitter']},
  ]
  
  changeColor()
  {
    this.color = 'white';
    this.bgcolor = 'black';
  }

  userData:any = {};
  getFormData(data:NgForm)
  {
    console.warn(data);
    this.userData = data;
  }


  displaycounter = false;
  toggle()
  {
    this.displaycounter = !this.displaycounter;
  }
}
