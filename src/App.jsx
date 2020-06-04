import React from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Questions from './components/Questions';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // main: '#3e62ad',
      main: '#f39800',
    },
    secondary: {
      // main: '#a59aca',
      main: '#f8b862',
    },
  },
});



const App = () => {

  return (
    <MuiThemeProvider
      theme={darkTheme}
    // className="App"
    >
      {/* <main className="App-main"> */}
      <Questions />
      {/* </main> */}
    </MuiThemeProvider>
  );
}

export default App;
