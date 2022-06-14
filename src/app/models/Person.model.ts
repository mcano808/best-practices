export interface Person {
  name: string;
  id: string;
  address: string;
  markUp: number;
}

export interface Item {
  modelNumber: string;
  price: number;
  description: string;
}

export interface Order {
  orderNumber: string;
  orderLines: OrderLine[];
  customerNumber: string;
}

export interface OrderLine {
  modelNumber: string;
  quantity: number;
}
