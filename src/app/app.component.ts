import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';
import { AddtwoPipe } from './pipes/addtwo.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MakeRedDirective } from './directives/make-red.directive';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { NoPageComponent } from './no-page/no-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbAlertModule, ChildComponent, 
  Child1Component, FormsModule, AddtwoPipe, ReactiveFormsModule, MakeRedDirective, CurrencyConverterComponent,NoPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngBootstrap';

  taskdetail: any[] = [];

  color: string = "";
  addtask(item: string) {

    this.taskdetail.push({ id: this.taskdetail.length, name: item });

  }
  high() {
    this.color = 'yellow';
  }

  Remove(id: number) {
    this.taskdetail = this.taskdetail.filter(i => i.id !== id);
  }

  data = 10;


  updateChild() {
    this.data = Math.floor(Math.random() * 10);
  }

  userData = [
    { name: "Prathmesh", age: 44, email: "prath@gmail.com" },
    { name: "Vikas", age: 45, email: "vikas@gmail.com" },
    { name: "Anil", age: 23, email: "anil@gmail.com" },
    { name: "Vivek", age: 12, email: "vivek@gmail.com" },
  ]

  child1data: string = "";
  updateData(item: string) {
    console.warn(item);
    this.child1data = item;

  }

  binding: any;
  titleData: string = "IAmPrathmesh";

  getform(item: any) {
    console.warn(item);
  }


  // Reactive Form
  loginform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(8)])
  })

  getReactiveForm() {
    console.warn(this.loginform.value);
  }

  get name() {
    return this.loginform.get('name');
  }
  get email() {
    return this.loginform.get('email');
  }
  get password() {
    return this.loginform.get('password');
  }
}
