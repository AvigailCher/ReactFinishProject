import { ProductReducer } from "./reducer/productsReducer";
import {createStore} from 'redux';

export const store = createStore(ProductReducer);
export default store;