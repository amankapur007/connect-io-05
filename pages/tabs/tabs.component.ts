import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tab1Root:string;
  tab2Root:string;
  tab3Root:string;

  constructor() { 
    this.tab1Root="InboxComponent";
    this.tab2Root="ChannelComponent";
    this.tab3Root="ProfileComponent";
  }

  ngOnInit() {
  }

}