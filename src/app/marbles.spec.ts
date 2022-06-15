import { cold, hot } from 'jasmine-marbles';
import {combineLatest, filter, map, of, switchMap} from "rxjs";
import {FullOrder, FullOrderLine, Item, Order, OrderLine, Person} from "./models/Person.model";
import {getActualFullOrders, getMockOrders} from "./mock/order.mock";
import {getMockItems} from "./mock/item.mock";
import {getMockPeople} from "./mock/person.mock";

describe('the basics', () => {
  it('should understand the basics', () => {
    const source = cold('---');
    const expected = cold('---');
    expect(source).toBeObservable(expected);
  });

  it('should support basic values  as params', () => {
    const source = cold('-a-|', {a: 1});
    const expected = cold('-a-|', {a: 1});
    expect(source).toBeObservable(expected);
  });

  it('should provide support to objects passed as params', () => {
    const source = cold('-a-|', {a: {name: 'Some Name'}});
    const expected = cold('-a-|', {a: {name: 'Some Name'}});

    expect(source).toBeObservable(expected);
  });

  it('should support basic errors', () => {
    const source = cold('--#');
    const expected  = cold('--#');

    expect(source).toBeObservable(expected);
  })
});


describe('concatMap', () => {
  let orders: Order[];
  let items: Item[];
  let customers: Person[];
  beforeEach(() => {
    orders = getMockOrders();
    items = getMockItems();
    customers = getMockPeople();
  })
  it('should Combine latest and merge data into a full order', () => {
    const orders$ = cold(     'a|', {a: orders});
    const items$ = cold(      'a|', {a: makeItemsStateFromItems(items)});
    const customers$ = cold(  'a|', {a: makeCustomerStateFromCustomers(customers)});
    const expected = cold(    'a-|', {a: getActualFullOrders()});

    const result = combineLatest(orders$, items$, customers$).pipe(
      filter(([orders, items, customers]) => !!orders && !!items && !!customers),
      switchMap( ([orders, items, customers]) => {
        let results: FullOrder[] = [];
        orders.forEach( (order: Order) => {
          results.push(fillOutOrder(order, items, customers))
        });
        return results;
      })
    )
    // Error we are seeing here is that I get a single object where I am expecting and array of orders
    expect(result).toBeObservable(expected);
  })
})

function makeCustomerStateFromCustomers(customers: Person[]): {[key: string]: Person} {
  const results: {[key: string]: Person } = {};
  customers.forEach((person: Person) => {
    results[person.id] = person;
  });

  return results;
}

function makeItemsStateFromItems(items: Item[]): {[key: string]: Item} {
  const results: {[key: string]: Item } = {};
  items.forEach( (item: Item) => {
    results[item.modelNumber] = item;
  });
  return results;
}
function fillOutOrder(
  order: Order,
  itemsState: {[key: string]: Item},
  customerState: {[key: string]: Person}
): FullOrder {

  let fullOrder: FullOrder = {
    orderNumber: order.orderNumber,
    orderLines: [],
    customer: customerState[order.customerNumber],
  }

  order.orderLines.forEach((orderLine: OrderLine) => {
    const fullOrderLine: FullOrderLine = {
      item: itemsState[orderLine.modelNumber],
      quantity: orderLine.quantity,
    };
    fullOrder.orderLines.push(fullOrderLine)
  });

  return fullOrder;
}
