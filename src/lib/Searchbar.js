import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Searchbar extends Component {
  render() {
    return (
      <Grid container xs={12}>
        <Grid
          item
          xs={12}
          justify="center"
          style={{
            marginTop: 30,
          }}
        >
          <Paper
            style={{
              padding: 20,
            }}
          >
            <div className="searchDiv">
              <Typography variant="subtitle1">
                Search through our wide range of excuisitely assorted flower
                collection
              </Typography>
              <FormControl className="searchForm">
                <InputLabel id="demo-controlled-open-select-label">
                  Select a collection
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  className="searchInput"
                  //   open={open}
                  //   onClose={handleClose}
                  //   onOpen={handleOpen}
                  //   value={age}
                  //   onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{
                    width: '30%',
                    margin: 20,
                  }}
                >
                  Find Collection
                </Button>
              </FormControl>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Searchbar;
