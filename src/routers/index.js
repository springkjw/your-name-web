import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import firebase from 'firebase';

import { withStore } from '@store';
import { theme, HomePage } from '@components';
import AuthRouter from './auth';

const config = {
  apiKey: '',
  authDomain: 'imap-push-server.firebaseapp.com',
  databaseURL: 'https://imap-push-server.firebaseio.com',
  projectId: 'imap-push-server',
  storageBucket: 'imap-push-server.appspot.com',
  messagingSenderId: '',
};

firebase.initializeApp(config);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthRouter />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default withStore(App);
