import * as cloneDeep from 'lodash/cloneDeep';
import {Person} from "../models/Person.model";
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

export function getMockPerson(position: number): Person {
  if(position > people.length -1 ){
    position = 0;
  }
  return cloneDeep(people[position]);
}

export function getMockPeople(): Person[] {
  return cloneDeep(people);
}
