import { Component, OnInit } from '@angular/core';
import { Platform, Navbar, NavController, NavParams,IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Account } from '../../models/account/account.model';


@IonicPage({})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account = {} as Account;
  constructor(private afAuth:AngularFireAuth, private toast:ToastController) { }

  ngOnInit() {
  }

  async register(){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
    this.toast.create({
      message:"User is successfully registered",
      duration:3000
    }).present();
  }catch(e){
    console.log(e);
    this.toast.create({
      message:e.message,
      duration:3000
    }).present();
  }
  }
}