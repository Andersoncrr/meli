export interface ResposeItems {
  author: Author;
  categories: string[];
  items: Item[];
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
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
