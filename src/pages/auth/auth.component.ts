import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { authCallbackInfo } from '../../types/auth.type';
import { LoginLinkContract } from './interfaces/contract/loginLinkContract.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  public link = this.authService.getEveLoginLink();

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var { code, state } = this.getCodeAndStateFromUrl();
    console.warn("code: " + code + " state: " + state);
    if (code && state) {
      console.warn("calling eve with " + code);
      this.authService.getToken(code, state).subscribe((data) => {
        console.log(data);
      });
    }
  }

  getCodeAndStateFromUrl = () => {
    var code = window.location.href.split("code=")[1].split("&")[0];
    var state = window.location.href.split("state=")[1];
    return { code: code, state: state };
  }


}
