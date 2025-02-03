import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product, ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css', 
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  products: any[] = []; 

  constructor(private productsService: ProductsService) {} 

  ngOnInit(): void {
    this.fetchProducts(); 
  }

  fetchProducts(): void { 
    this.productsService.getProducts().subscribe({
      next: (data) => { 
        this.products = data; 
      }, 
      error: (e) => { console.error("Error fetching posts: ", e); }
    }); 
  }
}
