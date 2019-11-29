import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'intragram';
  ngOnInit() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDf9Q3el0e9VvagTMfglyIAqvQN6g5joF8",
      authDomain: "instragram1-f4691.firebaseapp.com",
      databaseURL: "https://instragram1-f4691.firebaseio.com",
      projectId: "instragram1-f4691",
      storageBucket: "instragram1-f4691.appspot.com",
      messagingSenderId: "268590985797",
      appId: "1:268590985797:web:b2b5bc4d13459f7586a92c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
