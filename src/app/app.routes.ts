import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    {path:'child' , component:ChildComponent},
    {path:'child1' , component:Child1Component}
];
