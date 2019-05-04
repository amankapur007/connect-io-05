import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { ComponentModule} from '../components/component.module'
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { InboxComponent } from '../pages/inbox/inbox.component';

@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    RegisterComponent, 
    InboxComponent
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    RegisterComponent,
    InboxComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,StatusBar
  ]
})
export class AppModule {}
