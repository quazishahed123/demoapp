import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderControlService {
  navControl:Subject<any> = new Subject();
  constructor() { }
  routerPath(path:string):void{
    this.navControl.next(path)
  }
}
