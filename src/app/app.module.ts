import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import MotorcycleComponent here
import { MotorcycleComponent } from './modules/motorcycle/motorcycle.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from "ngx-loading";
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DataSharingService } from './modules/DataSharingService';
import { PaymentComponent } from './modules/payment/payment.component';
import { ManageMotorcycleComponent } from './modules/manageMotorcycle/manageMotorcycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleComponent,
    PaymentComponent, // Make sure MotorcycleComponent is declared here
    ManageMotorcycleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DefaultModule,
    FullwidthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
