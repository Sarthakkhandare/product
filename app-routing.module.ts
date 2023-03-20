import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';

import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';

const routes: Routes = [

  {
path:'',pathMatch:'full',redirectTo:'dash'
  },
  {
    path:'home',component:HomeComponent,
    children:[
      {
        path:'addpr',component:AddproductComponent
      },
      {
        path:'viewpr',component:ViewproductComponent
      },
      {
        path:'edit',component:EditproductComponent
      },
      {
        path:'product/edit/:data',component:EditproductComponent
      }
    ]
    
  },
  {
    path:'dash',component:DashComponent
  },

  {
    path:'login',component:LoginComponent
  },
  {
    path:'contact',component:ContactComponent
  },
 
  {
    path:'location',component:LocationComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
