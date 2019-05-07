import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { CONFIG } from './app.config';
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
    AngularFireModule.initializeApp(CONFIG.FIREBASE_CONFIG),
    AngularFireAuthModule,
    
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
