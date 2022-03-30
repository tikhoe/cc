import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import { saveState } from './store/LocalStorage';

import store from './store/';

import App from './App';

store.subscribe(throttle(() => {
  // resets for reload
  const settings = store.getState().settings
  const branches = store.getState().branches
  const organizations = store.getState().organizations
  const users = store.getState().users
  // saveState
  saveState({ settings, branches, organizations, users });
}, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
