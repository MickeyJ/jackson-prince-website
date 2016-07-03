import React from 'react'
import {render} from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
import reducers from './redux/reducers'

import Router from './router'

let storeWithMiddleware;
if(process.env.NODE_ENV === 'development'){
  storeWithMiddleware = applyMiddleware(
    logger(), promise
  )(createStore);
} else {
  storeWithMiddleware = applyMiddleware(
    promise
  )(createStore);
}

render(
  <Provider store={storeWithMiddleware(reducers)}>
    <Router />
  </Provider>,
  document.getElementById('admin-app')
);
