import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './screens/login/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { cookieInterceptor } from './interceptor/cookie.interceptor';


@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: cookieInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
