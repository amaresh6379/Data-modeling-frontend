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
import { forkJoin, from, map, mergeMap, switchMap } from 'rxjs';
import { ImageService } from '../service/image.service';
import { Router } from '@angular/router';
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
  urlDetails:any;
  file: any;
  http: any;
  fileName:string[] = [];
  titleName: any;
  url:any = [];

  constructor(
    public sharedService: sharedService,
    public ImageService: ImageService,
    private httpService:HttpClient,
    private router:Router
    
  ) {}

  ngOnInit() {


  }

  UploadImage() {
    this.dialogRef = this.sharedService.uploadDialog();
    this.dialogRef.componentInstance.imgUrl.subscribe((data: any) => {
      this.imageArray.push(data.url);
      this.file = data.file;
      this.fileName.push(data.file.name);
    });
  }
  handleSignatureDetails(event:any){
    this.signatureDetails = event;

  }
   async PayAmount(title:any) {

  //   let endpoint = "https://solana-devnet.g.alchemy.com/v2/aA2TiHF2naAjQ1dhe93_vXFAKUSViU-o"
  //   const connection = new Connection(endpoint, 'confirmed');
  //   console.log("this.signatureDetails.publicKey",this.signatureDetails.publicKey);
    
  //   const transaction = new Transaction().add(
  //     // Add any necessary instructions here
  //     SystemProgram.transfer({
  //       fromPubkey:new PublicKey(this.signatureDetails.publicKey),
  //       toPubkey: new PublicKey('338kuMtzV7weXWiVeDSSzDzA4Hx9XAfzN8CopsxgqV4k'), // Replace with the recipient's public key
  //       lamports: 10000000, // Amount to transfer (1 SOL in this example)
  //     })
  //   );
  //   const { blockhash, feeCalculator } = await connection.getRecentBlockhash();
  //   console.log("feeCalculator",feeCalculator);
    
  //   transaction.recentBlockhash = blockhash;
  //   transaction.feePayer = new PublicKey(this.signatureDetails.publicKey);
    
  //   const signature =   from(this._walletStore.sendTransaction(transaction, connection));
  //   console.log("signature",signature);
    
  //   signature.pipe(
  //     mergeMap((res:any)=>{
  //       console.log('Transaction sent with signature:', res);
  //       this.transcationSignature = res;
    
  //       // Confirm the transaction
  //       return from(connection.confirmTransaction(this.transcationSignature, 'confirmed'));
  //     })
  //   ).subscribe((res:any)=>{
  //     console.log("Transcation completed",res);

    
      
  //   },
  //   (error) => {
  //     console.error('Error:', error);
  //   }
  // )


  // to upload data in s3 and db..
  // this.ImageService.getPreSignedUrl(this.fileName).subscribe((res)=>{
  //   this.urlDetails = res;
  //   this.urlDetails.forEach(async(urlValue:any)=>{
  //   this.url.push(this.urlDetails.url+this.urlDetails.fields.key)
  //     const formData = new FormData();
  //     Object.keys(urlValue.fields).forEach(key => {
  //       formData.append(key, urlValue.fields[key]);
  //   });
  //   formData.append('file',this.file);
  //     // this.httpService.post(urlValue.url, formData).subscribe((res)=>{ });
  //   })
  //   const taskData = {
  //     name: title,
  //     options:this.url
  //   };
  //   console.log("taskData",taskData);
    
  //   this.ImageService.createTask(taskData).subscribe((res)=>{
  //     console.log("res",res);
      
    
  //   })

    
  // })


  // this.ImageService.getPreSignedUrl(this.fileName).pipe(
  //     this.urlDetails = ;
  //       this.urlDetails.forEach(async(urlValue:any)=>{
  //         console.log("this.urlDetails.url",urlValue.url);
  //         console.log("this.urlDetails.fields.key",urlValue.fields.key);
  //         this.url.push(urlValue.url+urlValue.fields.key);
  //           let formData = new FormData();
  //           Object.keys(urlValue.fields).forEach(async key => {
  //             formData.append(key, urlValue.fields[key]);
  //         });
  //         formData.append('file',this.file);
  //         console.log("formData2",formData);
  //         this.httpService.post(urlValue.url, formData).subscribe((res)=>{ });
  //         })
  //   const ={
  //     name: title,
  //     options: this.url
  //   }

  //   switchMap(taskDetails => this.ImageService.createTask(taskDetails))
  // ).subscribe(
  //   res => console.log("res",res),
  //   err => console.log("err",err)
  // );  
  }

  taskResponse(){
      this.router.navigate(['/', 'response']);
  }
  
}
