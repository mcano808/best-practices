import {Item, Order, OrderLine, Person} from "../models/Person.model";
import { v4 as uuid } from 'uuid';
import * as cloneDeep from 'lodash/cloneDeep';

export const personOne: Person = {
  address: "12627 Hedgetree Ct. Poway CA 96707",
  id: uuid.uuid(),
  markUp: 1.24,
  name: "Jose Cano"
}

export const personTwo: Person = {
  id: uuid.uuid(),
  name: 'Mike Cano',
  address: '16868 E Fair Pl, Aurora CO 80016',
  markUp: 1.12
}

export const people: Person[] = [
  personOne,
  personTwo
]

export const paper: Item = {
  modelNumber: 'paper-1234',
  description: 'A piece of paper',
  price: .05
}

export const pen: Item = {
  modelNumber: 'pen-1234',
  description: 'A really nice pen',
  price: 15.89
}

export const pencil: Item = {
  modelNumber: 'pencil-1234',
  description: 'The best pencil ever!!',
  price: 7.25
}

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
