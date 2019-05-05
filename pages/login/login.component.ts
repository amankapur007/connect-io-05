import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage } from 'ionic-angular';
import { InboxComponent } from '../inbox/inbox.component';
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
    if(page===RegisterComponent.name){
    this.navCtrl.push(RegisterComponent);
    }else if(page===InboxComponent.name){
      this.navCtrl.setRoot(InboxComponent);
    }
  }
}