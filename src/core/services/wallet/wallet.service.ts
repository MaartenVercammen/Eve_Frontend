import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }


  getBalance = () => {
    return this.http.get<number>('http://localhost:8080/wallet/balance');
  }

}
