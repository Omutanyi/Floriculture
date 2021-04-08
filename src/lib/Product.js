import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MailOutline from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";
import { withRouter } from "react-router-dom";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import AddOutlined from "@material-ui/icons/AddOutlined";
import RemoveOutlined from "@material-ui/icons/RemoveOutlined";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//redux imports
import { connect } from "react-redux";
import { addToCart } from "./actions/fshopActions.js";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.location.state,
      count: 1,
      open: false,
      added: false,
    };
  }

  addCount = () => {
    let itemsCount = this.state.count;
    var add = itemsCount + 1;
    this.setState({
      count: add,
    });
  };

  minusCount = () => {
    let itemsCount = this.state.count;

    if (itemsCount > 1) {
      var minus = itemsCount - 1;
      this.setState({
        count: minus,
      });
    }
  };

  addToCart = () => {
    const productToAdd = {
      product: this.state.product,
      productCount: this.state.count,
    };
    console.log("product to be added from component...", productToAdd);
    this.props.addToCart(productToAdd);
    this.setState({
      added: true,
    });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      added: false,
    });
  };

  render() {
    console.log("prod...", this.state.product.slide.image);
    const product = this.state.product.slide;
    // if (this.state.added === true) {
    //   return (
    //     <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
    //       <Alert onClose={this.handleClose} severity="success">
    //         This is a success message!
    //       </Alert>
    //     </Snackbar>
    //   );
    // }
    return (
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Paper
            style={{
              marginTop: 30,
              padding: 20,
              justify: "center",
            }}
          >
            <div>
              <img src={product.image} alt={product.name} className="image" />
              <Typography
                color="primary"
                variant="subtitle1"
                style={{
                  marginTop: 10,
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="subtitle1"
                alignItems="center"
                style={{
                  marginTop: 5,
                }}
              >
                {product.origin}
              </Typography>
              <Typography
                variant="body1"
                alignItems="center"
                style={{
                  marginTop: 10,
                  opacity: 0.8,
                }}
              >
                {product.description}
              </Typography>
              <Typography
                variant="body1"
                alignItems="center"
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  color: "green",
                }}
              >
                KSH. {product.price}
              </Typography>

              <Grid
                container
                xs={6}
                spacing={3}
                style={{
                  marginBottom: 10,
                }}
              >
                <Grid item onClick={this.minusCount}>
                  <Paper
                    style={{
                      padding: 20,
                    }}
                  >
                    {" "}
                    <RemoveOutlined />{" "}
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    style={{
                      padding: 20,
                    }}
                  >
                    {" "}
                    <Typography variant="subtitle1" alignItems="center">
                      {this.state.count}
                    </Typography>{" "}
                  </Paper>
                </Grid>
                <Grid item onClick={this.addCount}>
                  <Paper
                    style={{
                      padding: 20,
                    }}
                  >
                    <AddOutlined />{" "}
                  </Paper>
                </Grid>
              </Grid>

              <Button
                color="secondary"
                variant="outlined"
                aria-label="ADD TO CART"
                onClick={this.addToCart}
              >
                <AddShoppingCart
                  style={{
                    marginRight: 5,
                  }}
                />
                ADD TO CART
              </Button>
              <Snackbar
                open={this.state.added}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert onClose={this.handleClose} severity="success">
                  {product.name} has been successfully added to cart!
                </Alert>
              </Snackbar>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, { addToCart })(withRouter(Product));
