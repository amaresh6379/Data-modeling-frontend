import { Component, inject } from '@angular/core';
import { sharedService } from 'src/app/shared/service/shared.service';
const { Connection, PublicKey, LAMPORTS_PER_SOL,Transaction,SystemProgram } = require('@solana/web3.js');
import { Buffer } from 'buffer';
import { HttpClient } from '@angular/common/http';
import {
  WalletStore,
  injectConnected,
  injectPublicKey,
  injectWallet,
  injectWallets,
  injectConnection
} from '@heavy-duty/wallet-adapter';
import { from, mergeMap } from 'rxjs';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  dialogRef: any;
  imageArray: any = [];
  private readonly _walletStore = inject(WalletStore);
  signatureDetails: any;
  transcationSignature: any;
  router: any;
  urlDetails:any;
  file: any;
  http: any;

  constructor(
    public sharedService: sharedService,
    public ImageService: ImageService,
    private httpService:HttpClient
    
  ) {}

  ngOnInit() {


  }

  UploadImage() {
    this.dialogRef = this.sharedService.uploadDialog();
    this.dialogRef.componentInstance.imgUrl.subscribe((data: any) => {
      this.imageArray.push(data.url);
      this.file = data.file;
            this.ImageService.getPreSignedUrl().subscribe((res)=>{
        console.log("url.....",res);
        this.urlDetails = res
        const formData = new FormData();
        Object.keys(this.urlDetails.fields).forEach(key => {
          formData.append(key, this.urlDetails.fields[key]);
      });
      formData.append('file',this.file);
      const uploadResponse =  this.httpService.post(this.urlDetails.url, formData);
      console.log("uploadResponse",uploadResponse);
      uploadResponse.subscribe((res)=>{
        console.log("upload res",res);
        
      })


        
      })
    });
  }
  handleSignatureDetails(event:any){
    this.signatureDetails = event;

  }
   async PayAmount() {
    let endpoint = "https://solana-devnet.g.alchemy.com/v2/aA2TiHF2naAjQ1dhe93_vXFAKUSViU-o"
    const connection = new Connection(endpoint, 'confirmed');
    console.log("this.signatureDetails.publicKey",this.signatureDetails.publicKey);
    
    const transaction = new Transaction().add(
      // Add any necessary instructions here
      SystemProgram.transfer({
        fromPubkey:new PublicKey(this.signatureDetails.publicKey),
        toPubkey: new PublicKey('338kuMtzV7weXWiVeDSSzDzA4Hx9XAfzN8CopsxgqV4k'), // Replace with the recipient's public key
        lamports: 10000000, // Amount to transfer (1 SOL in this example)
      })
    );
    const { blockhash, feeCalculator } = await connection.getRecentBlockhash();
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
