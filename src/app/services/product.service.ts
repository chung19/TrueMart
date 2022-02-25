import { Products } from './../models/product.model';
import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions ={
  Headers :new HttpHeaders({ContentType:'Application/json'})
  };
  apiUrl='https://60a07963d2855b00173b0d69.mockapi.io/productt';
 // private apiUrl = 'http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/';   //tương tác với api 

  constructor(private http:HttpClient) { }



getALLProduct():Observable<Products[]>
{
  return this.http.get<Products[]>(this.apiUrl).pipe();
}
searchProducts(masp:number):Observable<Products>{
return this.http.get<Products>('${this.apiUrl}/${masp').pipe()
}
}
