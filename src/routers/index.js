import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { withStore } from '@store';
import { theme, HomePage } from '@components';
import AuthRouter from './auth';

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
