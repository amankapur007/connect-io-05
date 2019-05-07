import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Account } from '../../models/account/account.model';

@IonicPage({})
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

constructor(private navCtrl:NavController, private navParam:NavParams, private afAuth:AngularFireAuth, private toast:ToastController) { }

  ngOnInit() {
  }

  ionViewDidLoad(){
    const result = this.navParam.get("result");
    console.log(result);
  }
}