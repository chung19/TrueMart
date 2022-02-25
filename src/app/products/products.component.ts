import { ProductService } from './../services/product.service';
import { Products } from './../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
datas:Products[]=[];
public masp1='';
  constructor(private prod:ProductService) { }

  ngOnInit(): void {this.getALL();
  }
getALL(){
  this.prod.getALLProduct().subscribe((data:any)=>{this.datas=data;}

  );
}
 
}

