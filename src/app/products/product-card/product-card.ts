import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  product = input.required<Product>();
  addToCart = output<Product>();

isFavorite = input<boolean>(false);
  toggleFavorite = output<Product>();

  onAddToCart() {
    this.addToCart.emit(this.product());
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.product());
  }
}