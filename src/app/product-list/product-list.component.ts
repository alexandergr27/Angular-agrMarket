import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app/app-service.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product:Product[];

  constructor(private service:AppServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      this.product=data;
    });
  }

  editProduct(product:Product) {
    localStorage.setItem("code", product.code.toString());
    this.router.navigate(["edit"]);
  }

  delete(product:Product) {
    this.service.deleteProduct(product.code).subscribe(data=>{
      alert("Producto eliminado");
      this.product = this.product.filter(prod => prod !== product);
    })
  }

}
