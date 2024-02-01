import { createStore } from 'redux';
import nomineeReducer from './nomineeReducer';

const store = createStore(nomineeReducer);

export default store;