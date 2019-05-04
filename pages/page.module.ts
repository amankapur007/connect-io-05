import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
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
