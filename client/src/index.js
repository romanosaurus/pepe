import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import { Route, BrowserRouter as Router } from 'react-router-dom';

/* Routes */

import Main from "./components/Main";

let darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#66bb6a',
      contrastText: "#fff"
    },
    secondary: {
      main: 'rgba(255, 112, 67, 0.87)',
      contrastText: "#fff"
    },
  },
  typography: {
    useNextVariants: true
  }
});


const routing = (
  <MuiThemeProvider theme = { darkTheme }>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/main" component={Main} />
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
