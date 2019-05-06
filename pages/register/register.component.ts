import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

}