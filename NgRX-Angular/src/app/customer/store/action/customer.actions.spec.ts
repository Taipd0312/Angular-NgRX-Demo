import * as fromCustomer from './customer.actions';

describe('nCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.addCustomer.type).toBe('[Customer] N Customers');
  });
});
