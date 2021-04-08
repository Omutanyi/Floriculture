import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import { AddShoppingCartIcon } from "@material-ui/icons";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "./Product";

const Items = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      <Grid
        container
        spacing={9}
        justify="space-evenly"
        className="itemContainer"
        direction="row"
        xs={12}
      >
        {SliderData.map((slide, index) => {
          return (
            <Grid item xs={3} key={index}>
              <Link
                to={{
                  pathname: "/product",
                  state: { slide },
                }}
                className="Link"
              >
                {/* <Paper> */}
                <img src={slide.image} alt={slide.name} className="itemImage" />
                <Typography color="primary" variant="subtitle1">
                  {slide.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    marginTop: 10,
                    opacity: 0.8,
                  }}
                >
                  {slide.origin}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    color: "green",
                  }}
                >
                  KSH. {slide.price}
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
                {/* </Paper> */}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default Items;
