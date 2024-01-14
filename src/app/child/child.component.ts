import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  id:any;
// @Input() item;
// @Input() user:{name:string,age:number,email:string}={name:"",age:-1,email:''};
constructor(private route: ActivatedRoute){}

ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.warn(this.id);
}

}
