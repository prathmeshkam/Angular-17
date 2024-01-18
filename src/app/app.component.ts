import { Component ,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatExpansionModule,RouterLink,MatPaginatorModule],
  templateUrl: './app.component.html',
  styleUrls: ['./style.scss','./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  color = 'green';
  taskdetail:any[] = [];
  paginatedTaskDetail: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => {
      this.paginateTaskDetail();
    });
    this.paginateTaskDetail();
  }

  addTask(item: string): void {
    this.taskdetail.push({ id: this.taskdetail.length + 1, name: item });
    this.paginateTaskDetail();
  }

  high(): void {
    // Your existing high function
  }

  removeTask(id: number): void {
    this.taskdetail = this.taskdetail.filter((i) => i.id !== id);
    this.paginateTaskDetail();
  }

  private paginateTaskDetail(): void {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.paginatedTaskDetail = this.taskdetail.slice(startIndex, endIndex);
  }
  p:number = 1;
  collection:any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];

}

