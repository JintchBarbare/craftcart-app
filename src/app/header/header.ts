import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart-service';
import { FavoritesService } from '../services/favorites-service'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  cart = inject(CartService);
  favorites = inject(FavoritesService); 
}

