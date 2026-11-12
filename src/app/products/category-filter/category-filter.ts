import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.scss'
})
export class CategoryFilter {
  categories = input.required<string[]>();
  selected = input.required<string>();

  categoryChange = output<string>();

  onSelect(category: string) {
    this.categoryChange.emit(category);
  }
}
