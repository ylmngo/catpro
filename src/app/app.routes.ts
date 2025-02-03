import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {
        path: 'products', 
        component: ProductsComponent, 
        title: 'Product Catalogue'
    }, 
    { 
        path: '', 
        redirectTo: '/products', 
        pathMatch: 'full'
    }, 
    {
        path: 'products/:id', 
        component: ProductDetailsComponent, 
        title: 'Product details'
    }
];
