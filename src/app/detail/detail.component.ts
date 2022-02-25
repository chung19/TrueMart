import { ProductService } from './../services/product.service';
import { Products } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
products = new Products;

  constructor(private route:ActivatedRoute,private ProductService:ProductService) { }

  ngOnInit(): void {
    this.getRoutePro(this.route.snapshot.params['masp']);
  }
  getRoutePro(masp:any){
 this.ProductService.searchProducts(masp).subscribe((data:any)=>{this.products=data;})
  }

}
