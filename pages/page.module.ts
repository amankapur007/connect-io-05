import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InboxComponent } from './inbox/inbox.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    InboxComponent,
    TabsComponent
  ],
  imports: [
    IonicModule.forRoot(LoginComponent)
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class PageModule {}
