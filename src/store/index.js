import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { appReducer, userReducer } from './modules';

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});

export function withStore(WrappedComponent) {
  return function wrappered() {
    return (
      <Provider store={store}>
        <WrappedComponent />
      </Provider>
    );
  };
}
