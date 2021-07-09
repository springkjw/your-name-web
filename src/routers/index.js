import React from 'react';
import { ThemeProvider } from 'styled-components';

import { withStore } from '@store';
import { theme } from '@components';

function App() {
  return <ThemeProvider theme={theme} />;
}

export default withStore(App);
