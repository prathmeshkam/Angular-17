import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoginComponent,
    UserComponent
  ]
})
export class AdminModule { }
