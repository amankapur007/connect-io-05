import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
     ],
  imports: [
   ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class LoginModule {}
