import { Component, OnInit, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  WalletStore,
  injectConnected,
  injectPublicKey,
  injectWallet,
  injectWallets,
} from '@heavy-duty/wallet-adapter';
import { WalletName } from '@solana/wallet-adapter-base';
import { Subscription, filter, map, mergeMap, of, switchMap,tap } from 'rxjs';
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
  constructor(
    private sharedService: sharedService
  ){}

  ngOnInit() {
    


  }

  onConnect() {
    console.log('Starting to connect wallet');
    console.log("publicKey",this.publicKey());
    // this.publicKey.effect((pk:any) => {
    //   console.log("publicKey", pk);
    // });
    
    const walletName = 'Phantom' as WalletName<'Phantom'>;
    this._walletStore.selectWallet(walletName);
    // this._walletStore.selectWallet();

    // this._walletStore.connect().subscribe({
    //   next: () => console.log('Wallet connected'),
    //   error: (error) => console.error(error),
    // })
    this._walletStore.connect().pipe(
      mergeMap(() => {
        console.log("entered...");
        const encodedMessage = new TextEncoder().encode("Sign Into mTruck");
        console.log("encodedMessage", encodedMessage);
  
        const signMessage$ = this._walletStore.signMessage(encodedMessage);
        if (signMessage$) {
          return signMessage$.pipe(
            tap((res) => {
              console.log("res", res);
              console.log("publickey",this.publicKey().toBase58());              
              const data = {
                signature: res,
                // publicKey: this.publicKey.toBase58()
              }
              this.sharedService.connectToWallet(data).subscribe((res)=>{
                if(res){
                  console.log("token",res)
                }
              });
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

  // this._walletStore.connect().pipe(
  //   mergeMap(() => {
  //     this.onSignMessage(); // Call the onSignMessage method
  //     return []; // Return an empty observable if you do not need to continue the chain
  //   })
  // ).subscribe({
  //   next: () => console.log('Wallet connected'),
  //   error: (error) => console.error(error)
  // });
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
