import { Component } from '@angular/core';
import { USER_OPTIONS_ROUTES } from '../user options/user.options.routes';
import { PRACTICES_ROUTES } from '../practices/practices.routes';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public practiceOptions = PRACTICES_ROUTES;
  public userOptions = USER_OPTIONS_ROUTES;
}
