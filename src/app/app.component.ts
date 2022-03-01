import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderControlService } from './services/header-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  constructor(private headerControl: HeaderControlService, private router: Router) { }
  getRoutePath(): void {
    this.headerControl.routerPath(this.router.url);
  }
}
