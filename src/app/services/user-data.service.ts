import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData:Subject<any> = new BehaviorSubject<any>({})
  constructor() { }
}
