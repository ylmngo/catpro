import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

export type Product = { 
  id?: number; 
  image: string; 
  title: string; 
  price: number; 
  description: string; 
  category: string; 
  rating: { rate: number; count: number; }; 
}

@Component({
  selector: 'app-product-item',
  standalone: true, 
  imports: [MatCardModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product; 
}
