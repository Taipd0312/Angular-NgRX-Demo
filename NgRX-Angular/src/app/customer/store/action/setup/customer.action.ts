import { union } from "@ngrx/store";
import { addCustomer } from "../customer.actions";

const allActions = union({
    addCustomer,
});

export type CustomerAction = typeof allActions;