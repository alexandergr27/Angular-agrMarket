import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../app/model/Product';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:9810/apimarket';

  saveProduct(product:Product) {
    return this.http.post<Product>(this.Url+"/product", product);
  }

  getProducts() {
    return this.http.get<Product[]>(this.Url+"/products");
  }

  getProductByCode(code:number) {
    return this.http.get<Product>(this.Url+"/product/"+code);
  }

  updateProduct(product:Product, code:number) {
    return this.http.put<Product>(this.Url+"/product/"+code, product);
  }

  deleteProduct(code:number) {
    return this.http.delete(this.Url+"/product/"+code);
  }

}
