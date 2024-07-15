import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { USER_SETTINGS_ROUTES } from './components/settings/settings.routes';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export default class UserProfileComponent {
  public userSettings = USER_SETTINGS_ROUTES.flat();
}
