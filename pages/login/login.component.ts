import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage } from 'ionic-angular';
import { InboxComponent } from '../inbox/inbox.component';
import { RegisterComponent } from '../register/register.component';
import { TabsComponent } from '../tabs/tabs.component';


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
    console.log(page)
    if(page===RegisterComponent.name){
    this.navCtrl.push(RegisterComponent);
    }else if(page===TabsComponent.name){
      this.navCtrl.setRoot(TabsComponent);
    }
  }
}