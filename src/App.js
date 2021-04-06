import "./App.css";
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "./lib/Header.js";
import theme from "./lib/theme.js";
import { ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Header />
         
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
