import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  ids = signal<string[]>([]);

  toggle(id: string) {
    this.ids.update((currentIds) => 
      currentIds.includes(id) 
        ? currentIds.filter(item => item !== id) 
        : [...currentIds, id]
    );
  }

  has(id: string): boolean {
    return this.ids().includes(id);
  }
}