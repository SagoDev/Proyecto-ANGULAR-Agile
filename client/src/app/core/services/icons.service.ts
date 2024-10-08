import { Injectable } from '@angular/core';
import { Icon } from '../interfaces/icon.interface';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private icons: Icon[] = [
    {
      id: '1',
      name: 'Profile',
      icon: 'bi bi-person-lines-fill'
    },
    {
      id: '2',
      name: 'Tasks',
      icon: 'bi bi-list-task'
    },
    {
      id: '3',
      name: 'Social Contract',
      icon: 'bi bi-clipboard-check'
    },
    {
      id: '4',
      name: 'Launch Plan',
      icon: 'bi bi-rocket-takeoff-fill'
    },
    {
      id: '5',
      name: 'Workboard',
      icon: 'bi bi-columns-gap'
    },
    {
      id: '6',
      name: 'Group Mood',
      icon: 'bi bi-emoji-smile'
    }
  ];

  getIcon(iconName: string | undefined): string {
    if (!iconName) {
      return 'icon_not_exist';
    }
    for (let i = 0; i < this.icons.length; i++) {
      if (this.icons[i].name === iconName) {
        return this.icons[i].icon;
      }
    }
    return 'icon_not_exist';
  }
  constructor() { }
}
