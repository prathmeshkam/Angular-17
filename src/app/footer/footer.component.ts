import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  user:any;
  constructor(private userdata:UserDataService){
    console.warn("User: ",userdata.user())
    this.user = userdata.user();
  }
}
