import { applyMiddleware, combineReducers, createStore } from 'redux';
import countReducer from '../AppCounter/Reducer';

const rootReducer = combineReducers({
  counter: countReducer,
});

const store = createStore(rootReducer, applyMiddleware());

export default store;
