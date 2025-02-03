import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product-item/product-item.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-product-details',
  imports: [MatDividerModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css', 
  providers: [ProductsService]
})
export class ProductDetailsComponent implements OnInit {
  product!: Product; 
  loading: boolean = true; 

  constructor(private route: ActivatedRoute, private productService: ProductsService) {} 

  ngOnInit(): void {
    this.fetchProduct(); 
  }

  fetchProduct(): void { 
    const id = Number(this.route.snapshot.paramMap.get("id")); 
    this.productService.getProductById(id).subscribe({
      next: (data) => { 
        this.product = data;
        this.loading = false;  
      },
      error: (e) => console.error("Error getting product", e) 
    })
  }
}
