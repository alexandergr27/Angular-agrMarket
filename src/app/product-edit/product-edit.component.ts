import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Product } from '../model/Product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product = new Product();

  constructor(private router:Router, private service:AppServiceService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData() {
    let code = localStorage.getItem("code");
    this.service.getProductByCode(+code)
    .subscribe(data=>{
      this.product=data;
    });
  }

  updateProduct(product:Product, code:number) {
    this.service.updateProduct(product, code)
    .subscribe(data=>{
      this.product=data;
      alert("se actualizó el producto");
      this.router.navigate(["list"]);
    })
  }

}
