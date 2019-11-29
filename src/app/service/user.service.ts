import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  set(getDataFromData) {
    localStorage.setItem('user', JSON.stringify(getDataFromData));
  }
  destroyData() {
    localStorage.removeItem('user');
  }
}
