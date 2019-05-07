import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from '../../models/user/user.model';
import data from '../../json/countrycode';

@IonicPage({})
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {} as User;
constructor(private navCtrl:NavController, private navParam:NavParams, private afAuth:AngularFireAuth, private toast:ToastController) { }

  ngOnInit() {
  }

  ionViewDidLoad(){
    const result = this.navParam.get("result");
    console.log(data);
    this.populateDetails(result);
  }

  populateDetails(result){
      if(result){
        this.user.email=result.user.email;
        this.user.uid=result.user.uid;
      }
  }
}