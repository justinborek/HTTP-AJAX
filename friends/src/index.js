import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <App />
</Provider>,
document.getElementById('root')
);

registerServiceWorker();
