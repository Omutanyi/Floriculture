import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Header from "./Header.js";
import theme from "./theme.js";
import { ThemeProvider } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ImageSlider from "./ImageSlider.js";
import Items from "./Items.js";
import Searchbar from "./Searchbar.js";
import { SliderData } from "./SliderData.js";

class Home extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Paper
              style={{
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
      </>
    );
  }
}

export default Home;
