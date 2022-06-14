import {Order, OrderLine} from "../models/Person.model";
import {v4 as uuid } from 'uuid';
import {personOne, personTwo} from "./person.mock";
import * as cloneDeep from "lodash-es/cloneDeep";

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
  orderNumber: uuid.uuid(),
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
  orderNumber: uuid.uuid()
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
