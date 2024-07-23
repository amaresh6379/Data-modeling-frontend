import { Component, EventEmitter, OnInit, Output, computed, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  WalletStore,
  injectConnected,
  injectPublicKey,
  injectWallet,
  injectWallets,
} from '@heavy-duty/wallet-adapter';
import { WalletName } from '@solana/wallet-adapter-base';
import { mergeMap, of, tap } from 'rxjs';
import { sharedService } from '../service/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private readonly _walletStore = inject(WalletStore);
  private readonly _formBuilder = inject(FormBuilder);
  readonly wallet = injectWallet();
  readonly connected = injectConnected();
  readonly publicKey = injectPublicKey();
  readonly wallets = injectWallets();
  readonly walletName = computed(() => 'Phantom');
  readonly messageControl = this._formBuilder.control<string>('', {
    nonNullable: true,
  });
  connectionStatus: boolean = false;
  @Output() signatureDetails = new EventEmitter<any>();
  data: any;

  constructor(
    private sharedService: sharedService
  ) {}

  ngOnInit() {
    this.onConnect();

  }

  onConnect() {
    console.log('Starting to connect wallet');
    
    const walletName = 'Phantom' as WalletName<'Phantom'>;
    this._walletStore.selectWallet(walletName);

    this._walletStore.connect().pipe(
      mergeMap(() => {
        console.log('entered...');
        const encodedMessage = new TextEncoder().encode('Sign Into mTruck');
        console.log('encodedMessage', encodedMessage);

        const signMessage$ = this._walletStore.signMessage(encodedMessage);
        console.log('publicKeyed', this.publicKey());
        if (signMessage$) {
          return signMessage$.pipe(
            tap((res) => {
              this.data = {
                signature: res,
                publicKey: this.publicKey()
              };
              this.sharedService.connectToWallet(this.data).subscribe((res: any) => {
                if (res && res.token) {
                  localStorage.setItem('token', res.token);
                }
              });
              this.signatureDetails.emit(this.data); // Emit the data here
            })
          );
        } else {
          console.error('Wallet is not capable of message signing.');
          return of(); // Return an empty observable if signMessage$ is not available
        }
      })
    ).subscribe({
      next: () => {
        console.log('Wallet connected');
        this.connectionStatus = true;
      },
      error: (error) => console.error(error)
    });
  }

  onDisconnect() {
    console.log('Starting to disconnect wallet');

    this._walletStore.disconnect().subscribe({
      next: () => {
        console.log('Wallet disconnected');
        this.connectionStatus = false;
      },
      error: (error) => console.error(error),
    });
  }
}
