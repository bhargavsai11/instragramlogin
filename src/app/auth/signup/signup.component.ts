import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router) { }
  submit(form: NgForm) {
    const email = form.value.email;
    const fullname = form.value.fullname;
    const username = form.value.username;
    const password = form.value.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(userData => {
      console.log(userData);
      this.toastr.success(`sucess email has been sent to ${email}`);
      userData.user.sendEmailVerification();
      firebase.database().ref("/user" + userData.user.uid).set({
        uid: userData.user.uid,
        email,
        password,
        username,
        fullname,
        registrationDate: new Date().toString()
      });
      this.router.navigate(['/signin']);
    }).catch(err => {
      this.toastr.error(err.message);
      console.log(err);
    });
  }
  ngOnInit() {
  }

}
