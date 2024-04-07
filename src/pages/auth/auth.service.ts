import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authCallbackInfo } from '../../types/auth.type';
import { Observable } from 'rxjs';
import { LoginLinkContract } from './interfaces/contract/loginLinkContract.interface';

const tokenPOSTUrl = 'https://login.eveonline.com/v2/oauth/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  getEveLoginLink = () => {
    return this.http.get<LoginLinkContract>('http://localhost:8080/login/link');
  }

  getToken = (code: string, state : string) => {
    return this.http.post('http://localhost:8080/login/code', {
      code: code,
      state: state
    });
  }
}
