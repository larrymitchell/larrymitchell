import { createStore, combineReducers } from "redux";
import illustration from "./reducers/illustration";

const rootReducer = combineReducers({ illustration });
const store = createStore(rootReducer);

export default store;
