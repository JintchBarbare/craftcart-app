import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = signal<Product[]>([]);

  add(product: Product) {
    this.items.update((items) => [...items, product]);
  }
}