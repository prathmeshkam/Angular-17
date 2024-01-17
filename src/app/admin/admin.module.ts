import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginComponent,
    UserComponent
  ]
})
export class AdminModule { }
