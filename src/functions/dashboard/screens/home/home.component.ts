import { WalletService } from './../../../../core/services/wallet/wallet.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public isk = this.walletService.getBalance();

  constructor(private walletService : WalletService) { }

}
