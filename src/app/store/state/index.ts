import {Item, Order, Person} from "../../models/Person.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {getMockPeople} from "../../mock/person.mock";
import {getMockItem, getMockItems} from "../../mock/item.mock";

export interface AppState {
  customers: Person[];
  items: ItemState;
  orders: Order[];
}

export interface ItemState extends EntityState<Item>{}

export const itemAdapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialItemState: ItemState = itemAdapter.getInitialState();


export const initialAppState: AppState = {
  customers: [],
  items: initialItemState,
  orders: []
}
