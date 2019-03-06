import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import 'todomvc-app-css/index.css';

const store = configureStore();
console.log(process.env);
React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
