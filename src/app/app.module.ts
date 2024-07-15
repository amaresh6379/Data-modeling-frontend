// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModelingModule } from './data-modeling/data-modeling.module';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { provideWalletAdapter } from '@heavy-duty/wallet-adapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModelingModule,
    SharedModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RouterModule,
    MatProgressBarModule,
    // HdWalletAdapterModule.forRoot().
    ReactiveFormsModule

  ],
  providers: [provideWalletAdapter()],
  bootstrap: [AppComponent]
})
export class AppModule { }