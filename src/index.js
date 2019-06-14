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

// I will import what I need to build a store from redux and react-redux
// I will build the store
  // I need at least one reducer
  // ....?
// I will wrap App in Provider, passing store as a prop to provider

// build my reducer ------------------
const catsReducer = (state=[], action) => {
  switch (action.type) {
    default:
      return state
  }
}
const reducers = combineReducers({
  cats: catsReducer
})
// ----------------------------------------

// build my middleware ----------------------------
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//----------------------------------------------------


// build my store -----------------------------------
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))
//----------------------------------------------------

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
