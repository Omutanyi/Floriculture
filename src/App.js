import "./App.css";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Header from "./lib/Header.js";
import theme from "./lib/theme.js";
import { ThemeProvider } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ImageSlider from "./lib/ImageSlider.js";
import Items from "./lib/Items.js"
import { SliderData } from "./lib/SliderData.js";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          {/* <div className="App"> */}
          <Header />
          {/* <Grid item style={{ height: 400, width: "100%" }}>
            <Paper style={{ height: '100%', width: 75 }} />
          </Grid> */}
          <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
              <Paper
                style={{
                  height: 300,
                  marginTop: 30,
                  padding: 20,
                  justify: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{
                    marginTop: 10,
                    marginLeft: "45%",
                  }}
                >
                  FEATURED PRODUCTS
                </Typography>
                <ImageSlider slides={SliderData} />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                style={{
                  // height: 300,
                  marginTop: 30,
                  padding: 20,
                  justify: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: "45%",
                  }}
                >
                  EDITORS PICKS
                </Typography>
                <Items slides={SliderData} />
              </Paper>
            </Grid>

          </Grid>
          {/* </div> */}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
