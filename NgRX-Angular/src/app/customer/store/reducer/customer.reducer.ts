import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as CustomerActions from '../action/customer.actions';
import { CustomerAction } from '../action/setup/customer.action';


export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: []
};


export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer, 
    (state: CustomerState, {customer}) =>
    ({...state,
      customers: [...state.customers, customer]}))
);

export function reducer(state: CustomerState | undefined, action: CustomerAction): CustomerState { 
  return customerReducer(state, action);
}
