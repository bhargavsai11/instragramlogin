import { UserService } from './../../service/user.service';
import { MyfileService } from './../../service/myfile.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private toastr: ToastrService, private myfile: MyfileService, private userservice: UserService, private router: Router) { }
  submit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    firebase.auth().signInWithEmailAndPassword(email, password).then(userData => {
      if (userData.user.emailVerified) {
        this.myfile.getDataFromDatabase(userData.user.uid).then(userDataFromDatabase => {
          this.userservice.set(userDataFromDatabase);
          this.toastr.success(`${email} has been succeswfully verified`);
          this.router.navigate(['/addimages']);
        }).catch(err => console.log(err));
      } else {
        this.toastr.error(`${email} is not verified`);
        firebase.auth().signOut();
      }
    }).catch(err => {
      this.toastr.error(err.message);
    });
  }
  ngOnInit() {

  }

}
