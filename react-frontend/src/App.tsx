import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Mapping } from './components/Mapping';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Mapping></Mapping>
    </MuiThemeProvider>
  );
}

export default App;
