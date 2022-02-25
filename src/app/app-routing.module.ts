import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductssComponent } from './productss/productss.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
const routes: Routes = [
  {path:'',component:HeaderComponent},

  {path:'detail/:masp',component:DetailComponent},
  {path:'productss',component:ProductssComponent},
  {path:'product',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'app',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'header',component:HeaderComponent},
  {path:'contact',component:ContactComponent},
  {path:'main',component:MainComponent},
  
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const RoutingComponent = [AppComponent,ContactComponent];
