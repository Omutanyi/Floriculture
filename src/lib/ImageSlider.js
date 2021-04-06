import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

const ImageSlider = ({ slides }) => {
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
      {SliderData.map((slide, index) => {
        return (
          //   <Grid
          //     item
          //     xs={12}
          //     className={index === current ? "slide active" : "slide"}
          //     key={index}
          //     style={{
          //           padding: 20,
          //         }}
          //   >
          //     {index === current && (
          //       <img src={slide.image} alt="flower" className="image" />
          //     )}
          //   </Grid>

          //   <Grid container justify="center" direction="row">
          <div
            // item
            // xs={6}
            // style={{
            //   padding: 10,
            //   justify: "center",
            //   direction: "row",
            // }}
            className={index === current ? "slide active" : "slide"}
            key={index}
            style={{
              padding: 20,
            }}
          >
            {index === current && (
              <div className="featuredCard" xs={12}>
                <div className="imageCard">
                  <img src={slide.image} alt={slide.name} className="image" />
                </div>

                <div className="descCard">
                  <Typography color="primary" variant="h5">
                    {slide.name}
                  </Typography>
                  <Typography variant="subtitle1">{slide.origin}</Typography>
                  <Typography variant="subtitle2">{slide.description}</Typography>
                  <Typography variant="subtitle2">
                    KSH. {slide.price}
                  </Typography>
                  {/* <IconButton
                    color="secondary"
                    variant="button"
                    aria-label="PLACE ORDER NOW"
                  >
                    PLACE ORDER NOW
                    <KeyboardArrowRightIcon />
                  </IconButton> */}
                  <Button
                    color="secondary"
                    // endIcon= {KeyboardArrowRightIcon}
                    variant="outlined"
                    aria-label="PLACE ORDER NOW"
                  >
                    PLACE ORDER NOW
                    <AddShoppingCart />
                  </Button>
                </div>
              </div>
            )}
          </div>
          //   </Grid>
        );
      })}
    </section>
  );
};

export default ImageSlider;
