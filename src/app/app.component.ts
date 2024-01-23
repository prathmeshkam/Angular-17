import { Component ,ViewChild,ViewContainerRef,ComponentFactoryResolver,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatExpansionModule,RouterLink,MatPaginatorModule,MatListModule,AdminComponent,
    FormsModule,MatRippleModule,MatButtonToggleModule,PopupComponent,MatDialogModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./style.scss','./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  myColor = 'green';
  remove = 'red';
  e ='green';
  totalTask:number = 0;
  taskdetail:any[] = [];
  paginatedTaskDetail: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog){}
  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => {
      this.paginateTaskDetail();
    });
    this.paginateTaskDetail();
  }
  expanded = false;

  onPanelOpened(): void {
    this.expanded = !this.expanded  ;
  }

  addTask(item: string): void {
    const newTask = { id: this.taskdetail.length + 1, name: item };
    this.taskdetail = [newTask, ...this.taskdetail];
    this.totalTask++;
    this.paginateTaskDetail();
  }

  high(): void {
    // Your existing high function
  }
  inputElement='';
  clearInput(): void {
    this.inputElement = ''; // Clear the input value
  }

  removeTask(id: number): void {
    this.taskdetail = this.taskdetail.filter((i) => i.id !== id);
    this.totalTask--;
    this.paginateTaskDetail();
  }

  private paginateTaskDetail(): void {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.paginatedTaskDetail = this.taskdetail.slice(startIndex, endIndex);
  }
  flag:boolean = false;
  editId:number = 0;
  edit(id:number){
    // this.taskdetail = this.taskdetail.filter((i) => i.id !== id); 
    // this.editfocus.focus();
    // console.log("success")
    this.flag = !this.flag;
    this.editId = id;
    console.warn(this.editId);
  }
  date = Date();

  updateTask(newName:string)
  {
    const index = this.taskdetail.findIndex(item => item.id === this.editId);
    
    if(index !== -1)
    {
      this.paginatedTaskDetail[index].name = newName;
      
    }

    console.warn(newName);
  }
 






























  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     width: '250px', // Set the width as needed
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed', result);
  //   });
  // }
  








































  // constructor(private container:ViewContainerRef , private cfr:ComponentFactoryResolver){}

  // async getadmin(){
  //   this.container.clear();

  //   const {AdminComponent} = await import('./admin/admin.component');

  //   this.container.createComponent(
  //     this.cfr.resolveComponentFactory(AdminComponent));
  // }
}

