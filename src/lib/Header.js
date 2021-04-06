import React from "react";
import Login from "./Login.js";
import Home from "./Home.js";
import Signup from "./Signup";
import Product from "./Product";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LockOpen from "@material-ui/icons/LockOpen";
import Homeicon from "@material-ui/icons/Home";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Create from "@material-ui/icons/Create";


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
            <Homeicon
                    style={{
                      marginRight: 5,
                    }}
                  />
              <Link to="/">HOME</Link></MenuItem>
              <MenuItem onClick={handleClose}>
            <ShoppingBasket
                    style={{
                      marginRight: 5,
                    }}
                  />
              <Link to="/">CART</Link></MenuItem>
            <MenuItem onClick={handleClose}>
            <Homeicon
                    style={{
                      marginRight: 5,
                    }}
                  />My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Typography variant="h5">FLORICULTURE</Typography>
          <ButtonGroup
            variant="text"
            color="secondary"
            className="ButtonGroup"
            aria-label="text primary button group"
          >
            <Button>
            <LockOpen
                    style={{
                      marginRight: 5,
                    }}
                  />
              <Link to="/login" className="headerLink">LOGIN</Link>
            </Button>
            <Button>
            <Create
                    style={{
                      marginRight: 5,
                    }}
                  />
              <Link to="/signup" className="headerLink">SIGNUP</Link></Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        {/* <Route path="/users">
            <Users />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default Header;
