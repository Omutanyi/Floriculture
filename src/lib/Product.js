import React, { Component } from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import MailOutline from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";
import {withRouter} from  "react-router-dom";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.location.state
        }
    }

    // componentDidMount() {
    //         console.log("product props is", this.props.location.state.productdetail);
    //       }


    render() {
        console.log('prod...', this.state.product.slide.image)
        const product = this.state.product.slide;
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
                color: 'green',
              }}
              >
                KSH. {product.price}
              </Typography>


        <Button
                  color="secondary"
                  variant="outlined"
                  aria-label="ADD TO CART"
                >
                  <AddShoppingCart
                    style={{
                      marginRight: 5,
                    }}
                  />
                  ADD TO CART
                </Button>
            </div>
            </Paper>
          </Grid>
            </Grid>
        )
    }
}

export default withRouter(Product)
