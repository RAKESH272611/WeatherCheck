import { createStore } from 'redux';
import rootReducer from '../store/reducer/reducers.js';

const store = createStore(rootReducer);

export default store;
