export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'camisetas' | 'moletons' | 'regatas' | 'jaquetas' | 'meias' | 'mochilas' | 'bones' | 'canecas' | 'garrafas' | 'squeezes' | 'mousepads' | 'adesivos';
  description: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export type Category = Product['category'] | 'todos';

export interface FilterOptions {
  category: Category;
  priceRange: [number, number];
  inStockOnly: boolean;
}