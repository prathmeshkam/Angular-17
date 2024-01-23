import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { InvalidComponent } from './invalid/invalid.component';
import { canActivateGuard } from './guards/can-activate.guard';



export const routes: Routes = [
// {path:'admin' , loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
{path:'admin' , component:AdminComponent,children:[{path:'adminlogin',component:AdminloginComponent , }]},
{path:'contact' , component:ContactComponent,canActivate:[canActivateGuard], },
{path:'user' , component:UserComponent},
{path:'**' , component:InvalidComponent},
{path:'invalid' , component:InvalidComponent},
];
