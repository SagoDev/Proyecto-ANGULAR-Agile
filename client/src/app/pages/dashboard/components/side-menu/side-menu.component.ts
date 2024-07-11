import { Component } from '@angular/core';
import { DASHBOARD_ROUTES } from '../../dashboard.routes';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {  
  public dashboardOptions = DASHBOARD_ROUTES.map(r => r.children ?? []).flat();
 
}
