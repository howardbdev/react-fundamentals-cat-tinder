import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import catsReducer from './reducers/cats.js'

// I will import what I need to build a store from redux and react-redux
// I will build the store
  // I need at least one reducer
  // ....?
// I will wrap App in Provider, passing store as a prop to provider

// ---- COMBINE REDUCERS vv ------------------
const reducers = combineReducers({
  cats: catsReducer
})
// -------------COMBINE REDUCERS^^-------------


// --------MIDDLEWARE ----------------------------
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//---------------MIDDLEWARE-----------------------


// ------------BUILD MY STORE -----------------------------------
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))
//------STORE-------------------------------


// Wrap App in Provider, and pass store as a prop to Provider
ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
