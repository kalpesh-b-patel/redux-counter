import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import countReducer from '../AppCounter/Reducer';

const rootReducer = combineReducers({
  counter: countReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
