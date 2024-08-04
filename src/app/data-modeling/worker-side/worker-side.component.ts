import { Component, inject } from '@angular/core';
import { from, mergeMap, Subscription } from 'rxjs';
import { ImageService } from '../service/image.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
const { Connection, PublicKey, LAMPORTS_PER_SOL,Transaction,SystemProgram } = require('@solana/web3.js');
import {
  WalletStore,
  injectConnected,
  injectPublicKey,
  injectWallet,
  injectWallets,
  injectConnection
} from '@heavy-duty/wallet-adapter';

@Component({
  selector: 'app-worker-side',
  templateUrl: './worker-side.component.html',
  styleUrls: ['./worker-side.component.scss']
})

export class WorkerSideComponent {
  workerDetails: any = {
    imageDetails: null,
    urlArray:[]
  };
  imageTab = false;
  selectedValues: { [key: string]: any } = {};
  balanceAmount: any;
  signatureDetails: any;
  private readonly _walletStore = inject(WalletStore);
  transcationSignature: any;
  // private _snackBar: any;
  constructor(
    private imageService: ImageService,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private router: Router
  ){

  }
  subscriptionObj: Subscription = new Subscription;

  ngOnInit(): void{
    this.subscriptionObj.add(this.imageService.getAllImages().subscribe((res: any) =>{
      this.workerDetails.imageDetails = res;
    }));
    this.subscriptionObj.add(this.imageService.getUserBalance().subscribe((res:any)=>{
      console.log("balanace details",res);
      this.balanceAmount = res.balanceAmount
    }))
  }
  startTask(id: any,isAdmin ?: any){
    this.subscriptionObj.add(this.imageService.getParticularImage(id).subscribe((res:any)=>{
       this.workerDetails.urlArray = res.options.map((res: any) => res);
      this.imageTab = true;
    }));
    if(isAdmin){
      this.router.navigate(['/response',id]);


    }
    
  }
  saveSubmission(){
    console.log(this.selectedValues);
    const data= {
      optionsId:this.selectedValues
    }
    this.imageService.createOptionSubmission(data).subscribe((res:any)=>{
      if(res ){
        this._snackBar.open("You successfully completed the task", "ok");
        this.imageTab = false;
        
      }
      
    });
    
  }
  handleSignatureDetails(event:any){
    this.signatureDetails = event;
  }
  payMeOut(){
    let endpoint = "https://solana-devnet.g.alchemy.com/v2/aA2TiHF2naAjQ1dhe93_vXFAKUSViU-o"
    const connection = new Connection(endpoint, 'confirmed');
    console.log("this.signatureDetails.publicKey",this.signatureDetails.publicKey);
    
    const transaction = new Transaction().add(
      // Add any necessary instructions here
      SystemProgram.transfer({
        fromPubkey: new PublicKey('338kuMtzV7weXWiVeDSSzDzA4Hx9XAfzN8CopsxgqV4k'), // Replace with the recipient's public key
        toPubkey:new PublicKey(this.signatureDetails.publicKey),
        lamports: this.balanceAmount * 1000000000, // Amount to transfer (1 SOL in this example)
      })
    );
    const { blockhash, feeCalculator } =  connection.getRecentBlockhash();
    console.log("feeCalculator",feeCalculator);
    
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = new PublicKey(this.signatureDetails.publicKey);
    
    const signature =   from(this._walletStore.sendTransaction(transaction, connection));
    console.log("signature",signature);
    
    signature.pipe(
      mergeMap((res:any)=>{
        console.log('Transaction sent with signature:', res);
        this.transcationSignature = res;
    
        // Confirm the transaction
        return from(connection.confirmTransaction(this.transcationSignature, 'confirmed'));
      })
    ).subscribe((res:any)=>{
      console.log("Transcation completed",res);

    
      
    },
    (error) => {
      console.error('Error:', error);
    }
  )
    
  }




  

}
