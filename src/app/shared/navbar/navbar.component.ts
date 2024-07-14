import { Component } from '@angular/core';
import {
  injectConnected,
  injectPublicKey,
  injectWallet,
} from '@heavy-duty/wallet-adapter';
import { computed } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  imageTab: Boolean = false;
  readonly connected = injectConnected();
  readonly publicKey = injectPublicKey();
  readonly wallet = injectWallet();
  readonly walletName = computed(() => this.wallet()?.adapter.name ?? 'None');

  constructor() {}

  ConnectWallet() {
    this.imageTab = true;
  }
}
