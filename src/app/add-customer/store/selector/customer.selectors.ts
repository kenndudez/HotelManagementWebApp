1
import {createFeatureSelector, createSelector} from '@ngrx/store';
2
import * as fromCustomer from '../reducer/customer.reducer';
3
4
export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(

  fromCustomer.customerFeatureKey,

);

export const selectCustomers = createSelector(
  selectCustomerState,

  (state: fromCustomer.CustomerState) => state.customers
);