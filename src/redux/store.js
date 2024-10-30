import {createStore, compose, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk";
import rootReducer from './redusers/indes.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));


window.store = store;
export default store;

