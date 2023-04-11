import { CategoryType } from './Category';

export interface Product {
  id: string;
  categories: CategoryType[];
  name: string;
  qty: number;
  price: number;
}
