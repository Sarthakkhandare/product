import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from'@angular/common/http';
import { ProductModule } from './product/product.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    DashComponent,
    ContactComponent,
    LocationComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
