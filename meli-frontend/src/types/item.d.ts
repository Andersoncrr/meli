export interface ResponseItem {
  author: Author;
  item: Item;
  categories: string[];
}

export interface Author {
  name: string;
  lastName: string;
}

export type State = "new" | "used";

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: State;
  free_shipping: boolean;
  description: string;
  sold_quantity: number;
  category_id: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
