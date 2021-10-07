import { createAction } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { customerActionTypes } from './setup/customer-action-types';

export const addCustomer = createAction(
  customerActionTypes.AddCustomer,
  (customer: Customer) => ({customer})
);




