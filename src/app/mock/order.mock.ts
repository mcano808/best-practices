import {FullOrder, Order, OrderLine} from "../models/Person.model";
import {v4 as uuid } from 'uuid';
import {personOne, personTwo} from "./person.mock";
import cloneDeep from "lodash-es/cloneDeep";
import {paper, pen, pencil} from "./item.mock";

export const orderOneLineOne: OrderLine = {
  modelNumber: 'pencil-1234',
  quantity: 3
}

export const orderOneLineTwo: OrderLine = {
  modelNumber: 'paper-1234',
  quantity: 300
};

export const orderOneLineThree: OrderLine = {
  modelNumber: 'pen-1234',
  quantity: 12,
}


export const orderOne: Order = {
  orderLines: [
    orderOneLineOne,
    orderOneLineTwo,
    orderOneLineThree
  ],
  orderNumber: uuid(),
  customerNumber: personOne.id
}

export const orderTwoLineOne: OrderLine = {
  modelNumber: 'pen-123',
  quantity: 10
};

export const orderTwo: Order = {
  orderLines: [
    orderTwoLineOne
  ]  ,
  customerNumber: personTwo.id,
  orderNumber: uuid()
}

export const orders: Order[] = [
  orderOne,
  orderTwo
]

export function getOrder(position: number): Order {
  if(position > orders.length - 1) {
    position = 0;
  }

  return cloneDeep(orders[position]);
}

export function getMockOrders(): Order[] {
  return cloneDeep(orders);
}

export const actualFullOrders: FullOrder[] = [
  {
    orderNumber: orderOne.orderNumber,
    customer: personOne,
    orderLines: [
      {
        quantity: orderOneLineOne.quantity,
        item: cloneDeep(pencil)
      }, {
      quantity: orderOneLineTwo.quantity,
        item: cloneDeep(paper)
      }, {
      quantity: orderOneLineThree.quantity,
        item: cloneDeep(pen)
      }
    ]
  },  {
    orderNumber: orderTwo.orderNumber,
    customer: personTwo,
    orderLines: [
      {
        quantity: orderTwoLineOne.quantity,
        item: cloneDeep(pen)
      }
    ]
  }
];

export function getActualFullOrder(positions: number): FullOrder {
  if(positions > actualFullOrders.length - 1) {
    positions = 0;
  }

  return cloneDeep(actualFullOrders[positions]);
}

export function getActualFullOrders(): FullOrder[] {
  return cloneDeep(actualFullOrders);
}
