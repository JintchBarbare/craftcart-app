export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  isSale?: boolean;
  isNew?: boolean;
}