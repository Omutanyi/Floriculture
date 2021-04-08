import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MailOutline from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";
import fire from "./config/firebase";
import { Redirect } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedEmail: "",
      typedPassword: "",
      redirect: false,
    };
  }

  passwordOn = (e) => {
    let password = e.target.value;

    this.setState({ typedPassword: password });
  };

  emailOn = (e) => {
    let email = e.target.value;

    this.setState({ typedEmail: email });
  };

  submitOn = (e) => {
    this.login(e);
  };


  login = () => {
    let email = this.state.typedEmail;
    let password = this.state.typedPassword;

    console.log("details", email, password);
      fire
        .auth()
        .signInWithEmailAndPassword(
          this.state.typedEmail,
          this.state.typedPassword,
        )
        .then((res) => {
          console.log(res);
          console.log('User logged-in successfully!');
          this.setState({
            redirect: true,
          });
        })
        .catch((error) => this.setState({errorMessage: error.message}));
    
  };

  render() {
    if (this.state.redirect) {
      console.log("redirect func started", this.state.redirect);
      const location = {
        pathname: "/",
      };
      return <Redirect to={location} />;
    }
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
            <div className="login">
              <Typography color="primary" variant="subtitle1">
                LOGIN
              </Typography>
              <Typography variant="subtitle1" alignItems="center">
                Sign in to your account to proceed
              </Typography>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <MailOutline color="primary" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Email address"  onChange={(e) => this.emailOn(e)} required />
                </Grid>
              </Grid>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock color="primary" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Password"  onChange={(e) => this.passwordOn(e)} type="password" required />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => this.submitOn(e)}
                style={{
                  width: "30%",
                  margin: 20,
                }}
              >
                LOGIN
              </Button>
              <Snackbar
                open={this.state.added}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert onClose={this.handleClose} severity="success">
                  Please wait as we log you in to your account
                </Alert>
              </Snackbar>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
