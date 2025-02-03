import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsApiUrl = "https://fakestoreapi.com/products"; 
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> { 
    return this.http.get(this.productsApiUrl); 
  }

  getProductById(id: number): Observable<any> { 
    return this.http.get(this.productsApiUrl+"/"+id.toString()); 
  }
}
