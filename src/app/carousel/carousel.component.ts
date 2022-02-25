import { Component, OnInit } from '@angular/core';
import{OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Carousel: OwlOptions =
   {
    loop:true,
  margin: 2,
    mouseDrag:true,
    //stagePadding:10,
    touchDrag:true,
    pullDrag:true,
    dots:true,
    nav:true,
    navText:['<','>'],
    autoplay:true,
    autoWidth:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navSpeed:900,
    
    
    
    
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



};


}
