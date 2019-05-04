import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage } from 'ionic-angular';

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
    if(page==="RegisterComponent"){
    this.navCtrl.push(page);
    }else if(page==="InboxComponent"){
      this.navCtrl.setRoot(page);
    }
  }
}