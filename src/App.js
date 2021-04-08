import "./App.css";
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "./lib/Header.js";
import theme from "./lib/theme.js";
import { ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";
import { Router } from 'react-router-dom';
import history from './lib/config/history';

// redux import
import { Provider } from "react-redux";
import store from "./lib/store.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Header />
          </Container>
        </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
