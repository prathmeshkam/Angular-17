import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutCompanyComponent } from '../about-company/about-company.component';
import { AboutMeComponent } from '../about-me/about-me.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,AboutCompanyComponent,AboutMeComponent,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
