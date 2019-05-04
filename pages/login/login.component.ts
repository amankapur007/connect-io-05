import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage } from 'ionic-angular';
import { RegisterComponent } from '../register/register.component';

@IonicPage({})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private navCtrl:NavController, private navParams:NavParams) { }

  ngOnInit() {
  }

  navigateToPage(page:string){
    this.navCtrl.push(RegisterComponent);
  }
}