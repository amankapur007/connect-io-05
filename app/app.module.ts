import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';

import { PageModule} from '../pages/page.module'
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { InboxComponent } from '../pages/inbox/inbox.component';
import { TabsComponent } from '../pages/tabs/tabs.component';

@NgModule({
  declarations: [
    MyApp,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,StatusBar
  ]
})
export class AppModule {}
