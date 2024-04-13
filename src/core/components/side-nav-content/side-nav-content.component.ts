import { Component } from '@angular/core';
import { navItem } from './interfaces/nav-item.interface';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrl: './side-nav-content.component.scss'
})
export class SideNavContentComponent {

  public items : navItem[] = [
    {
      title: 'Home',
      icon: 'Home',
      link: '/',
    },
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
    },
  ];

}
