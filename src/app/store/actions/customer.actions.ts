import {createAction, props} from "@ngrx/store";
import {Person} from "../../models/Person.model";
import {HttpErrorResponse} from "@angular/common/http";

export enum CustomerActionType {
  LoadCustomersEffectStoreAction = '[Customer] Load Customers Effect Store Action',
  LoadCustomersSuccessStoreAction = '[Customer] Load Customer Success Store Action',
  LoadCustomerFailStoreAction = '[Customer] Load Customer Fail Store Action'
}

// We add EffectStoreAction to the name to indicate that this will be handled by both an effect and a reducer.
export const loadCustomersEffectStoreAction = createAction(CustomerActionType.LoadCustomersEffectStoreAction)

export const loadCustomerSuccessStoreAction = createAction(CustomerActionType.LoadCustomersSuccessStoreAction, props<{customers: Person[]}>());

export const loadCustomerFailStoreAction = createAction(CustomerActionType.LoadCustomerFailStoreAction, props<{error: HttpErrorResponse}>())
// TODO Not sure how I export the action classes above as they aren't actually classes
// export type CustomerActions =
//   | loadCustomerEffe
