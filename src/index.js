import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider as StoreProvider} from 'react-redux';

import Routes from '~/routes';
import {store} from '~/store';
import themes from '~/themes';

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={themes.light}>
      <Routes />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
