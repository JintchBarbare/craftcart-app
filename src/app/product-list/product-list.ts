import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductCard } from '../products/product-card/product-card';
import { CartService } from '../services/cart-service';
import { FavoritesService } from '../services/favorites-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products: Product[] = [
    { id: 'p1', name: 'Ceramic Mug', price: 24.5, category: 'pottery', inStock: true, isNew: true },
    { id: 'p2', name: 'Linen Tote', price: 32, category: 'textiles', inStock: true, isSale: true },
    { id: 'p3', name: 'Walnut Cutting Board', price: 48, category: 'wood', inStock: false },
    { id: 'p4', name: 'Stoneware Bowl', price: 18, category: 'pottery', inStock: true },
    { id: 'p5', name: 'Indigo Scarf', price: 36, category: 'textiles', inStock: true, isSale: true },
    { id: 'p6', name: 'Maple Spoon', price: 22, category: 'wood', inStock: false }
  ];


  cart = inject(CartService);
  favorites = inject(FavoritesService);

  onAddToCart(product: Product) {
    this.cart.add(product);
  }

  onToggleFavorite(product: Product) {
    this.favorites.toggle(product.id);
  }
}