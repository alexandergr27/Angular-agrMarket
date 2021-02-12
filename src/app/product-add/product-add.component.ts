import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product:Product = new Product();

  constructor(private router:Router, private service:AppServiceService) { }

  ngOnInit(): void {
  }

  saveProduct(product:Product) {
    this.service.saveProduct(product).subscribe(data=>{
      alert("Producto agregado con éxito.");
      this.router.navigate(["list"]);
    })
  }

}
