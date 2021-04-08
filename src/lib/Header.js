import React from "react";
import Login from "./Login.js";
import Home from "./Home.js";
import Signup from "./Signup";
import Product from "./Product";
import Cart from "./Cart";
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
import ExitToApp from "@material-ui/icons/ExitToApp";
import Homeicon from "@material-ui/icons/Home";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Create from "@material-ui/icons/Create";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalFlorist from "@material-ui/icons/LocalFlorist";
import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";
import fire from "./config/firebase";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function HeaderNav() {
    var user = fire.auth().currentUser;
    // console.log("user", user.displayName)
    if (user) {
      return (
        <Typography
          variant="button"
          // color="secondary"
          style={{
            marginLeft: "60%",
          }}
        >
          Welcome {user.displayName}
          <ExitToApp
              style={{
                marginLeft: 20,
              }}
            />
        </Typography>
        
      );
    } else {
      return (
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
            <Link to="/login" className="headerLink">
              LOGIN
            </Link>
          </Button>
          <Button>
            <Create
              style={{
                marginRight: 5,
              }}
            />
            <Link to="/signup" className="headerLink">
              SIGNUP
            </Link>
          </Button>
        </ButtonGroup>
      );
    }
  }

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
            style={{
              padding: 30,
            }}
          >
            <MenuItem onClick={handleClose}>
              <Homeicon
                color="secondary"
                style={{
                  marginRight: 5,
                  fontSize: 23,
                }}
              />
              <Link to="/" className="Link">
                HOME
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LocalFlorist
                color="secondary"
                style={{
                  marginRight: 5,
                  fontSize: 23,
                }}
              />
              <Link to="/" className="Link">
                ADD BOUQUET
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ShoppingBasket
                color="secondary"
                style={{
                  marginRight: 5,
                  fontSize: 23,
                }}
              />
              <Link to="/cart" className="Link">
                CART
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <AccountCircle
                color="secondary"
                style={{
                  marginRight: 5,
                  fontSize: 23,
                }}
              />
              PROFILE
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{
                marginTop: 20,
              }}
            >
              <ExitToAppOutlined
                color="secondary"
                style={{
                  marginRight: 5,
                  fontSize: 23,
                }}
              />
              LOGOUT
            </MenuItem>
          </Menu>
          <Typography variant="h5">FLORICULTURE</Typography>
          <HeaderNav />
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
        <Route path="/cart">
          <Cart />
        </Route>
        {/* <Route path="/users">
            <Users />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default Header;
