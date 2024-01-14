import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtwoPipe } from '../pipes/addtwo.pipe';
import {FormsModule, Validators,} from '@angular/forms'
import { MakeRedDirective } from '../directives/make-red.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [AddtwoPipe,FormsModule ,MakeRedDirective,ReactiveFormsModule,CommonModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatCardModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',

})
export class CurrencyConverterComponent {
a:number=0;
curdata = new FormGroup({
amt: new FormControl(this.a ,(Validators.required,Validators.pattern('^[0-9]+$'))),
currency:new FormControl('',(Validators.required,Validators.pattern('[A-Z]+$'))),
})


get currency(){
  return this.curdata.get('currency');
}

get amt()
{
  return this.curdata.get('amt'); 
}
}
