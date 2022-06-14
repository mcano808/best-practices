import {Item} from "../models/Person.model";
import cloneDeep from 'lodash-es/cloneDeep';

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
export const items: Item[] = [
  paper,
  pencil,
  pen
];

export function getMockItem(position: number): Item {
  if(position > items.length - 1){
    position = 0;
  }

  return cloneDeep(items[position]);
}

export function getMockItems(): Item[] {
  return cloneDeep(items);
}
