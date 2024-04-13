import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './screens/login/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';


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
  ]
})
export class AuthModule { }
