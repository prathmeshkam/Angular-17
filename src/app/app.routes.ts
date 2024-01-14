import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { ChildComponent } from './child/child.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { NoPageComponent } from './no-page/no-page.component';

export const routes: Routes = [
    {path:'child' , component:ChildComponent},
    {path:'child1' , component:Child1Component},
    {path:'currency-converter',component:CurrencyConverterComponent},
    {path:'child/:id',component:ChildComponent},
    {path:'**',component:NoPageComponent}
];
