import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon color="secondary"  />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Typography variant="h5">FLORICULTURE</Typography>
        {/* <Button
          color="secondary"
          // endIcon= {KeyboardArrowRightIcon}
          variant="outlined"
          aria-label="PLACE ORDER NOW"
        >
          LOGIN
        </Button> */}
        <ButtonGroup
          variant="text"
          color="secondary"
          className="ButtonGroup"
          aria-label="text primary button group"
        >
          <Button>LOGIN</Button>
          <Button>SIGNUP</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
