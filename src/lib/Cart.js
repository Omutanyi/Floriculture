import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";

//redux imports
import { connect } from "react-redux";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart,
    };
  }
  render() {
    console.log("cart", this.state.cart);
    const data = this.state.cart;
    if (data.length === 0) {
      return <Typography variant="subtitle1">No data to display</Typography>;
    }
    return (
      <Grid container xs={12} justify="center">
        <Grid
          item
          xs={6}
          direction="row"
          style={{
            marginTop: 30,
          }}
        >
          {data.map((item, index) => {
            return (
              <Paper className="cartItem" key={index}>
                <img
                  src={item.product.slide.image}
                  alt="name"
                  className="cartImage"
                />
                <div className="cartDesc">
                  <Typography color="primary" variant="subtitle1">
                    {item.product.slide.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.product.slide.price} * {item.productCount}
                  </Typography>
                  <Typography variant="subtitle1">
                    Subtotal = Ksh.{" "}
                    {item.productCount * item.product.slide.price}
                  </Typography>
                </div>
                <Button className="cartRemove">
                  <DeleteOutline
                    style={{
                      marginRight: 5,
                    }}
                  />
                  REMOVE
                </Button>
              </Paper>
            );
          })}
          <Paper style={{
                  width: "100%",
                  marginLeft: 30,
                  marginTop: 30,
                  marginBottom: 50,
                }}>
            <Button variant="outlined" aria-label="PAYMENT" style={{
                  width: "100%",
                  color: "green",
                }}>
              <DeleteOutline
                style={{
                  marginRight: 5,
                  color: "green"
                }}
              />
              PROCEED TO PAYMENT
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  //   club: state.club.club,
});

export default connect(mapStateToProps)(Cart);
