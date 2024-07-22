import { Component, inject } from '@angular/core';
import { USER_OPTIONS_ROUTES } from '../user options/user.options.routes';
import { PRACTICES_ROUTES } from '../practices/practices.routes';
import { RouterModule } from '@angular/router';
import { IconService } from '../../../../core/services/icons.service';


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
  public iconService = inject(IconService);

  getIconForOption(practice: any): string {
    const title = typeof practice.title === 'string' ? practice.title : undefined;
    return this.iconService.getIcon(title);
  }
}
