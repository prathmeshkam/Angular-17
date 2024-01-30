import { Component } from '@angular/core';
import { ShapeService } from '../services/shape.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-shape',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {
  shape = '';
  color = '';
  shapeClass = '';
  constructor(private shapeService:ShapeService){

  }
  drawShape() {
    this.shapeClass = this.shapeService.getClassName(this.shape,this.color);
  }

}
