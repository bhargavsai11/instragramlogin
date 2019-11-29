import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class MyfileService {

  constructor() { }
  getDataFromDatabase(uid) {
    var mbs = firebase.database().ref("users" + uid);
    return mbs.once("value").then(ssn => ssn.val()).catch(err => console.log(err))
  }
}
