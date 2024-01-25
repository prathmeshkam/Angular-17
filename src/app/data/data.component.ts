import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [HttpClientModule,MatTableModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit{

ngOnInit():void {
  this.getalluser();
}
constructor(private service:DataserviceService){

}
data:any;
getalluser()
{
this.service.getAll().subscribe(res => {
this.data = res;
console.log(this.data);
});
}



displayedColumns: string[] = ['name', 'age'];
  
}
