import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderControlService } from '../services/header-control.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  menus: any[] = [
    {
      label: 'Home',
      url: '/homepage'
    },
    {
      label: 'About Us',
      url: '/about-us'
    },
    {
      label: 'Jobs',
      url: '/jobs'
    },
    {
      label: 'Clients',
      url: '/clients'
    },
    {
      label: 'Employees',
      url: '/employees'
    },
    {
      label: 'Contact Us',
      url: '/contact-us'
    }
  ];
  toggle: boolean = false;
  currentPath: string = ""
  isScrolled: boolean = false;
  @HostListener('window:scroll')
  whenwindowscroll(): void {
    if (window.pageYOffset > 300) {
      this.isScrolled = true;
    }
    else {
      this.isScrolled = false;
    }
  }
  constructor(private headerControl: HeaderControlService) {
    this.controlNav();
  }

  ngOnInit(): void {
  }

  menuToggle(): void {
    this.toggle = !this.toggle;
  }

  controlNav(): void {
    this.headerControl.navControl.subscribe(res => {
      this.currentPath = res;
    })
  }

}
