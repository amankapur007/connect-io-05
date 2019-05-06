import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Message} from '../../models/messages/messages.model';
import { MESSAGE_LIST } from '../../mocks/messages/messages';

@IonicPage({})
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() { }
  messageList:Message[]=MESSAGE_LIST;
  ngOnInit() {
        console.log("inbox");
  }

  ionViewDidLoad(){
    console.log(this.messageList);
  }

}