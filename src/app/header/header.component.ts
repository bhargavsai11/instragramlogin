import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  isLoggedin: Boolean = false;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userDate => {
      if (userDate.emailVerified) {
        this.isLoggedin = true;
      } else {
        this.isLoggedin = false;
      }
    });
  }
  logout(user) {
    firebase.auth().signOut();
    this.userservice.destroyData();
    this.router.navigate(['/signin']);
  }
}
