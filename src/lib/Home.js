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
// import { SliderData } from "./SliderData.js";
import fire from "./config/firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SliderData: [],
      items: [],
    };
  }
  async componentDidMount() {

    const sliderD = []
    const itemD = []

    var storageRef = fire.storage().ref();

   var db = fire.firestore();
    const valentineRef = db.collection("Valentine");
    const snapshot = await valentineRef.get();
    snapshot.forEach((doc) => {
      console.log("valentine doc id - ", doc.data().image);
      storageRef.child(doc.data().image).getDownloadURL().then((url) => {
        // sliderD.push(doc.data(), {imageUrl: url})
        const data = {
          data: doc.data(),
          image: url,
        }

        sliderD.push(data)
        })
        

      // sliderD.push(doc.data())
      // itemD.push(doc.data())
    });
        console.log("sliderD with image url ", sliderD)

    this.setState({
      SliderData: sliderD,
    })

    const weddingRef = db.collection("Wedding");
    const weddingRefSnapshot = await weddingRef.get();
    weddingRefSnapshot.forEach((doc) => {
      // console.log("valentine doc id - ", doc.data());
      itemD.push(doc.data())
    });

    const LnARef = db.collection("Love and affection");
    const LnARefSnapshot = await LnARef.get();
    LnARefSnapshot.forEach((doc) => {
      // console.log("valentine doc id - ", doc.data());
      itemD.push(doc.data())
    });

    this.setState({
      items: itemD,
    })
  }

  render() {
    return (
      <>
        {/* <Searchbar /> */}
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
                EDITORS PICKS
              </Typography>
              <ImageSlider slides={this.state.SliderData} />
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
                FEATURED PRODUCTS
              </Typography>
              <Items slides={this.state.items} />
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Home;
