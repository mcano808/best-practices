import {Item, OrderLine, Person} from "../models/Person.model";
import { v4 as uuid } from 'uuid';

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
  modelNumber: uuid.uuid(),
  description: 'A piece of paper',
  price: .05
}

export const pen: Item = {
  modelNumber: uuid.uuid(),
  description: 'A really nice pen',
  price: 15.89
}

export const pencil: Item = {
  modelNumber: uuid.uuid(),
  description: 'The best pencil ever!!',
  price: 7.25
}

export const orderOneLineOne: OrderLine = {
  modelNumber
}
