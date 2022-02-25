import { Component, OnInit } from '@angular/core';
import{OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Carousel2: OwlOptions = {
    loop:true,
  
    mouseDrag:true,
    //stagePadding:10,
    touchDrag:true,
    pullDrag:true,
    dots:true,
    autoplay:true,
    autoWidth:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navSpeed:50,
    
    
    navText:['<','>'],
    
    responsive:{
      0 :{
        items:1
      },
      180:{
        items:2
      },
      100:{
        items:3
      },
      30:{
        items:4
      },
      
    },

nav:true,

};
}
