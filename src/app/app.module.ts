import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

import { ROUTES, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductssComponent } from './productss/productss.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [ CarouselModule ,AppRoutingModule,
    BrowserModule,
   
    RouterModule,OwlModule,CarouselModule,  HttpClientModule],
  declarations: [
    
    
  
    AboutComponent,
                 RegisterComponent,
                
                 ProductsComponent,
                 ProductssComponent,
                 DetailComponent,
                
                 
  ],
 
})
export class SomeModule { }

@NgModule({
  declarations: [
     AppComponent,HeaderComponent,MainComponent,
    HeaderComponent,
    ContactComponent,FooterComponent,CarouselComponent,Carousel2Component ,LoginComponent,
  ],
  imports: [
    CarouselModule,AppRoutingModule,
    BrowserModule,
   
    RouterModule,OwlModule,  HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
