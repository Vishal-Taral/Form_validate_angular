import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

import { UsdInrPipe } from './pipes/usd-inr.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    UsdInrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    NgbModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
